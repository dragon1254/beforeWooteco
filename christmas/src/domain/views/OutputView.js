import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../model/message/message";
import BENEFIT from "../model/constant/benefit";

const OutputView = {
    printIntro() {
        MissionUtils.Console.print(MESSAGE.firstIntro)
    },

    printSecondIntro(date){
        MissionUtils.Console.print('12월 '+date+MESSAGE.secondIntro)
    },

    printMenu(menu) {
        MissionUtils.Console.print(MESSAGE.menuTitle);
        const menuArray = Object.keys(menu)
        const menuCountArray = Object.values(menu)
        menuCountArray.forEach((element,index) => {
            if(element !==0 ){
                MissionUtils.Console.print(`${menuArray[index]} ${menuCountArray[index]}개`)
            }
        });
    },

    printTotalPrice(totalPrice){
        MissionUtils.Console.print(MESSAGE.beforeDiscountTitle);
        const beforeDiscount = totalPrice.toLocaleString('ko-KR');
        MissionUtils.Console.print(`${beforeDiscount}원`)
    },

    printGift(totalPrice){
        if(totalPrice >= 120000){
            MissionUtils.Console.print(MESSAGE.giftTitle);
            MissionUtils.Console.print('샴페인 1개');
        }
        if(totalPrice < 120000){
            MissionUtils.Console.print(MESSAGE.giftTitle);
            MissionUtils.Console.print('없음')
        }
    },

    printBenefit(discount,totalPrice){
        console.log(discount)
        if(totalPrice < 10000){
            MissionUtils.Console.print(MESSAGE.profitTitle)
            MissionUtils.Console.print('없음')
        }
        if(discount != [0,0,0,0]){
            MissionUtils.Console.print(MESSAGE.profitTitle)
            this.printDetailBenefit(discount)
        }
        if(totalPrice > 120000){
            MissionUtils.Console.print('증정 이벤트: -25,000원')
        }
    },

    printDetailBenefit(discount){
        discount.forEach((element,index) => {
            if(element !==0 ){
                const elementForLocale = element.toLocaleString('ko-KR')
                MissionUtils.Console.print(`${BENEFIT.history[index]}: -${elementForLocale}원`)
            }
        });
    },

    printTotalBenefit(discount,totalPrice){
        let discountSum = 0;
        discount.forEach(element => {
            discountSum = discountSum + element
        });
        let afterBenefit = totalPrice - discountSum;
        if(totalPrice >= 120000){
            discountSum = discountSum + 25000
        }
        this.printDetailTotalBenefit(discountSum);
        this.printAfterBenefit(afterBenefit);
    },
    printDetailTotalBenefit(discountSum){
        if(discountSum !== 0 ){
            const totalForLocal = discountSum.toLocaleString('ko-KR');
            MissionUtils.Console.print(MESSAGE.totalProfitTitle);
            MissionUtils.Console.print(`-${totalForLocal}원\n`);
            }
        if(discountSum === 0){
            MissionUtils.Console.print(MESSAGE.totalProfitTitle);
            MissionUtils.Console.print(`0원\n`);
        }
    },

    printAfterBenefit(afterBenefit){
        MissionUtils.Console.print(MESSAGE.afterDiscountTitle);
        const afterBenefitForLocale = afterBenefit.toLocaleString('ko-KR');
        MissionUtils.Console.print(`${afterBenefitForLocale}원`)
    },

    printBadge(myBadge){
        MissionUtils.Console.print(MESSAGE.badge)
        MissionUtils.Console.print(myBadge)
    }
}
export default OutputView