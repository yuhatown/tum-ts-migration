import * as express from "express";
import { WalletAddressGet } from "../model/staked/user.wallet.staked.service";

const router = express.Router();

router.get("/near", async (req, res) => {
    const userId = req.body.id
    const walletAddress = new WalletAddressGet(userId);
    walletAddress.get(userId);
    res.status(200).send();
})

export = router;
