const service = require("../../services/shop-list.service");

exports.getAllItems = async (req, res) => {
  try {
    const result = await service.getAllItemsService(req.userInfo);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getShopList = async (req, res) => {
  try {
    const result = await service.getItemsService(req.params.id, req.userInfo);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createShopList = async (req, res) => {
  try {
    await service.createShopListService(req.body, req.userInfo);
    res.status(201).send("Shop List created!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateShopList = async (req, res) => {
  try {
    const updateShopList = await service.updateShopListService(
      req.params.id,
      req.body,
      req.userInfo
    );
    res.status(200).send(updateShopList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.deleteShopList = async (req, res) => {
  try {
    await service.deleteShopListService(req.params.id, req.userInfo);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
