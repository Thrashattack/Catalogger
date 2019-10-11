import express from 'express';
import bodyParser from 'body-parser';
import Controller from '../controller/Controller';
import cors from 'cors';


const app = express();
const port = 80;
app.use(cors);
app.use(bodyParser.json());
app.route('/').get((_, res) => {
    res.status(200);
    res.send("It Works!");
});
app.route('/').post(Controller.post);
app.listen(port, () => {
    console.log("[SERVICE] Catalogger service for TradeLog ==> Running At: http://localhost:" + port);
});