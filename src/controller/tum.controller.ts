import * as express from "express";
import { CollectWalletStaked, GetTum } from "../model/tum/database/tum.repository";

const router = express.Router();

router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    GetTum(userId)
    res.status(201).send()

})

router.post("/", (req, res) => {
    const userId = req.body.id
    CollectWalletStaked(userId)
    res.status(201).send()
})

export = router;
