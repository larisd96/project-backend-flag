const { dbConfig } = require("../config/data-base.config");
const { shopListSchema } = require("./schemas/shopList.schemas");

exports.getAllItemsRepository = async () => {
  try {
    await dbConfig.sync();
    const result = await shopListSchema.findAll(); 
   
    return result;
  } catch (error) {}
};

exports.createShopListRepository = async (shopList) => { 
  try {
    await dbConfig.sync();
    await shopListSchema.create({
      title: shopList.title,
      description: shopList.description,
    });
  } catch (error) {
    console.error(error);
   }
};


exports.updateShopListRepository = async (shopListId, shopListUpdate) => {
  try {
    await dbConfig.sync();
    const result = await shopListSchema.update(
      {
        title: shopListUpdate.title,
        description: shopListUpdate.description,
      },
      {
        where: {
          id: shopListId,
        },
      }
    );
    return result;
  } catch (error) {
    console.error(error);
}
};

exports.deleteShopListRepository = async (shopListId) => {
  try {
    await dbConfig.sync();
    await shopListSchema.destroy({
      where: {
        id: shopListId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
