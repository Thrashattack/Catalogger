import Candle from './Candle'
export default class Estrategia {
    private size: Number = 0;
    private winRateFinal: Number = 0;
    private winsBeforeFirstHit: Number = 0;
    private winRateBetweenHits: Array<Number>;
    private firstOrderWinRate: Number = 0;
    private firstMgWinRate: Number = 0;
    private secondMgWinRate: Number = 0;
    private hitRate: Number = 0;
    private winRateAfterHit: Number = 0;
    private firstOrderWinRateAfterHit: Number = 0;
    private firstMgWinRateAfterHit: Number = 0;
    private secondMgWinRateAfterHit: Number = 0;
    private hitAfterHit: Number = 0;
    private fiveCandlesBeforeEachHit: Array<Array<Candle>>

    constructor() {
        this.fiveCandlesBeforeEachHit = [];
        this.winRateBetweenHits = [];
    }

    public inputData(size: Number, winRateFinal: Number, winsBeforeFirstHit: Number,
        winRateBetweenHits: Array<Number>, firstOrderWinRate: Number, firstMgWinRate: Number,
        secondMgWinRate: Number, hitRate: Number, winRateAfterHit: Number,
        firstOrderWinRateAfterHit: Number, firstMgWinRateAfterHit: Number,
        secondMgWinRateAfterHit: Number, hitAfterHit: Number, fiveCandlesBeforeEachHit: Array<Array<Candle>>) {

        this.size = size;
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
            winRateFinal: this.winRateFinal,
            winsBeforeFirstHit: this.winsBeforeFirstHit,
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