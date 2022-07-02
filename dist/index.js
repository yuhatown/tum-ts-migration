"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.set('port', 3000);
app.get('/', function (req, res) {
    req.accepted;
    res.status(200).send('Welcome to TUM_test');
});
app.listen(3000, function () {
    console.log("connected! http://localhost:3000");
});
