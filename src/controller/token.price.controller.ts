import * as express from "express";
import { TokenPriceListGet } from "../model/token/token.price.service";
import { tokenPriceInfo } from "../model/token/token.price.axios.service";
import { Token } from "../model/token/entity/token.entity";

const router = express.Router();

router.get("/", (_req, res) => {
  const tokenPriceList = new TokenPriceListGet();
  tokenPriceList.get();
  res.status(200).send();
});

router.get("/coingecko/all", (req, res) => {
  const tokenIdRelation: Token = req.body.id;
  tokenPriceInfo(tokenIdRelation);
  res.status(200).send();
});

export = router;