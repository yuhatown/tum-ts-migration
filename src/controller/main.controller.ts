import * as express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    req.accepted
    res.status(200).send('Welcome to TUM_test');
})

export default router;