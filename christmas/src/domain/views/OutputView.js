import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../model/message/message";

const OutputView = {
    printIntro() {
        MissionUtils.Console.print(MESSAGE.firstIntro)
    },
    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}
export default OutputView