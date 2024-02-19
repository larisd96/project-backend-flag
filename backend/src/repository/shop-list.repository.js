const { dbConfig } = require("../config/data-base.config");
const { shopListModel } = require("../model/shop-list.model");

exports.getAllItemsRepository = async () => {
  try {
    await dbConfig.sync();
    const result = await shopListModel.findAll(); 
   
    return result;
  } catch (error) {}
};

exports.getItem = async (shopListId) => {
  try {
    await dbConfig.sync();
    const result = await shopListModel.findOne({
      where: {
        id: shopListId,
      },
    }); 
return result;
  } catch (error){
    throw error 
  }
};

exports.createShopListRepository = async (shopList) => { 
  try {
    await dbConfig.sync();
    await shopListModel.create(shopList);
  } catch (error) {
    console.error(error);
   }
};


exports.updateShopListRepository = async (shopListId, shopListUpdate) => {
  try {
    await dbConfig.sync();
    await shopListModel.update(
      shopListUpdate,
      {
        where: {
          id: shopListId,
        },
      }
    );

    const result = await shopListModel.findOne({
      where: {
        id: shopListId,
      },
    });

    return result;
  } catch (error) {
    console.error(error);
}
};

exports.deleteShopListRepository = async (shopListId) => {
  try {
    await dbConfig.sync();
    await shopListModel.destroy({
      where: {
        id: shopListId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
