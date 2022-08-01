import * as express from "express";
import { GetInfo, GetTumEach } from "../model/tum/database/tum.each.repository";

const router = express.Router();

router.get("/:id", (req, res) => {
    const stakedId = parseInt(req.params.id)
    GetTumEach(stakedId)
    res.status(201).send()
})

router.post("/near", (req, res) => {
    const tokenId = req.body.id
    GetInfo(tokenId)
    res.status(201).send()
})

export = router;
