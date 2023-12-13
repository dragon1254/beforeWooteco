import {MissionUtils} from "@woowacourse/mission-utils";
import MESSAGE from "../model/message/message";
import validatePrice from "../model/validate/validatePrice";

const inputView = {
    async makePrice(){
        const myPrice = await MissionUtils.Console.readLineAsync(MESSAGE.price);
        console.log(myPrice)
        const priceNumber = Number(myPrice);
        const checkMyPrice = new validatePrice();
        checkMyPrice.price(myPrice);
        return priceNumber
    }
}

export default inputView;