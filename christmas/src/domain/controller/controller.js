import InputView from "../views/InputView";
import { Console, MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView";
import getList from "../model/util/getList";
import validateMenu from "../model/validate/validateMenu";
import calculateDiscount from "../model/util/discount";
import constNumber from "../model/constant/number";
import totalMenuList from "../model/constant/constant";

class constroller{
#date
#orderedMenu
#discount
    constructor(){

    }

    async start(){
        OutputView.printIntro;
        await this.getDate();
        await this.getMenu();
    }

    async getDate(){
        try{
            const takeDate = await InputView.readDate();
            this.#date = takeDate;
        }catch(err){
            console.log(err);
            return await this.getDate();
        }
    }

    async getMenu(){
        try{
            const orderedMenu = await InputView.readMenu(); 
            this.#orderedMenu = orderedMenu
    
        }catch(err){
            console.log(err);
            return await this.getMenu();
        }
        console.log(this.#orderedMenu)
    }

    getTotalPrice(){
        const menuCountArray = Object.values(this.#orderedMenu)
        const totalPrice = 0
        totalMenuList.price.forEach((element,index) => {
            totalPrice = totalPrice + element*menuCountArray[index];
        });
        if(totalPrice >= 10000){
            this.getDiscount()
        }
        if(totalPrice < 10000){
            this.#discount = [0,0,0,0]
        }
    }

    getDiscount(){
        const discount = new calculateDiscount(this.#date,this.#orderedMenu);
        const discountArray = discount.allDiscount();
        this.#discount = discountArray;
    }
    
    printAll(){
        
    }
}

export default constroller;
