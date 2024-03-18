const service = require("../../services/auth.service");

exports.authentication = async (req, res) => {
  try {
    const auth = await service.authenticationService(req.body);
    res.cookie("access_token", auth, { maxAge: 3600000, sameSite: 'None',});
    res.status(200).send("Login success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.registration = async (req, res) => {
  try {
    await service.registrationService(req.body);

    res.status(201).send("User registered");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).send("User logout");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
