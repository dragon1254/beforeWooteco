import { MissionUtils } from "@woowacourse/mission-utils";
import inputView from "../view/inputView";
import monthWorkers from "../model/utils/monthWorkes";
import NUMBER from "../model/constant/number";


class controller{
#startDate
#weekdayWorkers
#holidatWorkers

    async run(){
        await this.getStartDate();
        await this.getWorkers();
        this.eachMonthWorkers();
    }

    async getStartDate(){
        try {
            const newDate = await inputView.makeStartDate();
            this.#startDate = newDate;
        } catch (err) {
            console.log(err)
            return await this.getStartDate();
        }
    }

    async getWorkers(){
        try {
            const getWeekdayWorkers = await inputView.makeWeekdayWorkers();
            const getHolidayWorkers = await inputView.makeHolidayWorkers();
            this.#weekdayWorkers = getWeekdayWorkers;
            this.#holidatWorkers = getHolidayWorkers;
        } catch (err) {
            console.log(err)
            return await this.getWorkers()
        }
    }

    eachMonthWorkers(){
        const everyMonthWorkers = new monthWorkers(this.#startDate);
        const workers = everyMonthWorkers.standardForDays()
        this.selectWorkersToDay(workers)
    }

    selectWorkersToDay(){

    }

}

export default controller;