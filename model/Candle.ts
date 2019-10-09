export default class Candle {
    private readonly _cor: Number;
    constructor(cor: String) {
        const cor_temp = cor.toUpperCase();
        switch (cor_temp) {
            case "VERDE":
                this._cor = 0;
                break;
            case "VERMELHA":
                this._cor = 1;
                break;
            case "CINZA":
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