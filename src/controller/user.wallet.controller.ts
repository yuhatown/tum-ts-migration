import * as express from "express";
import { DeleteUserWallet, RegisterUserWallet, UpdateUserWallet } from "../model/user/database/user.wallet.repository";

const router = express.Router();

router.post('/', async (req, res) => {
    const { relationToken, userWallet } = req.body;
    RegisterUserWallet(relationToken, userWallet)
    res.status(201).send();
})

router.put('/:id', (req, res) => {
    const walletId = parseInt(req.params.id);
    const { tokenId, userWallet } = req.body;
    UpdateUserWallet(walletId, tokenId, userWallet)
    res.status(201).send();
})

router.delete('/:id', (req, res) => {
    const walletId = parseInt(req.params.id);
    DeleteUserWallet(walletId)
    res.status(201).send();
})

export = router;