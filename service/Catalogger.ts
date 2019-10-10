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
        // 5 Velas - Tempo entre uma opçao e outra
        for (let i = 0; i < this._candles.length - 5; i += 5) {
            candlesByFive[j] = []
            candlesByFive[j][0] = (this._candles[i]);
            candlesByFive[j][1] = (this._candles[i + 1]);
            candlesByFive[j][2] = (this._candles[i + 2]);
            candlesByFive[j][3] = (this._candles[i + 3]);
            candlesByFive[j++][4] = (this._candles[i + 4]);
        }

        let theOptionShouldBe = 12;
        let winRateFinal = 0;
        let winRateBeforeFirstHit = 0;
        let winRateBetweenHits: Array<number> = [];
        let firstOrderWinRate = 0;
        let firstMgWinRate = 0;
        let secondMgWinRate = 0;
        let hitRate: number = 0;
        let winRateAfterHit = 0;
        let firstOrderWinRateAfterHit = 0;
        let hitAfterHit = 0;
        let firstMgWinRateAfterHit = 0;
        let secondMgWinRateAfterHit = 0;


        let firstHit = false;
        let wasHit = false;
        // Contabilização da Estratégia
        candlesByFive.forEach(fiveCandles => {
            let one = fiveCandles[0];
            let two = fiveCandles[1];
            let three = fiveCandles[2]; // 3 últimas velas , MHI = menor ocorrencia 
            // let four = fiveCandles[3];
            // let five = fiveCandles[4];
            if (theOptionShouldBe !== 3) {
                if (theOptionShouldBe !== 12) {
                    if (one.cor == theOptionShouldBe) {
                        if (!firstHit) winRateBeforeFirstHit++;
                        if (wasHit) {
                            wasHit = false;
                            firstOrderWinRateAfterHit++;
                            winRateAfterHit++;
                            winRateBetweenHits[hitRate]++;
                        }
                        firstOrderWinRate++;
                        winRateFinal++

                    } else if (two.cor == theOptionShouldBe) {
                        if (!firstHit) winRateBeforeFirstHit++;
                        if (wasHit) {
                            wasHit = false;
                            winRateAfterHit++;
                            firstMgWinRateAfterHit++;
                            winRateBetweenHits[hitRate]++;
                        }
                        firstMgWinRate++;
                        winRateFinal++
                    } else if (three.cor == theOptionShouldBe) {
                        if (!firstHit) winRateBeforeFirstHit++;
                        if (wasHit) {
                            wasHit = false;
                            winRateAfterHit++;
                            secondMgWinRateAfterHit++;
                            winRateBetweenHits[hitRate]++;
                        }
                        secondMgWinRate++;
                        winRateFinal++
                    } else {
                        if (!firstHit) firstHit = true;
                        if (wasHit) hitAfterHit++;
                        wasHit = true;
                        hitRate++;
                        winRateBetweenHits[hitRate] = 0;
                    }
                }

                let red = 0;
                let green = 0;
                for (let i = 2; i <= 4; i++) {
                    if (fiveCandles[i].cor == 0) green++;
                    else if (fiveCandles[i].cor == 1) red++;

                }

                if (green > 1) theOptionShouldBe = 1;
                else if (red > 1) theOptionShouldBe = 0;
                else theOptionShouldBe = 3;
            }
        });

        firstOrderWinRate = (firstOrderWinRate / winRateFinal) * 100;
        firstMgWinRate = (firstMgWinRate / winRateFinal) * 100;
        secondMgWinRate = (secondMgWinRate / winRateFinal) * 100;
        hitRate = (hitRate / ((this._candles.length) / 5) * 100);
        winRateAfterHit = (winRateAfterHit / hitRate) * 100;
        firstOrderWinRateAfterHit = (firstOrderWinRateAfterHit / hitRate) * 100;
        firstMgWinRateAfterHit = (firstMgWinRateAfterHit / hitRate) * 100;
        secondMgWinRateAfterHit = (secondMgWinRateAfterHit / hitRate) * 100;
        hitAfterHit = (hitAfterHit / hitRate) * 100;
        winRateFinal = (winRateFinal / ((this._candles.length) / 5) * 100);
        winRateBeforeFirstHit = (winRateBeforeFirstHit / winRateBeforeFirstHit) * 100;
        winRateBetweenHits.forEach(winRate => {
            winRate = (winRate / hitRate) * 100;
        });


        this._mhi.inputData(this._candles.length, winRateFinal, winRateBeforeFirstHit, winRateBetweenHits,
            firstOrderWinRate, firstMgWinRate, secondMgWinRate, hitRate, winRateAfterHit, firstOrderWinRateAfterHit,
            firstMgWinRateAfterHit, secondMgWinRateAfterHit, hitAfterHit, [new Candle('R')])
    }

    public toResponse() {
        let arrResult = [];
        arrResult.push(this._mhi.data);
        return arrResult;
    }

}