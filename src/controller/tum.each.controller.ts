import * as express from "express";
import { InfoGet } from "../model/tum/tum.each.service";

const router = express.Router();

router.get("/near", (req, res) => {
    const mapId = req.body.id
    const info = new InfoGet(mapId)
    info.get(mapId)
    res.status(200).send()
})

export = router;
