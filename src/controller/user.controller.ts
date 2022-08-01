import * as express from "express";
import { DeleteUser, GetUser, RegisterUser, UpdateUser } from "../model/user/database/user.repository";

const router = express.Router();

router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    GetUser(userId)
    res.status(201).send();
})

router.post('/', async (req, res) => {
    const userName = req.body.name;
    RegisterUser(userName)
    res.status(201).send();
})

router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userName = req.body.name;
    UpdateUser(userId, userName)
    res.status(201).send();
})

router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userActive = req.body.active;
    DeleteUser(userId, userActive)
    res.status(201).send();
})

export = router;



