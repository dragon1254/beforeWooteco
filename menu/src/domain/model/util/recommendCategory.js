import { MissionUtils } from "@woowacourse/mission-utils";
import SAMPLE from "../../constant/menu";
import NUMBER from "../../constant/number";

class recommendCategory{
    makeCategory(){
        const categoryArray = []
        let categoryNumberArray = [];
        const menuCategory = Object.keys(SAMPLE)
        while (categoryNumberArray.length < NUMBER.weekDay) {
            const aNumber = MissionUtils.Random.pickNumberInRange(1, 5)
            if(categoryNumberArray.includes(aNumber)){
                let count = categoryNumberArray.reduce((acc=0,cur)=> {
                if(cur === aNumber){
                    acc++
                }
                })
                if(count === 1){
                    categoryNumberArray.push(aNumber)
                }
            }
            if(!categoryNumberArray.includes(aNumber)){
                categoryNumberArray.push(aNumber)
            }
        }
        //this.justOneDuplication(categoryNumberArray)
        console.log(categoryNumberArray)
        categoryNumberArray.forEach(element => {
            categoryArray.push(menuCategory[element-1])
        });
        return categoryNumberArray
    }

    //justOneDuplication(categoryNumberArray){
        
    //}
}

export default recommendCategory;