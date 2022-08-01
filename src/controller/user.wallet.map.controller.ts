import * as express from "express";
import { DeleteUserWalletMap, GetUserWalletMap, RegisterUserWalletMap } from "../model/user/database/user.wallet.map.repository";

const router = express.Router();

router.get('/', (req, res) => {
    const userId = req.body.id
    GetUserWalletMap(userId)
    res.status(201).send();
})

router.post('/', (req, res) => {
    const { userId, walletId } = req.body
    RegisterUserWalletMap(userId, walletId)
    res.status(201).send();
})

router.delete('/:id', (req, res) => {
    const mapId = req.body.id
    DeleteUserWalletMap(mapId)
    res.status(201).send();
})

export = router;