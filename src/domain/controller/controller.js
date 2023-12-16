import { MissionUtils } from "@woowacourse/mission-utils";
import inputView from "../view/inputView";


class controller{
#startDate
#weekdayWorkers
#holidatWorkers

    async run(){
        await this.getStartDate();
        await this.getWorkers();
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
    
}

export default controller;