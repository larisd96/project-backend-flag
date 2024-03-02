const { dbConfig } = require("../config/data-base.config");
const {
  shopListModel,
  shopListItemModel,
} = require("../model/shop-list.model");

exports.getAllItemsRepository = async () => {
  try {
    await dbConfig.sync();
    const result = await shopListModel.findAll({
      include: "shopListItem",
    });

    return result;
  } catch (error) {
    throw error;
  }
};

exports.getItem = async (shopListId) => {
  try {
    await dbConfig.sync();
    const result = await shopListModel.findOne({
      where: {
        id: shopListId,
      },
      include: "shopListItem",
    });
    return result;
  } catch (error) {
    throw error;
  }
};

exports.createShopListRepository = async (shopList) => {
  const transaction = await dbConfig.transaction();

  try {
    await dbConfig.sync();
    const { id } = await shopListModel.create(
      {
        title: shopList.title,
        description: shopList.description,
      },
      transaction
    );
    await shopListItemModel.bulkCreate(
      shopList.shopListItems.map((item) => ({
        ...item,
        shopListId: id,
      })),
      { transaction }
    );
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.updateShopListRepository = async (shopListId, shopListUpdate) => {
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
        },
        transaction,
      }
    );

    if (shopListUpdate?.shopListItems?.length) {
      for (const shopListItem of shopListUpdate.shopListItem) {
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
      sucess: true,
    };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.deleteShopListRepository = async (shopListId) => {
  const transaction = await dbConfig.transaction();

  try {
    await dbConfig.sync();
    await shopListItemModel.destroy({
      where: {
        id: shopListId,
      },
      transaction,
    });

    const deletedShopListCount = await shopListItemModel.destroy({
      where: {
        id: shopListId,
      },
      transaction,
    });

    if (deletedShopListCount === 0) {
      throw new Error("Shop List Not Found");
    }
    await transaction.commit();
    return {
      sucess: true,
    };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
