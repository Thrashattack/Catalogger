"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Candle = /** @class */ (function () {
    function Candle(cor) {
        var cor_temp = cor.toUpperCase();
        switch (cor_temp) {
            case "G":
                this._cor = 0;
                break;
            case "R":
                this._cor = 1;
                break;
            case "N":
                this._cor = 2;
                break;
            default:
                this._cor = -1;
                break;
        }
    }
    Object.defineProperty(Candle.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        enumerable: true,
        configurable: true
    });
    return Candle;
}());
exports.default = Candle;
