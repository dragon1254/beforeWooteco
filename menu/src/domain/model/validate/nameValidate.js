import { MissionUtils } from "@woowacourse/mission-utils";
import NUMBER from "../../constant/number";
import ERROR from "../message/error";

class nameValidate{
    checkName(nameArray){
        nameArray.forEach(element => {
            if(element.length < NUMBER.minNameLength){
                throw new Error(ERROR.nameLength)
            }
            if(element.length > NUMBER.maxNameLength){
                throw new Error(ERROR.nameLength)
            }
        });
        this.checkNameArray(nameArray)
    }
    
    checkNameArray(nameArray){
        if(nameArray.length < NUMBER.minCouchCount){
            throw new Error(ERROR.couchCount)
        }
        if(nameArray.length > NUMBER.maxCouchCount){
            throw new Error(ERROR.couchCount)
        }
    }
}

    

export default nameValidate;