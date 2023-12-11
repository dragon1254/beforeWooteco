import MESSAGE from "../model/message/message";
import validateDate from "../model/validate/validateDate";

const InputView = {
    async readDate() {
        const inputDate = await Console.readLineAsync(MESSAGE.date);
        const numberDate = Number(inputDate);
        const checkDates = new validateDate();
        checkDates.checkDate(numberDate);
        return numberDate;
    }
}
export default InputView