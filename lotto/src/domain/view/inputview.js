import {MissionUtils} from "@woowacourse/mission-utils";
import MESSAGE from "../model/message/message";
import validatePrice from "../model/validate/validatePrice";
import Lotto from "../model/validate/Lotto";

const inputView = {
    async makePrice(){
        const myPrice = await MissionUtils.Console.readLineAsync(MESSAGE.price);
        const priceNumber = Number(myPrice);
        const checkMyPrice = new validatePrice();
        checkMyPrice.price(myPrice);
        return priceNumber
    },

    async makeWinningNumber(){
        const getNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.winning);
        const getNumberArray = getNumbers.split(',').map(Number)
        const checkLotto = new Lotto(getNumberArray);
        return getNumberArray;
    },

    async makeBonusNumber(){
        const getBonus = await MissionUtils.Console.readLineAsync(MESSAGE.bonus);
        const getBonusToNumber = getBonus.split(',').map(Number)
        return getBonusToNumber;
    }
}

export default inputView;