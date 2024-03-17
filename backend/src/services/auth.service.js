const bcrypt = require("bcryptjs");
const repository = require("../repository/auth.repository");
const {generateToken} = require("../jwt/jwt");

exports.authenticationService = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    console.error("Invalid credentials");
    throw new Error("Bad credentials");
  }

  try {
    const user = await repository.getUserByEmail(email);
    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword) {
      throw new Error("Invalid password")
    }

    if (user && validPassword) {
      return generateToken(user);
    }
  } catch (error) {
    console.error("Error when authenticated the user ", error);
    throw new Error("Bad credentials");
  }
};

exports.registrationService = async (data) =>{
  const { name, email, password, passwordConfirm } = data;
  if (password !== passwordConfirm) {
    console.error("User password do not match")
    throw new Error ("Password do not match");

  }
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    await repository.registrationRepository({
      name, 
      email,
      password: hashedPassword,
    });
    console.info("User registration success");
  } catch (error) {
    if (error.message === "user already exists") {
      console.error("Error to save the user registration", error.message);
      throw new Error("Failed to generate the registration" + error.message);
    }
  }
};