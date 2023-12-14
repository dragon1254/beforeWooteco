import MESSAGE from "../model/message/message"
import {MissionUtils} from "@woowacourse/mission-utils";
import makeAword from "../model/util/makeAword";


const outputview = {
    lottoCount(countLottos){
        MissionUtils.Console.print(countLottos+MESSAGE.buy)
    },

    printEveryLotto(oneLottoSort){
        MissionUtils.Console.print(`[${oneLottoSort}]`)
    },

    printWin(win){
        MissionUtils.Console.print(`${MESSAGE.winThree + win[0]}개`);
        MissionUtils.Console.print(MESSAGE.winFour+ win[1]+'개');
        MissionUtils.Console.print(MESSAGE.winFive + win[2]+'개');
        MissionUtils.Console.print(MESSAGE.winBonus + win[3]+'개');
        MissionUtils.Console.print(MESSAGE.winSix + win[4]+'개');
    },

    printRate(win,lottoPrice){
        const getAword = new makeAword()
        const winMoney = getAword.prize(win)
        const getRate = winMoney/lottoPrice * 100
        MissionUtils.Console.print(`${MESSAGE.rate + getRate.toFixed(1)}%입니다.`)
    }
}

export default outputview