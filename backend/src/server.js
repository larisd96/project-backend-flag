const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config();
const { testConnection } = require("./config/data-base.config");
const shopList = require("./routes/shop-list.route");
const authRouter = require("./routes/auth.route");

const app = express();
const port = process.env.PORT || 8080 ; 

const clientUrl =  process.env.CLIENT_ORIGIN_URL || "http://localhost:3000"
const corsOptions = {
    origin: clientUrl,
    optionsSuccessStatus: 200, 
    credentials: true
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

testConnection();
const apiRouter = express.Router();

app.use("/api/v1", apiRouter);
apiRouter.use("/shop-list", shopList);
apiRouter.use("/login", authRouter);

app.listen(port, () =>  { console.log(`Server is running at http://localhost:${port}`);
});
