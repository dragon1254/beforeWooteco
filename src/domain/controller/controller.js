import getWinLotto from "../model/util/getWinLotto";
import makeLotto from "../model/util/makeLotto";
import bonus from "../model/validate/Bonus";
import inputView from "../view/inputview";

class controller{
#lottoPrice
#allLottos
#win

    constructor(){

    }

    async start(){
        await this.getPrice();
        this.getLotto();
        await this.getWinningNumber();
        this.printAll();
    }

    async getPrice(){
        try{
            const price = await inputView.makePrice();
            this.#lottoPrice = price;
        }catch(err){
            console.log(err)
            return await this.getPrice();
        }
    }

    getLotto(){
        const countLottos = Math.floor(this.#lottoPrice/1000)
        const makeLottos = new makeLotto()
        const myLottos = makeLottos.countLotto(countLottos)
        this.#allLottos = myLottos
    }

    async getWinningNumber(){
        
        try {
            const winningNumber = await inputView.makeWinningNumber();    
            this.getBonusNumber(winningNumber)
        } catch (err) {
            console.log(err)
            return await this.getWinningNumber()
        }
    }

    async getBonusNumber(winningNumber){
        try {
            const bonusNumber = await inputView.makeBonusNumber();
            console.log(bonusNumber,winningNumber)
            const checkBonus = new bonus();
            checkBonus.checkNumber(winningNumber, bonusNumber);
            this.checkWinning(winningNumber, bonusNumber);
        } catch (err) {
            console.log(err)
            return await this.getBonusNumber();
        }
    }

    checkWinning(winningNumber,bonusNumber){
        const getWin = new getWinLotto(this.#allLottos)
        const countWinArray = getWin.checkWin(winningNumber,bonusNumber);
        this.#win = countWinArray;
    }

    printAll(){

    }

}

export default controller;