import { Request, Response } from 'express';
import Candle from '../model/Candle';
import Catalogger from '../service/Catalogger';

export default class Controller {
    /**
     * @api {post} / Requisita a catalogação de um grupo de velas
     * @apiName Catalogger
     * @apiGroup TradeLog
     *
     * @apiParamExample
     *  {
     *      [
    { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "N" }, { "cor": "G" },
    { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" },
    { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" },
    { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" },
    { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" },
    { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" },
    { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" },
    { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" },
    { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "N" },
    { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" },
    { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" },
    { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" },
    { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" },
    { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" },
    { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
    { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" },
    { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "N" },
    { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" },
    { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }
]
     *  }
     *
     * @apiSuccessExample
     * HTTP 202 Accepted 
     *  {
     *      [
     *          "MHI": {
     *              "size": "100",
     *              "winRateFinal": "91%",
     *              "winRateBeforeFirstHit": "95%",
     *              "winRateBetweenHits": ["95%", "100%", "81%", "99%", "79%", "91%", "91%", "90%" ],
     *              "firstOrderWinRate:"66%",
     *              "firstMgWinRate ":"12%",
     *              "secondMgWinRate ":"15%",
     *              "hitRate": "9%",
     *              "winRateAfterHit":"100%",
     *              "firstOrderWinRateAfterHit:"66%",
     *              "firstMgWinRateAfterHit ":"12%",
     *              "secondMgWinRateAfterHit ":"15%",
     *              "hitAfterHit": "0%",
     *              "fiveCandlesBeforeEachHit": [
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ]
     *                                      ]
     *
     *          },
     *          "Estrategia 2": {
     *              "size": "100",
     *              "winRateFinal": "91%",
     *              "winRateBeforeFirstHit": "95%",
     *              "winRateBetweenHits": ["95%", "100%", "81%", "99%", "79%", "91%", "91%", "90%" ],
     *              "firstOrderWinRate:"66%",
     *              "firstMgWinRate ":"12%",
     *              "secondMgWinRate ":"15%",
     *              "hitRate": "9%",
     *              "winRateAfterHit":"100%",
     *              "firstOrderWinRateAfterHit:"66%",
     *              "firstMgWinRateAfterHit ":"12%",
     *              "secondMgWinRateAfterHit ":"15%",
     *              "hitAfterHit": "0%",
     *              "fiveCandlesBeforeEachHit": [
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ]
     *                                      ]
     *
     *          },
     *          "Estrategia 3": {
     *              "size": "100",
     *              "winRateFinal": "91%",
     *              "winRateBeforeFirstHit": "95%",
     *              "winRateBetweenHits": ["95%", "100%", "81%", "99%", "79%", "91%", "91%", "90%" ],
     *              "firstOrderWinRate:"66%",
     *              "firstMgWinRate ":"12%",
     *              "secondMgWinRate ":"15%",
     *              "hitRate": "9%",
     *              "winRateAfterHit":"100%",
     *              "firstOrderWinRateAfterHit:"66%",
     *              "firstMgWinRateAfterHit ":"12%",
     *              "secondMgWinRateAfterHit ":"15%",
     *              "hitAfterHit": "0%",
     *              "fiveCandlesBeforeEachHit": [
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
     *                                              [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
     *                                              [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
     *                                              [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ]
     *                                      ]
     *
     *          },
     *      ]
     *  }
     *  
     * 
     * @apiError BadRequest Corpo do objeto da Velas está incorreto
     * 
     * @apiErrorExample 
     * {
     *   "Corpo do objeto {Object} está incorreto"
     * }
     * 
     */
    public static post(req: Request, res: Response) {
        let responseArray: Array<any> = new Array<any>();
        const catalogo = new Catalogger();
        req.body.forEach((candle: any) => {
            try {
                const candleObj = new Candle(candle.cor);
                if (!candleObj) {
                    res.status(400);
                    res.send(`Corpo do objeto ${candle} \nestá incorreto`);
                    res.end();
                }
                catalogo.inputCandle(candleObj);
            } catch (err) {
                res.status(500);
                res.json(err);
                res.end();
            }
        });
        catalogo.calculaMHI();
        responseArray = catalogo.toResponse();
        res.status(202);
        res.json(responseArray);
        res.end();
    }
}