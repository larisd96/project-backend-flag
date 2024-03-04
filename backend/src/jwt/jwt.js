const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET || "my-secret",
    { expiresIn: "3d" }
  );
};

exports.jwtValidation = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || "my-secret");
    req.userInfo = { userId: data.userId, name: data.name };
    return next();
  } catch {
    return res.sendStatus(403);
  }
};
