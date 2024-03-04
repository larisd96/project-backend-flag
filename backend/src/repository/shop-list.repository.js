const { dbConfig } = require("../config/data-base.config");
const {
  shopListModel,
  shopListItemModel,
} = require("../model/shop-list.model");

exports.getAllItemsRepository = async (userInfo) => {
  try {
    await dbConfig.sync();
    const result = await shopListModel.findAll({ where: { userId: userInfo.userId },
      include: "shopListItems",});

    return result;
  } catch (error) {
    throw error;
  }
};

exports.getItem = async (shopListId, userInfo) => {
  try {
    await dbConfig.sync();
    const result = await shopListModel.findOne({
      where: {
        id: shopListId,
        userId: userInfo.userId
      },
      include: "shopListItems",
    });
    return result;
  } catch (error) {
    throw error;
  }
};

exports.createShopListRepository = async (shopList, userInfo) => {
  const transaction = await dbConfig.transaction();

  try {
    await dbConfig.sync();
    const { id } = await shopListModel.create(
      {
        title: shopList.title, description: shopList.description, userId: userInfo.userId, createdBy: userInfo.name },
      {transaction}
    );
    if (shopList.shopListItems?.length){
      await shopListItemModel.bulkCreate(
        shopList.shopListItems.map((item) => ({...item,
          shopListId: id,
        })),
        { transaction }
      );
    }
    
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.updateShopListRepository = async (shopListId, shopListUpdate, userInfo) => {
  const transaction = await dbConfig.transaction();

  try {
    await dbConfig.sync();
    let updatedShopListItemCount;
    const [updatedShopListCount] = await shopListModel.update(
      {
        title: shopListUpdate.title,
        description: shopListUpdate.description,
        status: shopListUpdate.status,
      },
      {
        where: {
          id: shopListId,
          userId: userInfo.userId
        },
        transaction,
      }
    );

    if (shopListUpdate?.shopListItems?.length) {
      for (const shopListItem of shopListUpdate.shopListItems) {
        [updatedShopListItemCount] = await shopListItemModel.update(
          {
            title: shopListItem.title,
            quantity: shopListItem.quantity,
          },
          {
            where: {
              id: shopListItem.id,
              shopListId: shopListId,
            },
            transaction,
          }
        );
      }
    }

    if (updatedShopListCount === 0 && updatedShopListItemCount === 0) {
      throw new Error("Nothing to update");
    }

    await transaction.commit();
    return {
      success: true,
    };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.deleteShopListRepository = async (shopListId, userInfo) => {
  const transaction = await dbConfig.transaction();

  try {
    await dbConfig.sync();
    await shopListItemModel.destroy({
      where: {
        shopListId: shopListId,
      },
      transaction,
    });

    const deletedShopListCount = await shopListModel.destroy({
      where: {
        id: shopListId,
        userId: userInfo.userId
      },
      transaction,
    });

    if (deletedShopListCount === 0) {
      throw new Error("list not found");
    }
    await transaction.commit();

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
