const shopListRepository = require("../repository/shop-list.repository");

exports.getAllItemsService = async (userInfo) => {
    try {
        const result = await shopListRepository.getAllItemsRepository(userInfo);
        return result;
    } catch (error) {
        console.error("Error when get all shop lists", error)
        throw new Error("Error on get all shop lists");
    }
};

exports.getItemsService = async (shopListId, userInfo) => {
    try {
        const result = await shopListRepository.getItem(shopListId, userInfo);
        return result;
    } catch (error) {
        console.error("Error when get shop list", error)

        throw new Error("Error on get shop list");
    }
};

exports.createShopListService = async (shopList, userInfo) => {
    try {
        await shopListRepository.createShopListRepository(shopList, userInfo);
    } catch (error) {
        console.log("Error when create shop list", error);
        throw new Error("Error on create shop list");
    }
};

exports.updateShopListService = async (shopListId, shopList, userInfo) => {
    try {
        const result = await shopListRepository.updateShopListRepository(shopListId, shopList, userInfo);
        if(result) {
            const shopList = await shopListRepository.getItem(shopListId, userInfo)
            return shopList
        }
   
    } catch (error) {
        console.error("Error when update ", error)
        throw new Error("Error on update shop list");
    }
};

exports.deleteShopListService = async (shopListId, userInfo) => {
    try {
        await shopListRepository.deleteShopListRepository(shopListId, userInfo);
    } catch (error) {
        console.error("Error when deleting a shop list: ", error)
        throw new Error("Error on delete shop list");
    }
};
