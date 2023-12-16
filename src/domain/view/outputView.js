import { MissionUtils } from "@woowacourse/mission-utils";
import CONSTANT from "../model/constant/constant";

const outputView = {
    dateWorkers(dateNumber, startDate,allWorkersToDate){
        const dateMonth = startDate[0];
        const startDay = startDate[1];
        const workersValue = Object.values(allWorkersToDate)        
        workersValue.forEach((element,index) => {
            const dayNumber = (index + dateNumber) % 7
            MissionUtils.Console.print(`${dateMonth}월 ${index + 1}일 ${CONSTANT.week[dayNumber]} ${element}`)
        });
    },
}

export default outputView;