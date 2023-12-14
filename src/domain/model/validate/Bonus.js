import { MissionUtils } from "@woowacourse/mission-utils";
import ERROR from "../message/error";

class bonus{
    checkNumber(winningNumber,bonusNumber){
        if(isNaN(bonusNumber)){
            throw new Error(MissionUtils.Console.print(ERROR.NaN))
        }
        const allNumber = [...winningNumber,...bonusNumber]
        if(allNumber.length !== 7){
            throw new Error(MissionUtils.Console.print(ERROR.oneBonus))
        }
        const bonusSet = new Set(allNumber)
        if(allNumber.length !== bonusSet.size){
            throw new Error(MissionUtils.Console.print(ERROR.duplication))
        }
        this.checkRange(bonusNumber)
    }
    
    checkRange(bonusNumber){
        if(bonusNumber < 1){
            throw new Error(MissionUtils.Console.print(ERROR.rangeStart))
        }
        if(bonusNumber > 45){
            throw new Error(MissionUtils.Console.print(ERROR.rangeFinal))
        }
    }
}

export default bonus;