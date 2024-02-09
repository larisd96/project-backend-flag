const service = require("../../services/shop-list.service")

exports.getAllItems = async (req, res) => {
    try {
        const result = await service.getAllItemsService()
        res.status(200).send(result)
    } catch {
        res.status(500).send("request falhou");
    }



}


