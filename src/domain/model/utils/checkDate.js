import CONSTANT from "../constant/constant"

class checkDate{
#startDate
    constructor(startDate){
        this.#startDate = startDate
    }
    checkDay(){
        for(let i = 0; i < CONSTANT.week.length; i++){
            if(this.#startDate[1] == CONSTANT.week[i]){
                return i
            }
        }
        // CONSTANT.week.forEach((element,index) => {
        //     if(this.#startDate[1] === element){
        //         return index
        //     }            
        // })
    }
}
export default checkDate