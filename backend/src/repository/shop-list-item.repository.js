const { dbConfig } = require("../config/data-base.config");
const {
  shopListItemModel,
} = require("../model/shop-list.model");

exports.createShopListItemRepository = async (shopListItems, shopListId) => {
  try {
    await dbConfig.sync();
    await shopListItemModel.bulkCreate(
      shopListItems.shopListItems.map((item) => ({ ...item, shopListId })),
    );
  } catch (error) {
    throw error;
  }
};

exports.deleteShopListItemsRepository = async (shopListItemsIds) => {
  const transaction = await dbConfig.transaction();
  try {
    dbConfig.sync();
    const deletedShopListItemCount = await shopListItemModel.destroy({
      where: {
        id: shopListItemsIds.shopListItemsIds,
      },
      transaction,
    });
    if (deletedShopListItemCount === 0) {
      throw new Error("nothing to delete");
    }
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
