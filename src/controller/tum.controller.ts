import * as express from "express";
import { WalletStaked } from "../model/tum/tum.service";

const router = express.Router();

router.get("/collect", (req, res) => {
    const userId = req.body.id
    const tum = new WalletStaked(userId)
    tum.get(userId)
    res.status(201).send()
})

export = router;
