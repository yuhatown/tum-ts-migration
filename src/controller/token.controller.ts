import * as express from "express";
import { TokenDelete, TokenListGet, TokenRegister, TokenUpdate } from "../model/token.service";
import axios from "axios";
import { tokenInfoConfig } from "../config";

const router = express.Router();

router.get("/", (_req, res) => {
  const tokenList = new TokenListGet();
  tokenList.get();
  res.status(200).send();
});

router.get("/coingecko/all", (_req, res) => {
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

router.post("/update/:id", (req, res) => {
  const tokenId = parseInt(req.params.id);
  const tokenName = req.body.name;
  const token = new TokenUpdate(tokenId, tokenName);
  token.update(tokenId, tokenName)
  res.status(200).send();
})

router.post("/delete/:id", (req, res) => {
  const tokenId = parseInt(req.params.id);
  const token = new TokenDelete(tokenId);
  token.delete(tokenId);
  res.status(200).send();
})

export = router;

