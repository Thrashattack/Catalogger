import Candle from './Candle'
export default class Estrategia {
    private size: number = 0;
    private entradasValidas: number = 0;
    private winRateFinal: number = 0;
    private winsBeforeFirstHit: number = 0;
    private winRateBetweenHits: Array<number>;
    private firstOrderWinRate: number = 0;
    private firstMgWinRate: number = 0;
    private secondMgWinRate: number = 0;
    private hitRate: number = 0;
    private winRateAfterHit: number = 0;
    private firstOrderWinRateAfterHit: number = 0;
    private firstMgWinRateAfterHit: number = 0;
    private secondMgWinRateAfterHit: number = 0;
    private hitAfterHit: number = 0;
    private fiveCandlesBeforeEachHit: Array<Array<Candle>>

    constructor() {
        this.fiveCandlesBeforeEachHit = [];
        this.winRateBetweenHits = [];
    }

    public inputData(size: number, entradasValidas: number, winRateFinal: number, winsBeforeFirstHit: number,
        winRateBetweenHits: Array<number>, firstOrderWinRate: number, firstMgWinRate: number,
        secondMgWinRate: number, hitRate: number, winRateAfterHit: number,
        firstOrderWinRateAfterHit: number, firstMgWinRateAfterHit: number,
        secondMgWinRateAfterHit: number, hitAfterHit: number, fiveCandlesBeforeEachHit: Array<Array<Candle>>) {

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
    }

    get data() {
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
    }

}