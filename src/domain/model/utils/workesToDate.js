class workersToDate{
#weekdayWorkers
#holidayWorkers
    constructor(weekdayWorkers,holidatWorkers){
        this.#weekdayWorkers = weekdayWorkers
        this.#holidayWorkers = holidatWorkers
    }
    makeWorkers(divideDaysAndHolidays){
        const temporaryValues = Object.values(divideDaysAndHolidays)
        const dateWorkers = {}
        let holidayCount = 0
        let weekdayCount = 0
        temporaryValues.forEach((element,index) => {
            if(element === '휴'){
                dateWorkers[index+1] = this.#holidayWorkers[holidayCount]
                holidayCount++
            }
            if(element === '평'){
                dateWorkers[index+1] = this.#weekdayWorkers[weekdayCount]
                weekdayCount++
            }
        });
        this.checkContinuous(divideDaysAndHolidays,dateWorkers)
        return dateWorkers
    }

    checkContinuous(divideDaysAndHolidays,dateWorkers){
        const allWorkers = Object.values(dateWorkers)
        for(let i = 0; i < allWorkers.length - 2; i++){
            if(allWorkers[i] === allWorkers[i+1]){
                this.ifDetails(i,divideDaysAndHolidays)
            }
        }
    }
    
    // depth가 깊어져 메서드 나눔
    ifDetails(i,divideDaysAndHolidays){
        if(divideDaysAndHolidays[i+1] === '휴'){
            this.#holidayWorkers[i+1] = this.#holidayWorkers[i+2]
            this.makeWorkers()
        }
        if(divideDaysAndHolidays[i+1] === '평'){
            this.#weekdayWorkers[i+1] = this.#weekdayWorkers[i+2]
            this.makeWorkers()
        }
    }
}

export default workersToDate;