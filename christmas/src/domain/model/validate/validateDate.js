import ERROR from "../message/error"
import constNumber from "../message/number"

class validateDate{
    checkDate(numberDate){
        if(isNaN(numberDate)){
            throw new Error(ERROR.dateNumber);
        }
        if(numberDate < constNumber.firstDate){
            throw new Error(ERROR.dateNumber);
        }
        if(numberDate > constNumber.lastDate){
            throw new Error(ERROR.dateNumber);
        }
    }
}

export default validateDate