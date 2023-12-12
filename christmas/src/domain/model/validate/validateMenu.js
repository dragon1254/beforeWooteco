import { MissionUtils } from "@woowacourse/mission-utils";
import totalMenuList from "../constant/constant";
import ERROR from "../message/error";
import constNumber from "../constant/number";

class validateMenu{
    checkMenuList(orderedMenuArray){
        orderedMenuArray.forEach(element => {
            if(!totalMenuList.menu.includes(element)){
                throw new Error(MissionUtils.Console.print(ERROR.orderedMenu));
            }
        });
    }
    checkCountList(orderedMenuCountArray){
        countSum = 0
        orderedMenuCountArray.forEach(element => {
            if(isNaN(element)){
                throw new Error(MissionUtils.Console.print(ERROR.orderedMenu));
            }
            if(!Number.isInteger(element)){
                throw new Error(MissionUtils.Console.print(ERROR.orderedMenu));
            }
            if(element < constNumber.minCount){
                throw new Error(MissionUtils.Console.print(ERROR.orderedMenu));
            }
            countSum = countSum + element
            if(countSum > 20){
                throw new Error(MissionUtils.Console.print(ERROR.overTwenty));
            }
        });
        
    }
    // checkOtherCase(orderedMenuCountArray){

    // }
}

export default validateMenu;