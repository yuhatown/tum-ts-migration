import * as express from "express";
import { TokenDelete, TokenListGet, TokenUpdate } from "../model/token/token.service";
import { axiosTokenInfo } from "../model/token/token.axios.service";

const router = express.Router();

router.get("/", (_req, res) => {
  const tokenList = new TokenListGet;
  tokenList.get();
  res.status(200).send();
});

router.get("/coingecko/all", (_req, res) => {
    axiosTokenInfo();
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