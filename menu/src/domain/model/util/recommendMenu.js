import { MissionUtils } from "@woowacourse/mission-utils";
import SAMPLE from "../../constant/menu";

class recommendMenu{
#category
    constructor(category){
        this.#category = category
    }
    makeMenu(){
        const menuArray = []
        this.#category.forEach(element => {
            let shuffleRangeString = Object.values(SAMPLE)[element-1]
            let shuffleRange = shuffleRangeString.split(',')
            let recommdedMenuNumber = MissionUtils.Random.shuffle(shuffleRange)[0]
            let recommendMenu = shuffleRange[recommdedMenuNumber-1]
            menuArray.push(recommendMenu)
        });
        const duplication = new Set(menuArray)
        if(duplication.size !== menuArray.length){
            this.makeMenu()
        }
        return menuArray
    }
}

export default recommendMenu;