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
        win.forEach((element,index) => {
           MissionUtils.Console.print(`${MESSAGE.winCount[index]+element}개`) 
        });
    },

    printRate(win,lottoPrice){
        const getAword = new makeAword()
        const winMoney = getAword.prize(win)
        const getRate = winMoney/lottoPrice * 100
        MissionUtils.Console.print(`${MESSAGE.rate + getRate.toFixed(1)}%입니다.`)
    }
}

export default outputview