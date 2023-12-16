import { MissionUtils } from "@woowacourse/mission-utils";
import inputView from "../view/inputView";
import monthWorkers from "../model/utils/monthWorkers";
import NUMBER from "../model/constant/number";
import workersToDate from "../model/utils/workesToDate";
import outputView from "../view/outputView";
import CONSTANT from "../model/constant/constant";
import checkDate from "../model/utils/checkDate";


class controller{
#startDate
#weekdayWorkers
#holidatWorkers
#allWorkersToDate

    async run(){
        await this.getStartDate();
        await this.getWorkers();
        this.eachMonthWorkers();
        this.printAll();
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
        const divideDaysAndHolidays = everyMonthWorkers.standardForDays()
        this.selectWorkersToDay(divideDaysAndHolidays)
    }

    selectWorkersToDay(divideDaysAndHolidays){
        const makeWorkersToDate = new workersToDate(this.#weekdayWorkers,this.#holidatWorkers)
        const workers = makeWorkersToDate.makeWorkers(divideDaysAndHolidays)
        this.#allWorkersToDate = workers
    }

    printAll(){
        const checkDateNumber = new checkDate(this.#startDate)
        const dateNumber = checkDateNumber.checkDay()
        outputView.dateWorkers(dateNumber,this.#startDate,this.#allWorkersToDate)
    }
}

export default controller;