import { MissionUtils } from "@woowacourse/mission-utils";
import ERROR from "../message/error";

class bonus{
#winningNumber
    constructor(winningNumber){
        this.#winningNumber = winningNumber;
    }
    checkNumber(bonusNumber){
        if(isNaN(bonusNumber)){
            throw new Error(MissionUtils.Console.print(ERROR.NaN))
        }
        const allNumber = [...this.#winningNumber,...bonusNumber]
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