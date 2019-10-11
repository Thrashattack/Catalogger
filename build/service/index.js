"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var Controller_1 = __importDefault(require("../controller/Controller"));
var app = express_1.default();
var port = 80;
app.use(body_parser_1.default.json());
app.route('/').get(function (_, res) {
    res.status(200);
    res.send("It Works!");
});
app.route('/').post(Controller_1.default.post);
app.listen(port, function () {
    console.log("[SERVICE] Catalogger service for TradeLog ==> Running At: http://localhost:" + port);
});
