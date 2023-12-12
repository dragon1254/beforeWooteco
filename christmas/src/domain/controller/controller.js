import InputView from "../views/InputView";
import { Console, MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView";
import getList from "../model/util/getList";
import validateMenu from "../model/validate/validateMenu";

class constroller{
#date
#orderedMenu
    constructor(){

    }

    async start(){
        OutputView.printIntro;
        await this.getDate();
        await this.getMenu();
    }

    async getDate(){
        try{
            this.#date = await InputView.readDate();
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
}

export default constroller;
