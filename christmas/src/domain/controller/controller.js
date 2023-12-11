import InputView from "../views/InputView";

class constroller{
#date
    constructor(){

    }

    start(){

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
