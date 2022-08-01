import * as express from "express";
import { tokenPriceInfoRegister } from "../model/token/token.price.axios.service";
import { GetTokenPriceList } from "../model/token/database/token.price.repository";

const router = express.Router();

router.get("/", (_req, res) => {
  GetTokenPriceList();
  res.status(201).send();
});

router.get("/all", (_req, res) => {
  tokenPriceInfoRegister();
  res.status(201).send();
});

export = router;