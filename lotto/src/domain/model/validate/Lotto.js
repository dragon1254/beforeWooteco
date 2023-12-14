import { MissionUtils } from "@woowacourse/mission-utils";
import ERROR from "../message/error";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MissionUtils.Console.print(ERROR.six));
    }
    const duplication = new Set(numbers)
    if(numbers.length !== duplication.size){
      throw new Error(MissionUtils.Console.print(ERROR.duplication));
    }
    this.checkRange(numbers);
  }

  checkRange(numbers){
    numbers.forEach(element => {
      if(element < 1){
        throw new Error(MissionUtils.Console.print(ERROR.rangeStart))
      }
      if(element > 45){
        throw new Error(MissionUtils.Console.print(ERROR.rangeFinal))
      }
    });
}
}

export default Lotto;
