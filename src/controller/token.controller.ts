import * as express from "express";
import { axiosTokenInfoRegister } from "../model/token/token.axios.service";
import { DeleteToken, GetTokenList, UpdateToken } from "../model/token/database/token.repository";

const router = express.Router();

router.get("/", (_req, res) => {
  GetTokenList();
  res.status(201).send();
});

router.get("/all", (_req, res) => {
    axiosTokenInfoRegister();
    res.status(201).send();
});

router.put("/:id", (req, res) => {
  const tokenId = parseInt(req.params.id);
  const tokenName = req.body.name;
  UpdateToken(tokenId, tokenName)
  res.status(201).send();
})

router.delete("/:id", (req, res) => {
  const tokenId = parseInt(req.params.id);
  DeleteToken(tokenId)
  res.status(201).send();
})

export = router;