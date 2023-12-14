import {MissionUtils} from "@woowacourse/mission-utils";
import outputview from "../../view/outputview";

class makeLotto{
    countLotto(countLottos){
        outputview.lottoCount(countLottos)
        let allLottoArray = []
        for(let i = 0; i < countLottos; i++){
            const oneLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
            const oneLottoSort = oneLotto.sort((a,b) => a-b)
            outputview.printEveryLotto(oneLottoSort.join(', '));
            allLottoArray.push(oneLottoSort)
        }
        return allLottoArray;
    }
}

export default makeLotto