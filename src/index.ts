import express from "express";

const app = express();

app.set('port', 3000);

app.get('/', (req, res) => {
    req.accepted
    res.status(200).send('Welcome to TUM_test');
});

app.listen(3000, () => {
    console.log(`connected! http://localhost:3000`);
})