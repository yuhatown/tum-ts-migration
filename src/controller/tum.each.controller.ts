import * as express from "express";
import { InfoGet } from "../model/tum/tum.each.service";

const router = express.Router();

router.get("/near", (req, res) => {
    const tokenId = req.body.id
    const info = new InfoGet(tokenId)
    info.get(tokenId)
    res.status(200).send()
})

export = router;
