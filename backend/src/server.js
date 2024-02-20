const express = require("express");
const { testConnection } = require("./config/data-base.config");
const shopList = require("./routes/shop-list.route");
const userRoute = require("./routes/user.route");
const app = express();
const port = 8080;

testConnection();

const apiRouter = express.Router();

app.use(express.json());

app.use("/api/v1", apiRouter);
apiRouter.use("/shop-list", shopList);
apiRouter.use("/users", userRoute); 
app.listen(port, () =>  { console.log(`Server is running at http://localhost:${port}`);
});
