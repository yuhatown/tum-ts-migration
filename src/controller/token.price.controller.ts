import * as express from "express";
import { TokenPriceListGet } from "../model/token/token.price.service";
import { tokenPriceInfo } from "../model/token/token.price.axios.service";

const router = express.Router();

router.get("/", (_req, res) => {
  const tokenPriceList = new TokenPriceListGet();
  tokenPriceList.get();
  res.status(201).send();
});

router.get("/coingecko/all", (_req, res) => {
  tokenPriceInfo();
  res.status(201).send();
});

export = router;