import getWinLotto from "../model/util/getWinLotto";
import makeLotto from "../model/util/makeLotto";
import bonus from "../model/validate/Bonus";
import inputView from "../view/inputview";
import outputview from "../view/outputview";

class controller{
#lottoPrice
#allLottos
#winNumber
#win =[]

    async start(){
        await this.getPrice();
        this.getLotto();
        await this.getWinningNumber();
        await this.getBonusNumber();
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
            this.#winNumber = winningNumber;
        } catch (err) {
            console.log(err)
            return await this.getWinningNumber()
        }
    }

    async getBonusNumber(){
        try {
            const bonusNumber = await inputView.makeBonusNumber();
            const checkBonus = new bonus(this.#winNumber);
            checkBonus.checkNumber(bonusNumber);
            this.checkWinning(bonusNumber);
        } catch (err) {
            console.log(err)
            return await this.getBonusNumber();
        }
    }

    checkWinning(bonusNumber){
        const getWin = new getWinLotto(this.#allLottos,this.#winNumber)
        const countWinArray = getWin.checkWin(bonusNumber);
        this.#win = countWinArray
    }

    printAll(){
        outputview.printWin(this.#win);
        outputview.printRate(this.#win,this.#lottoPrice);
    }

}

export default controller;