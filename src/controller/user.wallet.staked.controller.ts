import * as express from "express";
import { GetWalletAddressInfo } from "../model/staked/database/user.wallet.staked.repository";

const router = express.Router();

router.post("/near", async (req, res) => {
    const { userId, walletId } = req.body
    GetWalletAddressInfo(userId, walletId)
    res.status(201).send();
})

export = router;
