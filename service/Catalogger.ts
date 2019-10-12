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

        let fiveCandlesBeforeEachHit: Array<Array<Candle>> = [];
        let theOptionShouldBe: number = 3;
        let winRateFinal: number = 0;
        let entriesBeforeFirstHit: number = 0;
        let winRateBetweenHits: Array<number> = [];
        let firstOrderWinRate: number = 0;
        let firstMgWinRate: number = 0;
        let secondMgWinRate: number = 0;
        let hitRate: number = 0;
        let winRateAfterHit: number = 0;
        let firstOrderWinRateAfterHit: number = 0;
        let hitAfterHit: number = 0;
        let firstMgWinRateAfterHit: number = 0;
        let secondMgWinRateAfterHit: number = 0;


        let firstHit = false;
        let wasHit = false;
        let count: number = 0;
        // Contabilização da Estratégia
        candlesByFive.forEach(fiveCandles => {
            let one = fiveCandles[0];
            let two = fiveCandles[1];
            let three = fiveCandles[2];
            if (theOptionShouldBe !== 3) {
                if (one.cor == theOptionShouldBe) {
                    if (!firstHit) entriesBeforeFirstHit++;
                    if (wasHit) {
                        wasHit = false;
                        firstOrderWinRateAfterHit++;
                        winRateAfterHit++;
                        winRateBetweenHits[hitRate - 1]++;
                    }
                    firstOrderWinRate++;
                    winRateFinal++

                } else if (two.cor == theOptionShouldBe) {
                    if (!firstHit) entriesBeforeFirstHit++;
                    if (wasHit) {
                        wasHit = false;
                        winRateAfterHit++;
                        firstMgWinRateAfterHit++;
                        winRateBetweenHits[hitRate - 1]++;
                    }
                    firstMgWinRate++;
                    winRateFinal++
                } else if (three.cor == theOptionShouldBe) {
                    if (!firstHit) entriesBeforeFirstHit++;
                    if (wasHit) {
                        wasHit = false;
                        winRateAfterHit++;
                        secondMgWinRateAfterHit++;
                        winRateBetweenHits[hitRate - 1]++;
                    }
                    secondMgWinRate++;
                    winRateFinal++
                } else {
                    fiveCandlesBeforeEachHit[hitRate] = fiveCandles;
                    if (!firstHit) firstHit = true;
                    if (wasHit) hitAfterHit++;
                    wasHit = true;
                    winRateBetweenHits[hitRate] = 0;
                    hitRate++;
                }
                count++;
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

        });
        winRateBetweenHits.pop();
        let entradasValidas: number = count;
        firstOrderWinRate = Number.parseFloat(((firstOrderWinRate / count) * 100.00).toFixed(2));
        firstMgWinRate = Number.parseFloat(((firstMgWinRate / count) * 100.00).toFixed(2));
        secondMgWinRate = Number.parseFloat(((secondMgWinRate / count) * 100.00).toFixed(2));
        firstOrderWinRateAfterHit = Number.parseFloat(((firstOrderWinRateAfterHit / winRateAfterHit) * 100.00).toFixed(2));
        firstMgWinRateAfterHit = Number.parseFloat(((firstMgWinRateAfterHit / winRateAfterHit) * 100.00).toFixed(2));
        secondMgWinRateAfterHit = Number.parseFloat(((secondMgWinRateAfterHit / winRateAfterHit) * 100.00).toFixed(2));
        winRateAfterHit = Number.parseFloat((((hitAfterHit / hitRate) || 1) * 100.00).toFixed(2));
        hitAfterHit = Number.parseFloat(((hitAfterHit / hitRate) * 100.00).toFixed(2));
        winRateFinal = Number.parseFloat(((winRateFinal / count) * 100.00).toFixed(2));
        winRateBetweenHits.map(rate => rate * 100)
        hitRate = Number.parseFloat(((hitRate / count) * 100.00).toFixed(2));


        this._mhi.inputData(this._candles.length, entradasValidas, winRateFinal, entriesBeforeFirstHit, winRateBetweenHits,
            firstOrderWinRate, firstMgWinRate, secondMgWinRate, hitRate, winRateAfterHit, firstOrderWinRateAfterHit,
            firstMgWinRateAfterHit, secondMgWinRateAfterHit, hitAfterHit, fiveCandlesBeforeEachHit)
    }

    public toResponse() {
        let arrResult = [];
        arrResult.push(this._mhi.data);
        return arrResult;
    }

}