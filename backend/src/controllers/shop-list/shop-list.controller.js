const service = require("../../services/shop-list.service");

exports.getAllItems = async (req, res) => {
  try {
    const result = await service.getAllItemsService();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getShopList = async (req, res) => {
  try {
    const result = await service.getItemsService(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createShopList = async (req, res) => {
  try {
    await service.createShopListService(req.body);
    res.status(201).send("Shop List created!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateShopList = async (req, res) => {
  try {
    const updateShopList = await service.updateShopListService(
      req.params.id,
      req.body
    );
    res.status(200).send(updateShopList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.deleteShopList = async (req, res) => {
  try {
    await service.deleteShopListService(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
