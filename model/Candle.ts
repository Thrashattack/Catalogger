export default class Candle {
    private readonly _cor: Number;
    constructor(cor: String) {
        const cor_temp = cor.toUpperCase();
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

    get cor() {
        return this._cor;
    }
}