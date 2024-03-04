const { dbConfig } = require("../config/data-base.config");
const { UserModel } = require("../model/user.model");

exports.registrationRepository = async (user) => {
  const { name, password, email } = user;

  try {
    dbConfig.sync();
    const result = await UserModel.findOne({ where: { email } })

    if (result) {
      throw new Error("user already exists")
    } else {
      await UserModel.create({name, password, email});
    }
  } catch (error) {
    throw error;
  }
};

 exports.getUserByEmail = async (email) => {
    try {
        dbConfig.sync();
        const result = await UserModel.findOne({ where: { email } });
        if (result) {
            return {id: result.id, name: result.name,  email: result.email, password: result.password};
        }
    } catch (error) {
        throw error;
    }
 };