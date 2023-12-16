import { MissionUtils } from "@woowacourse/mission-utils";
import NUMBER from "../constant/number";
import ERROR from "../message/error"

class validateWorkers{
    checkWorkers(workers){
        if(workers.length < NUMBER.minWorker){
            throw new Error(MissionUtils.Console.print(ERROR.allNumberRange));
        }
        if(workers.length > NUMBER.maxWorker){
            throw new Error(MissionUtils.Console.print(ERROR.allNumberRange));
        }
        this.checkContinuous(workers);
    }
    checkContinuous(workers){
        if(workers[0] === workers[1]){
            throw new Error(MissionUtils.Console.print(ERROR.continuous));
        }
        for(let i = 1; i < workers.length-1; i++){
            if(workers[i] === workers[i+1]){
                throw new Error(MissionUtils.Console.print(ERROR.continuous));
            }
        }

    }
}

export default validateWorkers