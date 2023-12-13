import makeLotto from "../model/util/makeLotto";
import inputView from "../view/inputview";

class controller{
#lottoPrice

    constructor(){

    }

    async start(){
        await this.getPrice()
        this.getLotto()
    }

    async getPrice(){
        try{
            const price = await inputView.makePrice();
            this.#lottoPrice = price;
        }catch(err){
            console.log(err)
            return await this.getPrice();
        }
        console.log(this.#lottoPrice)
    }

    getLotto(){
        const countLottos = Math.floor(this.#lottoPrice/1000)
        const makeLottos = new makeLotto()
        makeLottos.countLotto(countLottos)

    }

}

export default controller;