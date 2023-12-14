import {MissionUtils} from "@woowacourse/mission-utils";
import ERROR from "../message/error";
import NUMBER from "../../../constant/number";

class validatePrice{
    price(priceNumber){
        if(isNaN(priceNumber)){
            throw new Error(MissionUtils.Console.print(ERROR.NaN))
        }
        if(priceNumber % NUMBER.lottoPrice){
            throw new Error(MissionUtils.Console.print(ERROR.thousand))
        }
    }
}

export default validatePrice;