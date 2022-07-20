import * as express from "express";
import { WalletAddressGet } from "../model/staked/user.wallet.staked.service";

const router = express.Router();

router.get("/near", async (req, res) => {
    const { userId, walletId } = req.body
    const walletAddress = new WalletAddressGet(userId, walletId);
    walletAddress.get(userId, walletId);
    res.status(200).send();
})

export = router;
