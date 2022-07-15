import * as express from "express";
import { UserWalletDelete, UserWalletGet, UserWalletRegister, UserWalletUpdate } from "../model/user/user.wallet.service";

const router = express.Router();

router.get('/:user_id', (req, res) => {
    const userId = parseInt(req.params.user_id);
    const userWalletList = new UserWalletGet(userId);
    userWalletList.get(userId);
    res.status(200).send();
})

router.post('/register', (req, res) => {
    const { userId, tokenId, userWallet } = req.body;
    const wallet = new UserWalletRegister(userId, tokenId, userWallet)
    wallet.register(userId, tokenId, userWallet)
    res.status(200).send();
})

router.post('/update/:id', (req, res) => {
    const walletId = parseInt(req.params.id);
    const { tokenId, userWallet } = req.body;
    const wallet = new UserWalletUpdate(walletId, tokenId, userWallet)
    wallet.update(walletId, tokenId, userWallet)
    res.status(200).send();
})

router.post('/delete/:id', (req, res) => {
    const walletId = parseInt(req.params.id);
    const wallet = new UserWalletDelete(walletId);
    wallet.delete(walletId);
    res.status(200).send();
})

export = router;