import { Console } from "@woowacourse/mission-utils";
import ERROR from "../message/error"
import constNumber from "../constant/number"

class validateDate{
    checkDate(numberDate){
        if(isNaN(numberDate)){
            throw new Error(Console.print(ERROR.dateNumber));
        }
        if(numberDate < constNumber.firstDate){
            throw new Error(Console.print(ERROR.dateNumber));
        }
        if(numberDate > constNumber.lastDate){
            throw new Error(Console.print(ERROR.dateNumber));
        }
    }
}

export default validateDate