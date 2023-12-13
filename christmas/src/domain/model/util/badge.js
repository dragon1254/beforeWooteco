import constNumber from "../constant/number";

class badge{
#discount
    constructor(discount){
        this.#discount = discount;
    }
    classify(){
        let getBadge
        let totalDiscount = 0
        this.#discount.forEach(element => {
            totalDiscount = totalDiscount + element
        });
        if(totalDiscount >= constNumber.starBadge){
            getBadge = '별'
        }
        if(totalDiscount >= constNumber.treeBadge){
            getBadge = '트리'
        }
        if(totalDiscount >= constNumber.santaBadge){
            getBadge = '산타'
        }
    }
}

export default badge