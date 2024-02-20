const userService = require("../../services/user.service");

exports.getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsersService();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserByIdService(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(404).send({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUserService(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    console.error("Error creating user", error);
    res.status(400).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await userService.updateUserService(req.params.id, req.body);
    res.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    console.error("Error updating user", error);
    res.status(404).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUserService(req.params.id);
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(404).send({ error: error.message });
  }
};
