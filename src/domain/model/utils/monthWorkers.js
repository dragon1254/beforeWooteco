import monthWeekday from "./monthWeekday";

class monthWorkers{
#month
#weekday
#workersObject
    constructor(startDate){
        this.#month = startDate[0]
        this.#weekday = startDate[1]
    }
    standardForDays(){
        const workersForDays = new monthWeekday(this.#weekday)
        if(this.#weekday === '월') {
            let workObject = workersForDays.startMon();
            this.#workersObject = workObject
        }
        if(this.#weekday === '화') {
            let workObject = workersForDays.startTue();
            this.#workersObject = workObject
        }
        this.wedThrFri(workersForDays)
        this.exceptionHoliday()
        const workersObject = this.#workersObject
        return workersObject
    }

    // 길어져서 수목금/토일은 따로 메서드로 나눔
    wedThrFri(workersForDays){
        if(this.#weekday === '수') {
            let workObject = workersForDays.startWed();
            this.#workersObject = workObject
        }
        if(this.#weekday === '목') {
            let workObject = workersForDays.startThu();
            this.#workersObject = workObject
        }
        if(this.#weekday === '금') {
            let workObject = workersForDays.startFri();
            this.#workersObject = workObject
        }
        this.satSun(workersForDays)
    }


    satSun(workersForDays){
        if(this.#weekday === '토') {
            let workObject = workersForDays.startSat();
            this.#workersObject = workObject
        }
        if(this.#weekday === '일') {
            let workObject = workersForDays.startSun();   
            this.#workersObject = workObject
        }
    }
    
    exceptionHoliday(){
        if(this.#month === 1){
            this.#workersObject[1] = '휴';
        }
        if(this.#month === 3){
            this.#workersObject[1] = '휴';
        }
        if(this.#month === 5){
            this.#workersObject[5] = '휴';
        }
        if(this.#month === 6){
            this.#workersObject[6] = '휴';
        }
        this.exceptionHolidayFromAug()
    }
    exceptionHolidayFromAug(){
        if(this.#month === 8){
            this.#workersObject[15] = '휴';
        }
        if(this.#month === 10){
            this.#workersObject[3] = '휴';
            this.#workersObject[9] = '휴';
        }
        if(this.#month === 12){
            this.#workersObject[25] = '휴';
        }
    }
}

export default monthWorkers;