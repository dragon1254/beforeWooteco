import constNumber from "../constant/number";

class badge{
#discount
#totalPrice
    constructor(discount,totalPrice){
        this.#discount = discount;
        this.#totalPrice = totalPrice
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
        this.santa(totalDiscount);
        return getBadge;
    }
    santa(totalDiscount){
        if(totalDiscount >= constNumber.santaBadge){
            getBadge = '산타'
        }
        if(totalDiscount >= 120000){
            getBadge = '산타'
        }
    }
}

export default badge