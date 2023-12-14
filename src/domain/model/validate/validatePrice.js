import {MissionUtils} from "@woowacourse/mission-utils";
import ERROR from "../message/error";

class validatePrice{
    price(priceNumber){
        if(isNaN(priceNumber)){
            throw new Error(MissionUtils.Console.print(ERROR.NaN))
        }
        if(priceNumber % 1000){
            throw new Error(MissionUtils.Console.print(ERROR.thousand))
        }
    }
}

export default validatePrice;