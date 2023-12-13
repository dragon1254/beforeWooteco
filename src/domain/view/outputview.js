import MESSAGE from "../model/message/message"
import {MissionUtils} from "@woowacourse/mission-utils";


const outputview = {
    lottoCount(countLottos){
        MissionUtils.Console.print(countLottos+MESSAGE.buy)
    },
    printEveryLotto(oneLottoSort){
        MissionUtils.Console.print(oneLottoSort)
    }
}

export default outputview