export default class Estrategia {
    private _data: any;
    constructor() {

    }
    get data() {
        return this._data;
    }

    public inputData(propertie: any, value: any) {
        this._data[propertie] = value
    }

}