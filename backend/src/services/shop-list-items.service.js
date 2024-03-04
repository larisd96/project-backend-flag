const shopListRepository =require("../repository/shop-list-item.repository")

exports.createShopListItemService = async (shopListItem, shopListId) => {
    try {
        await shopListRepository.createShopListItemRepository(shopListItem, shopListId);
    } catch (error) {
        console.error("Error when create shop list item", error);
        throw new Error("Error on create shop list item");
    }
};

exports.deleteShopListItemService = async (shopListIds) => {
    try {
        await shopListRepository.deleteShopListItemsRepository(shopListIds);
    } catch (error) {
        console.error("Error when delete shop list item", error)
        throw new Error("Error on delete shop list item");
    }
};