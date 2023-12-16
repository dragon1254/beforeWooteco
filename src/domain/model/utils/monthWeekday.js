import NUMBER from "../constant/number";

class monthWeekday{
#weekday
    constructor(weekday){
        this.#weekday = weekday
    }
    startMon(){
        let monthObject = {};
        for(let i = 0; i < NUMBER.monthDate.thirtyOne; i++){
            let temporaryNumber = i % 7
            if([1,2,3,4,5].includes(temporaryNumber)){
                monthObject[i] = '평'
            }
            if([0,6].includes(temporaryNumber)){
                monthObject[i] = '휴'
            }
        }
        return monthObject;
    }
    startTue(){
        let monthObject = {};
        for(let i = 0; i < NUMBER.monthDate.thirtyOne; i++){
            let temporaryNumber = i % 7
            if([0,1,2,3,4].includes(temporaryNumber)){
                monthObject[i] = '평'
            }
            if([5,6].includes(temporaryNumber)){
                monthObject[i] = '휴'
            }
        }
        return monthObject;
    }

    startWed(){
        let monthObject = {};
        for(let i = 0; i < NUMBER.monthDate.thirtyOne; i++){
            let temporaryNumber = i % 7
            if([0,1,2,3,6].includes(temporaryNumber)){
                monthObject[i] = '평'
            }
            if([4,5].includes(temporaryNumber)){
                monthObject[i] = '휴'
            }
        }
        return monthObject;
    }

    startThu(){
        let monthObject = {};
        for(let i = 0; i < NUMBER.monthDate.thirtyOne; i++){
            let temporaryNumber = i % 7
            if([0,1,2,5,6].includes(temporaryNumber)){
                monthObject[i] = '평'
            }
            if([3,4].includes(temporaryNumber)){
                monthObject[i] = '휴'
            }
        }
        return monthObject;
    }

    startFri(){
        let monthObject = {};
        for(let i = 0; i < NUMBER.monthDate.thirtyOne; i++){
            let temporaryNumber = i % 7
            if([0,1,4,5,6].includes(temporaryNumber)){
                monthObject[i] = '평'
            }
            if([2,3].includes(temporaryNumber)){
                monthObject[i] = '휴'
            }
        }
        return monthObject;
    }

    startSat(){
        let monthObject = {};
        for(let i = 0; i < NUMBER.monthDate.thirtyOne; i++){
            let temporaryNumber = i % 7
            if([0,3,4,5,6].includes(temporaryNumber)){
                monthObject[i] = '평'
            }
            if([1,2].includes(temporaryNumber)){
                monthObject[i] = '휴'
            }
        }
        return monthObject;
    }

    startSun(){
        let monthObject = {};
        for(let i = 0; i < NUMBER.monthDate.thirtyOne; i++){
            let temporaryNumber = i % 7
            if([2,3,4,5,6].includes(temporaryNumber)){
                monthObject[i] = '평'
            }
            if([0,1].includes(temporaryNumber)){
                monthObject[i] = '휴'
            }
        }
        return monthObject;
    }
}

export default monthWeekday;