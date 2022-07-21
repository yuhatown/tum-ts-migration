import * as express from "express";
import { TokenDelete, TokenListGet, TokenUpdate } from "../model/token/token.service";
import { axiosTokenInfoRegister } from "../model/token/token.axios.service";

const router = express.Router();

router.get("/list", (_req, res) => {
  const tokenList = new TokenListGet;
  tokenList.get();
  res.status(201).send();
});

router.get("/register/all", (_req, res) => {
    axiosTokenInfoRegister();
    res.status(201).send();
});

router.put("/update/:id", (req, res) => {
  const tokenId = parseInt(req.params.id);
  const tokenName = req.body.name;
  const token = new TokenUpdate(tokenId, tokenName);
  token.update(tokenId, tokenName)
  res.status(201).send();
})

router.delete("/delete/:id", (req, res) => {
  const tokenId = parseInt(req.params.id);
  const token = new TokenDelete(tokenId);
  token.delete(tokenId);
  res.status(201).send();
})

export = router;