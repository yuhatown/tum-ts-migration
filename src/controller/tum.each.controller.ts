import * as express from "express";
import { GetInfo } from "../model/tum/database/tum.each.repository";

const router = express.Router();

router.post("/near", (req, res) => {
    const tokenId = req.body.id
    GetInfo(tokenId)
    res.status(201).send()
})

export = router;
