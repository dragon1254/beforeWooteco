import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../model/message/message";
import nameValidate from "../model/validate/nameValidate";
import menuValidate from "../model/validate/menuValidate";

const inputView = {
    async makeName(){
        const getNames = await MissionUtils.Console.readLineAsync(MESSAGE.names);
        const nameArray = getNames.split(',')
        const nameStandarad = new nameValidate()
        nameStandarad.checkName(nameArray);
        return nameArray;
    },
    async noMenu(element){
        const makeNoMenu = await MissionUtils.Console.readLineAsync(element + MESSAGE.noMenu)
        const noMenuArray = makeNoMenu.split(',')
        const menuStandard = new menuValidate();
        menuStandard.checkMenu(noMenuArray)
        return makeNoMenu
    }
}

export default inputView;