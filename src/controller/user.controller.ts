import * as express from "express";
import { UserDelete, UserGet, UserRegister, UserUpdate } from "../model/user/user.service";

const router = express.Router();

router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userList = new UserGet(userId);
    userList.get(userId);
    res.status(200).send();
})

router.post('/register', async (req, res) => {
    const userName = req.body.name;
    const user = new UserRegister(userName);
    user.register(userName);
    res.status(200).send();
})

router.post('/update/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userName = req.body.name;
    const user = new UserUpdate(userId, userName);
    user.update(userId, userName);
    res.status(200).send();
})

router.post('/delete/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userActive = req.body.active;
    const user = new UserDelete(userId, userActive);
    user.delete(userId, userActive);
    res.status(200).send();
})

export = router;



