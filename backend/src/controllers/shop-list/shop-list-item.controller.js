const service =require("../../services/shop-list-items.service")
exports.createShopListItem = async(req, res) => {
    try {
        await service.createShopListItemService(req.body, req.params.id);
        res.status(201).send("Shop List item created!");
    } catch(error) {
        console.error("Error occurred during shop list item create ", error.message)
        res.status(500).send(error.message);
    }
    };


exports.deleteShopListItem = async (req, res) => {
    try {
        await service.deleteShopListItemService(req.body);
        res.status(204).send()
    } catch (error) {
        console.error("Error occurred during delete shop list item", error.message);
        res.status(500).send(error.message);
    }
}

