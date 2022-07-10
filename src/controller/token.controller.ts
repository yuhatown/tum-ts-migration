import * as express from "express";
import { TokenListGet, TokenRegister } from "../model/token.service";
import axios from "axios";
import { tokenInfoConfig } from "../config";

const router = express.Router();

router.get("/", (_req, res) => {
  const tokenList = new TokenListGet();
  tokenList.get();
  res.status(200).send();
});

router.get("/coingecko", (_req, res) => {
    axios(tokenInfoConfig)
    .then(function (response) {
        const token = response.data;
        let i = 0;
      do {
        const tokenName = new TokenRegister(token[i].id);
        tokenName.register(token[i].id)
        i++;
      } while (i <= 10);
    })
    .catch(function (error) {
      console.log(error);
    });
    res.status(200).send();
});

export = router;

