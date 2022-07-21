import * as express from "express";
import { UserWalletDelete, UserWalletRegister, UserWalletUpdate } from "../model/user/user.wallet.service";

const router = express.Router();

router.post('/register', async (req, res) => {
    const { relationToken, userWallet } = req.body;
    const wallet = new UserWalletRegister(relationToken, userWallet)
    wallet.register(relationToken, userWallet)
    res.status(201).send();
})

router.post('/update/:id', (req, res) => {
    const walletId = parseInt(req.params.id);
    const { tokenId, userWallet } = req.body;
    const wallet = new UserWalletUpdate(walletId, tokenId, userWallet)
    wallet.update(walletId, tokenId, userWallet)
    res.status(201).send();
})

router.post('/delete/:id', (req, res) => {
    const walletId = parseInt(req.params.id);
    const wallet = new UserWalletDelete(walletId);
    wallet.delete(walletId);
    res.status(201).send();
})

export = router;