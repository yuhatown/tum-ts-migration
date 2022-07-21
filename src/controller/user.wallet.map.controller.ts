import * as express from "express";
import { UserWalletMapDelete, UserWalletMapGet, UserWalletMapRegister } from "../model/user/user.wallet.map.service";


const router = express.Router();

router.get('/info', (req, res) => {
    const userId = req.body.id
    const userMap = new UserWalletMapGet(userId)
    userMap.get(userId)
    res.status(201).send();
})

router.post('/register', (req, res) => {
    const { userId, walletId } = req.body
    const userMap = new UserWalletMapRegister(userId, walletId)
    userMap.register(userId, walletId)
    res.status(201).send();
})

router.delete('/delete', (req, res) => {
    const mapId = req.body.id
    const userMap = new UserWalletMapDelete(mapId)
    userMap.delete(mapId)
    res.status(201).send();
})

export = router;