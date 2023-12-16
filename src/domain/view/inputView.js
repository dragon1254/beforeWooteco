import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../model/message/message";
import validateDate from "../model/validate/validateDate";
import validateWorkers from "../model/validate/validateWorkers";

const inputView = {
    async makeStartDate(){
        const startDate = await MissionUtils.Console.readLineAsync(MESSAGE.inputStart);
        const makeDate = startDate.split(',')
        const checkDate = new validateDate()
        checkDate.checkStartDate(makeDate)
        return makeDate
    },

    async makeWeekdayWorkers(){
        const weekdayWorkers = await MissionUtils.Console.readLineAsync(MESSAGE.weekdayWorkers)
        const weekdayWorkersArray = weekdayWorkers.split(',')
        const checkWorkers = new validateWorkers();
        checkWorkers.checkWorkers(weekdayWorkersArray)
        return weekdayWorkersArray
    },

    async makeHolidayWorkers(){
        const holidayWorkers = await MissionUtils.Console.readLineAsync(MESSAGE.holidayWorkers)
        const holidayWorkersArray = holidayWorkers.split(',')
        const checkWorkers = new validateWorkers();
        checkWorkers.checkWorkers(holidayWorkersArray)
        return holidayWorkersArray
    }

}

export default inputView;