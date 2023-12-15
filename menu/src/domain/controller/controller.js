import recommendCategory from "../model/util/recommendCategory";
import recommendMenu from "../model/util/recommendMenu";
import inputView from "../view/inputView";
import outputView from "../view/outputView";

class controller{
#name
#category
#recommend

    async run(){
        outputView.firstIntro();
        await this.getCouchName();
        await this.getNoMenu();
        this.getRecommendCategory();
        this.getRecommendMenu();
        this.printResult();
    }

    async getCouchName(){
    try{
        const getNameArray = await inputView.makeName();
        this.#name = getNameArray;
    } catch (err){
        console.log(err)
        return await this.getCouchName()
    }
    }

    async getNoMenu(){
        let everyNoMenu = {}
        this.#name.forEach(async(element) =>  {
            const eachNoMenu = await inputView.noMenu(element)
            everyNoMenu[element] = eachNoMenu
        });
    }

    getRecommendCategory(){
        const makeRecommendCategory = new recommendCategory()
        const getCategory = makeRecommendCategory.makeCategory()
        this.#category = getCategory
    }

    getRecommendMenu(){
        const everyMenu = {};
        this.#name.forEach(element => {
            const makeRecommendMenu = new recommendMenu(this.#category)
            const getMenu = makeRecommendMenu.makeMenu()
            everyMenu[element] = getMenu
        });
        this.#recommend = everyMenu
    }

    printResult(){
        outputView.secondIntro()
        outputView.result(this.#name,this.#category,this.#recommend)
    }
}

export default controller;