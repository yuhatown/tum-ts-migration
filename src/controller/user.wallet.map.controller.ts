import * as express from "express";
import { UserWalletMapDelete, UserWalletMapGet, UserWalletMapRegister } from "../model/user/user.wallet.map.service";


const router = express.Router();

router.get('/info', (req, res) => {
    const userId = req.body.id;
    const userMap = new UserWalletMapGet(userId)
    userMap.get(userId)
    res.status(200).send();
})

router.post('/register/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const walletId = req.body.walletId
    const userMap = new UserWalletMapRegister(userId, walletId)
    userMap.register(userId, walletId)
    res.status(200).send();
})

router.post('/delete/:id', (req, res) => {
    const mapId = parseInt(req.params.id)
    const userMap = new UserWalletMapDelete(mapId)
    userMap.delete(mapId)
    res.status(200).send();
})

export = router;