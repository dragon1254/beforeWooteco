import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../model/message/message";
import validateDate from "../model/validate/validateDate";
import getList from "../model/util/getList";
import validateMenu from "../model/validate/validateMenu";

const InputView = {
    async readDate() {
        const inputDate = await MissionUtils.Console.readLineAsync(MESSAGE.date);
        const numberDate = Number(inputDate);
        const checkDates = new validateDate();
        checkDates.checkDate(numberDate);
        return numberDate;
    },

    async readMenu(){
        const inputMenu = await MissionUtils.Console.readLineAsync(MESSAGE.menu);
        const menulist = inputMenu.split(',')
        const makeList = new getList();
        const orderedMenuArray = makeList.getMenuList(menulist);
        const orderedMenuCountArray = makeList.getMenuCountList(menulist);
        const makeOrderedList = makeList.getOrderedList(orderedMenuArray,orderedMenuCountArray);
        const checkMenu = new validateMenu();
        checkMenu.checkMenuList(orderedMenuArray);
        checkMenu.checkCountList(orderedMenuCountArray);
        checkMenu.checkOtherCase(makeOrderedList);
        return makeOrderedList;
    }
}
export default InputView