import { MissionUtils } from "@woowacourse/mission-utils"
import MESSAGE from "../model/message/message"
import SAMPLE from "../constant/menu"

const outputView = {
    firstIntro(){
        MissionUtils.Console.print(MESSAGE.firstIntro)
    },
    secondIntro(){
        MissionUtils.Console.print(MESSAGE.secondIntro)
        MissionUtils.Console.print(MESSAGE.sort)
    },
    result(name,category, recommend){
        const categoryName = Object.keys(SAMPLE)
        const recommendValues = Object.values(recommend)
        MissionUtils.Console.print(`[ 카테고리 | ${categoryName[category[0]-1]} | ${categoryName[category[1]-1]} | ${categoryName[category[2]-1]} | ${categoryName[category[3]-1]} | ${categoryName[category[4]-1]} ]`)
        name.forEach((element,index) => {
           MissionUtils.Console.print(`[ ${element} | ${recommendValues[index][0]} | ${recommendValues[index][1]} | ${recommendValues[index][2]} | ${recommendValues[index][3]} | ${recommendValues[index][4]} ]\n`) 
        });
    }
}

export default outputView