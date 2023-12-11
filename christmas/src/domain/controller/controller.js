import InputView from "../views/InputView";
import { Console, MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView";

class constroller{
#date
    constructor(){

    }

    async start(){
        OutputView.printIntro;
        await this.getDate();
    }

    async getDate(){
        try{
            this.#date = await InputView.readDate();
        }catch(err){
            console.log(err);
            return await this.getDate();
        }
    }
}

export default constroller;
