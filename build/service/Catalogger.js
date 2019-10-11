"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Estrategia_1 = __importDefault(require("../model/Estrategia"));
var Catalogger = /** @class */ (function () {
    function Catalogger() {
        this._mhi = new Estrategia_1.default();
        this._candles = [];
    }
    Object.defineProperty(Catalogger.prototype, "candles", {
        get: function () {
            return this._candles;
        },
        enumerable: true,
        configurable: true
    });
    Catalogger.prototype.inputCandle = function (candle) {
        this._candles.push(candle);
    };
    Catalogger.prototype.calculaMHI = function () {
        var candlesByFive = [];
        var j = 0;
        // 5 Velas - Tempo entre uma opçao e outra
        for (var i = 0; i < this._candles.length - 5; i += 5) {
            candlesByFive[j] = [];
            candlesByFive[j][0] = (this._candles[i]);
            candlesByFive[j][1] = (this._candles[i + 1]);
            candlesByFive[j][2] = (this._candles[i + 2]);
            candlesByFive[j][3] = (this._candles[i + 3]);
            candlesByFive[j++][4] = (this._candles[i + 4]);
        }
        var fiveCandlesBeforeEachHit = [];
        var theOptionShouldBe = 3;
        var winRateFinal = 0;
        var winRateBeforeFirstHit = 0;
        var winRateBetweenHits = [];
        var firstOrderWinRate = 0;
        var firstMgWinRate = 0;
        var secondMgWinRate = 0;
        var hitRate = 0;
        var winRateAfterHit = 0;
        var firstOrderWinRateAfterHit = 0;
        var hitAfterHit = 0;
        var firstMgWinRateAfterHit = 0;
        var secondMgWinRateAfterHit = 0;
        var firstHit = false;
        var wasHit = false;
        var count = 0;
        // Contabilização da Estratégia
        candlesByFive.forEach(function (fiveCandles) {
            var one = fiveCandles[0];
            var two = fiveCandles[1];
            var three = fiveCandles[2];
            if (theOptionShouldBe !== 3) {
                if (one.cor == theOptionShouldBe) {
                    if (!firstHit)
                        winRateBeforeFirstHit++;
                    if (wasHit) {
                        wasHit = false;
                        firstOrderWinRateAfterHit++;
                        winRateAfterHit++;
                        winRateBetweenHits[hitRate]++;
                    }
                    firstOrderWinRate++;
                    winRateFinal++;
                }
                else if (two.cor == theOptionShouldBe) {
                    if (!firstHit)
                        winRateBeforeFirstHit++;
                    if (wasHit) {
                        wasHit = false;
                        winRateAfterHit++;
                        firstMgWinRateAfterHit++;
                        winRateBetweenHits[hitRate]++;
                    }
                    firstMgWinRate++;
                    winRateFinal++;
                }
                else if (three.cor == theOptionShouldBe) {
                    if (!firstHit)
                        winRateBeforeFirstHit++;
                    if (wasHit) {
                        wasHit = false;
                        winRateAfterHit++;
                        secondMgWinRateAfterHit++;
                        winRateBetweenHits[hitRate]++;
                    }
                    secondMgWinRate++;
                    winRateFinal++;
                }
                else {
                    fiveCandlesBeforeEachHit[hitRate] = fiveCandles;
                    if (!firstHit)
                        firstHit = true;
                    if (wasHit)
                        hitAfterHit++;
                    wasHit = true;
                    hitRate++;
                    winRateBetweenHits[hitRate] = 0;
                }
                count++;
            }
            var red = 0;
            var green = 0;
            for (var i = 2; i <= 4; i++) {
                if (fiveCandles[i].cor == 0)
                    green++;
                else if (fiveCandles[i].cor == 1)
                    red++;
            }
            if (green > 1)
                theOptionShouldBe = 1;
            else if (red > 1)
                theOptionShouldBe = 0;
            else
                theOptionShouldBe = 3;
        });
        firstOrderWinRate = Number.parseFloat(((firstOrderWinRate / count) * 100.00).toFixed(2));
        firstMgWinRate = Number.parseFloat(((firstMgWinRate / count) * 100.00).toFixed(2));
        secondMgWinRate = Number.parseFloat(((secondMgWinRate / count) * 100.00).toFixed(2));
        hitRate = Number.parseFloat(((hitRate / count) * 100.00).toFixed(2));
        firstOrderWinRateAfterHit = Number.parseFloat(((firstOrderWinRateAfterHit / winRateAfterHit) * 100.00).toFixed(2));
        firstMgWinRateAfterHit = Number.parseFloat(((firstMgWinRateAfterHit / winRateAfterHit) * 100.00).toFixed(2));
        secondMgWinRateAfterHit = Number.parseFloat(((secondMgWinRateAfterHit / winRateAfterHit) * 100.00).toFixed(2));
        hitAfterHit = Number.parseFloat(((hitAfterHit / hitRate) * 100.00).toFixed(2));
        winRateAfterHit = Number.parseFloat(((1 - hitAfterHit) * 100.00).toFixed(2));
        winRateFinal = Number.parseFloat(((winRateFinal / count) * 100.00).toFixed(2));
        winRateBetweenHits.forEach(function (winRate) {
            winRate = Number.parseFloat(((winRate / hitRate) * 100.00).toFixed(2));
        });
        this._mhi.inputData(this._candles.length, winRateFinal, winRateBeforeFirstHit, winRateBetweenHits, firstOrderWinRate, firstMgWinRate, secondMgWinRate, hitRate, winRateAfterHit, firstOrderWinRateAfterHit, firstMgWinRateAfterHit, secondMgWinRateAfterHit, hitAfterHit, fiveCandlesBeforeEachHit);
    };
    Catalogger.prototype.toResponse = function () {
        var arrResult = [];
        arrResult.push(this._mhi.data);
        return arrResult;
    };
    return Catalogger;
}());
exports.default = Catalogger;
