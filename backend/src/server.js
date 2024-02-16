const express = require("express");
const { testConnection } = require("./config/data-base.config");
const shopList = require("./routes/shopList.route");
const app = express();
const port = 8080;

testConnection();

const apiRouter = express.Router();

app.use(express.json());

app.use("/api/v1", apiRouter);
apiRouter.use("/shop-list", shopList);

app.listen(port, () =>  { console.log(`Server is running at http://localhost:${port}`);
});
