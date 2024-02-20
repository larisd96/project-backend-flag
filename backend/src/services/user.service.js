const userRepository = require("../repository/user.repository");

exports.getAllUsersService= async () => {
  try {
    return await userRepository.getAllUsersRepository();
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

exports.getUserById = async (userId) => {
  try {
    return await userRepository.getUserByIdRepository(userId);
  } catch (error) {
    throw new Error("Error fetching user: " + error.message);
  }
};

exports.createUserService = async (userData) => {
  try {
    return await userRepository.createUserRepository(userData);
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

exports.updateUserService = async (userId, userData) => {
  try {
    return await userRepository.updateUserRepository(userId, userData);
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

exports.deleteUserService = async (userId) => {
    try {
      return await userRepository.deleteUserRepository(userId);
    } catch (error) {
      throw new Error("Error deleting user: " + error.message);
    }
  };