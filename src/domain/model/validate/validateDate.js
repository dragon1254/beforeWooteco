import CONSTANT from "../constant/constant";
import ERROR from "../message/error";

class validateDate{
    checkStartDate(makeDate){
        const monthNumber = Number(makeDate[0]);
        const day = makeDate[1];
        if(isNaN(monthNumber)){
            throw new Error(ERROR.notNumber)
        }
        if(monthNumber < 1){
            throw new ERROR(ERROR.monthRange)
        }
        if(monthNumber > 12){
            throw new ERROR(ERROR.monthRange)
        }
        this.checkDays(day)
    }

    checkDays(day){
        if(!CONSTANT.week.includes(day)){
            throw new Error(ERROR.days)
        }
    }
}

export default validateDate;