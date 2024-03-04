const shopListRepository = require("../repository/shop-list.repository");

exports.getAllItemsService = async () => {
    try {
        const result = await shopListRepository.getAllItemsRepository();
        return result;
    } catch (error) {
        console.error("Error when get all shop lists", error)
        throw new Error("Error on get all shop lists");
    }
};

exports.getItemsService = async (shopListId) => {
    try {
        const result = await shopListRepository.getItem(shopListId);
        return result;
    } catch (error) {
        console.error("Error when get shop list", error)

        throw new Error("Error on get shop list");
    }
};

exports.createShopListService = async (shopList) => {
    try {
        await shopListRepository.createShopListRepository(shopList);
    } catch (error) {
        console.log("Error when create shop list", error);
        throw new Error("Error on create shop list");
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
        console.error("Error when update ", error)
        throw new Error("Error on update shop list");
    }
};

exports.deleteShopListService = async (shopListId) => {
    try {
        await shopListRepository.deleteShopListRepository(shopListId);
    } catch (error) {
        console.error("Error when deleting a shop list: ", error)
        throw new Error("Error on delete shop list");
    }
};
