import * as express from "express";
import { GetInfo } from "../model/tum/database/tum.each.repository";
import { TumEachGet } from "../model/tum/tum.each.service";

const router = express.Router();

router.get("/:id", (req, res) => {
    const stakedId = parseInt(req.params.id)
    const tumEach = new TumEachGet(stakedId)
    tumEach.get(stakedId)
    res.status(201).send()
})

router.post("/near", (req, res) => {
    const tokenId = req.body.id
    GetInfo(tokenId)
    res.status(201).send()
})

export = router;
