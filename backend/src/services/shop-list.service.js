const { updateShopList } = require("../controllers/shop-list/shop-list.controller");
const shopListRepository = require("../repository/shop-list.repository");

exports.getAllItemsService = async () => {
    try {
        const result = await shopListRepository.getAllItemsRepository();
        return result;
    } catch (error) {
        throw new Error("Error");
    }
};

exports.createShopListService = async (shopList) => {
    try {
        await shopListRepository.createShopListRepository(shopList);
    } catch (error) {
        console.log(error);
        throw new Error("Error");
    }
};

exports.updateShopListService = async (shopListId, shopList) => {
    try {
        const result = await shopListRepository.updateShopListRepository(shopListId, shopList);
        if(result) {
            const shopList = await shopListRepository.getItem(shopListId)
            return shopList
        }
   
    } catch (error) {
        throw new Error("Error");
    }
};

exports.deleteShopListService = async (shopListId) => {
    try {
        await shopListRepository.deleteShopListRepository(shopListId);
    } catch (error) {
        throw new Error("Error");
    }
};
