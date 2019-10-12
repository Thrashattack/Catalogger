"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estrategia = /** @class */ (function () {
    function Estrategia() {
        this.size = 0;
        this.entradasValidas = 0;
        this.winRateFinal = 0;
        this.winsBeforeFirstHit = 0;
        this.firstOrderWinRate = 0;
        this.firstMgWinRate = 0;
        this.secondMgWinRate = 0;
        this.hitRate = 0;
        this.winRateAfterHit = 0;
        this.firstOrderWinRateAfterHit = 0;
        this.firstMgWinRateAfterHit = 0;
        this.secondMgWinRateAfterHit = 0;
        this.hitAfterHit = 0;
        this.fiveCandlesBeforeEachHit = [];
        this.winRateBetweenHits = [];
    }
    Estrategia.prototype.inputData = function (size, entradasValidas, winRateFinal, winsBeforeFirstHit, winRateBetweenHits, firstOrderWinRate, firstMgWinRate, secondMgWinRate, hitRate, winRateAfterHit, firstOrderWinRateAfterHit, firstMgWinRateAfterHit, secondMgWinRateAfterHit, hitAfterHit, fiveCandlesBeforeEachHit) {
        this.size = size;
        this.entradasValidas = entradasValidas;
        this.winRateFinal = winRateFinal;
        this.winsBeforeFirstHit = winsBeforeFirstHit;
        this.winRateBetweenHits = winRateBetweenHits;
        this.firstOrderWinRate = firstOrderWinRate;
        this.firstMgWinRate = firstMgWinRate;
        this.secondMgWinRate = secondMgWinRate;
        this.hitRate = hitRate;
        this.winRateAfterHit = winRateAfterHit;
        this.firstOrderWinRateAfterHit = firstOrderWinRateAfterHit;
        this.firstMgWinRateAfterHit = firstMgWinRateAfterHit;
        this.secondMgWinRateAfterHit = secondMgWinRateAfterHit;
        this.hitAfterHit = hitAfterHit;
        this.fiveCandlesBeforeEachHit = fiveCandlesBeforeEachHit;
    };
    Object.defineProperty(Estrategia.prototype, "data", {
        get: function () {
            return {
                size: this.size,
                validEntries: this.entradasValidas,
                winRateFinal: this.winRateFinal,
                entriesBeforeFirstHit: this.winsBeforeFirstHit,
                winRateBetweenHits: this.winRateBetweenHits,
                firstOrderWinRate: this.firstOrderWinRate,
                firstMgWinRate: this.firstMgWinRate,
                secondMgWinRate: this.secondMgWinRate,
                hitRate: this.hitRate,
                winRateAfterHit: this.winRateAfterHit,
                firstOrderWinRateAfterHit: this.firstOrderWinRateAfterHit,
                firstMgWinRateAfterHit: this.firstMgWinRateAfterHit,
                secondMgWinRateAfterHit: this.secondMgWinRateAfterHit,
                hitAfterHit: this.hitAfterHit,
                fiveCandlesBeforeEachHit: this.fiveCandlesBeforeEachHit
            };
        },
        enumerable: true,
        configurable: true
    });
    return Estrategia;
}());
exports.default = Estrategia;
