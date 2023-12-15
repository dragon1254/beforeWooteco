import SAMPLE from "../../constant/menu";
import ERROR from "../message/error";

class menuValidate{
    checkMenu(noMenuArray){
        const japan = SAMPLE.일식.split(', ')
        const korean = SAMPLE.한식.split(', ')
        const chinese = SAMPLE.중식.split(', ')
        const asian = SAMPLE.아시안.split(', ')
        const western = SAMPLE.양식.split(', ')
        const allMenu = [...japan,...korean,...chinese,...asian,...western]
        noMenuArray.forEach(element => {    
            if(!allMenu.includes(element)){
                throw new Error(ERROR.inMenu)
            }
        });
    }
}

export default menuValidate;