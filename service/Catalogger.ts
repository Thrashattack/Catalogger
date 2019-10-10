import Candle from '../model/Candle';
import Estrategia from '../model/Estrategia';

export default class Catalogger {
    private _candles: Array<Candle>;
    private _mhi = new Estrategia();
    constructor() {
        this._candles = [];
    }
    get candles() {
        return this._candles;
    }

    public inputCandle(candle: Candle) {
        this._candles.push(candle);
    }

    public calculaMHI() {
        let candlesByFive: Array<Array<Candle>> = [];
        let j = 0;
        for (let i = 0; i < this._candles.length - 5; i += 5) {
            candlesByFive[j].push(this._candles[i]);
            candlesByFive[j].push(this._candles[i + 1]);
            candlesByFive[j].push(this._candles[i + 2]);
            candlesByFive[j].push(this._candles[i + 3]);
            candlesByFive[j++].push(this._candles[i + 4]);
        }

        this._mhi.inputData(this._candles.length, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [new Candle('R')])
    }

    public toResponse() {
        let arrResult = [];
        arrResult.push(this._mhi.data);
        return arrResult;
    }

}