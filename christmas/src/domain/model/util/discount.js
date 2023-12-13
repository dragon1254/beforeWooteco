import constNumber from "../constant/number"

class calculateDiscount{
#date
#menu
#discountArray =[]

    constructor(date,menu){
        this.#date = date
        this.#menu = menu
    }

    allDiscount(){
        this.dDay()
        this.week()
        this.special()
        return this.#discountArray
    }

    week(){
        if(constNumber.weekend.includes(this.#date)){
            const weekendDiscount = this.weekend();
            this.#discountArray.push(0);
            this.#discountArray.push(weekendDiscount);
        } 
        if(!constNumber.weekend.includes(this.#date)){
            const weekdaysDiscount = this.weekdays();
            this.#discountArray.push(weekdaysDiscount);
            this.#discountArray.push(0);
        }
    }

    weekdays(){
        const menuCountArray = Object.values(this.#menu);
        const discountMenu = menuCountArray.slice(7,9);
        let getWeekdaysDiscount = 0
        discountMenu.forEach(element => {
            getWeekdaysDiscount = getWeekdaysDiscount + element*constNumber.everyDiscount;
        });
        return getWeekdaysDiscount;
    }

    weekend(){
        const menuCountArray = Object.values(this.#menu);
        const discountMenu = menuCountArray.slice(3,7);
        let getWeekendDiscount = 0
        discountMenu.forEach(element => {
            getWeekendDiscount = getWeekendDiscount + element*constNumber.everyDiscount;
        });
        return getWeekendDiscount;
    }

    dDay(){
        if(this.#date <= constNumber.dDayDate){
            let getDdayDiscount = 0;
            getDdayDiscount = constNumber.baseDiscount + constNumber.increaseDiscount*this.#date
            this.#discountArray.push(getDdayDiscount)
        } else if(this.#date > constNumber.dDayDate){
            this.#discountArray.push(0)
        }
    }

    special(){
        if(constNumber.special.includes(this.#date)){
            this.#discountArray.push(1000);
        } else if(!constNumber.special.includes(this.#date)){
            this.#discountArray.push(0);
        }
    }
}

export default calculateDiscount