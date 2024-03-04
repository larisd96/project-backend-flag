const shopListRepository =require("../repository/shop-list-item.repository")

exports.createShopListItemService = async (shopListItem, shopListId) => {
    try {
        await shopListRepository.createShopListItemRepository(shopListItem, shopListId);
    } catch (error) {
        console.log(error);
        throw new Error("Error");
    }
};

exports.deleteShopListItemService = async (shopListIds) => {
    try {
        await shopListRepository.deleteShopListItemsRepository(shopListIds);
    } catch (error) {
        throw new Error("Error");
    }
};