import * as express from "express";
import { UserTumGet, WalletStaked } from "../model/tum/tum.service";

const router = express.Router();

router.get("/:id", (req, _res) => {
    const userId = parseInt(req.params.id)
    const tum = new UserTumGet(userId)
    tum.get(userId)

})

router.post("/", (req, res) => {
    const userId = req.body.id
    const tum = new WalletStaked(userId)
    tum.get(userId)
    res.status(201).send()
})

export = router;
