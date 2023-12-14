import NUMBER from "../../../constant/number";

class makeAword{
    prize(win){
        let winPrize = 0
        win.forEach((element, index) => {
            winPrize = winPrize + element*NUMBER.winPrice[index]
        });
        return winPrize;
    }
}

export default makeAword