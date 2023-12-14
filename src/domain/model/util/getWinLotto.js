class getWinLotto{
#allLottos
    constructor(allLottos){
        this.#allLottos = allLottos
    }

    checkWin(winningNumber,bonusNumber){
        let winCount = [0,0,0,0,0];
        this.#allLottos.forEach(element => {
            const everyLotto = [...element,...winningNumber]
            this.checkWinDetail(everyLotto,bonusNumber,winCount);
        })
        return winCount;
    }
    checkWinDetail(everyLotto,bonusNumber,winCount){
        const everyLottoSet = new Set(everyLotto)
        switch(everyLottoSet.size){
            case 9 : 
            winCount[0]++
            break
            case 8 : 
            winCount[1]++
            break
            case 7 : 
            this.checkBonus(everyLotto,bonusNumber,winCount)
            break
            case 6 : 
            winCount[4]++
            break
        }
    }

    checkBonus(everyLotto,bonusNumber,winCount){
        if(everyLotto.includes(bonusNumber)){
            winCount[3]++
        }
        
        if(!everyLotto.includes(bonusNumber)){
            winCount[2]++
        }
        
    }
}

export default getWinLotto;