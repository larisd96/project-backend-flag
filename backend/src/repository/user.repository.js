const  { dbConfig} = require("../config/data-base.config")
const { userModel} = require("../model/user.model");

exports.getAllUsersRepository = async () => {
    try {
        await dbConfig.sync();
        const result = await userModel.findAll();
      
        return result;
    }catch (error) {
      throw new Error("Error fetching users: " + error.message);
    }
  };

  exports.getUserByIdRepository = async (userId) => {
    try {
        await dbConfig.sync();
        const user = await userModel.findByPk(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        throw new Error("Error fetching user: " + error.message);
    }
};

exports.createUserRepository = async (userData)=> {
    try{
        await dbConfig.sync();
        return await userModel.create(userData);
    } catch (error){   throw new Error("Error creating user: " + error.message);

    }
};


exports.updateUserRepository = async(userId, userData) =>{
    try{
        await dbConfig.sync();
        const[updateRows] = await userModel.update(userData,{
            where: {
                id: userId}
        });
        if(updateRows === 0){
            throw new Error("User not found");
        } 
    } catch(error){
        throw new Error("Error updating user:" + error.message);

    }
};

exports.deleteUserRepository = async (userId) =>{
    try {
        await dbConfig.sync();
        const deletedRows = await userModel.destroy({
            where: { id: userId }
        });
        if (deletedRows === 0) {
            throw new Error("User not found");
        }
    } catch (error) {
        throw new Error("Error deleting user: " + error.message);
    }
};