import Candle from '../model/Candle';
import Estrategia from '../model/Estrategia';

export default class Catalogger {
    private _candles: Array<Candle>;
    private _mhi = new Estrategia();
    private _estrategiaX = new Estrategia();
    constructor() {
        this._candles = [];
    }
    get candles() {
        return this._candles;
    }
    public toResponse() {
        let arrResult = [];
        arrResult.push(this._mhi);
        arrResult.push(this._estrategiaX);
        return arrResult;
    }

    get mhi() {
        return this._mhi;
    }

    public inputCandle(candle: Candle) {
        this._candles.push(candle);
    }

    public calculaMHI() {

    }

    public calculaX() {

    }

}