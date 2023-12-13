import InputView from "../views/InputView";
import { Console, MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView";
import getList from "../model/util/getList";
import validateMenu from "../model/validate/validateMenu";
import calculateDiscount from "../model/util/discount";
import constNumber from "../model/constant/number";
import totalMenuList from "../model/constant/constant";
import badge from "../model/util/badge";

class constroller{
#date
#orderedMenu
#discount = []
#totalPrice

    constructor(){

    }

    async start(){
        OutputView.printIntro();
        await this.getDate();
        await this.getMenu();
        this.getTotalPrice();
        this.printAll();
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
    }

    getTotalPrice(){
        const menuCountArray = Object.values(this.#orderedMenu)
        let makeTotalPrice = 0
        totalMenuList.price.forEach((element,index) => {
            makeTotalPrice = makeTotalPrice + element*menuCountArray[index];
        });
        this.#totalPrice = makeTotalPrice;
        if(this.#totalPrice >= 10000){
            this.getDiscount()
        }
    }

    getDiscount(){
        const discount = new calculateDiscount(this.#date,this.#orderedMenu);
        const discountArray = discount.allDiscount();
        this.#discount = discountArray;
    }
    
    printAll(){
        OutputView.printSecondIntro(this.#date);
        OutputView.printMenu(this.#orderedMenu);
        OutputView.printTotalPrice(this.#totalPrice);
        OutputView.printGift(this.#totalPrice);
        OutputView.printBenefit(this.#discount,this.#totalPrice);
        OutputView.printTotalBenefit(this.#discount,this.#totalPrice);

        const makeBadge = new badge(this.#discount,this.#totalPrice)
        const myBadge = makeBadge.classify();
        OutputView.printBadge(myBadge);
    }
}

export default constroller;
