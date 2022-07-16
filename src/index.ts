import express from "express";
import mainRouter from "./controller/main.controller";
import userRouter from "./controller/user.controller";
import userWalletRouter from "./controller/user.wallet.controller";
import tokenRouter from "./controller/token.controller";
import tokenPriceRouter from "./controller/token.price.controller";
import userWalletMapRouter from "./controller/user.wallet.map.controller"
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("/user", userRouter);
app.use("/user/wallet", userWalletRouter);
app.use("/user/wallet/map", userWalletMapRouter);
app.use("/token", tokenRouter);
app.use("/token/price", tokenPriceRouter);

app.listen(process.env.DB_PORT, () => {
  console.log(`connected! http://localhost:${process.env.DB_PORT}`);
});