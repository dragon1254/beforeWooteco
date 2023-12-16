import { MissionUtils } from "@woowacourse/mission-utils";
import CONSTANT from "../constant/constant";
import NUMBER from "../constant/number";
import ERROR from "../message/error";

class validateDate{
    checkStartDate(makeDate){
        const monthNumber = Number(makeDate[0]);
        const day = makeDate[1];
        if(isNaN(monthNumber)){
            throw new Error(MissionUtils.Console.print(ERROR.notNumber))
        }
        if(monthNumber < NUMBER.firstMonth){
            throw new Error(MissionUtils.Console.print(ERROR.monthRange))
        }
        if(monthNumber > NUMBER.lastMonth){
            throw new Error(MissionUtils.Console.print(ERROR.monthRange))
        }
        this.checkDays(day)
    }

    checkDays(day){
        if(!CONSTANT.week.includes(day)){
            throw new Error(MissionUtils.Console.print(ERROR.days))
        }
    }
}

export default validateDate;