import dayjs from "dayjs";
import 'dayjs/locale/pt-br.js';

function informFutureDeliveryDates(deliveryDate) {
    if (parseFloat(deliveryDate)) {
        for (let i = 0; i < 31; i++) {
            if (dayjs().add(i, 'day').format('D') === deliveryDate) {
                let dates = [];
                for (let j = 0; j < 3 ; j++) {
                    let current = dayjs().add(i, 'day').add(j, 'month').format('d');
                    if (current === "6") {
                        dates.push(dayjs().add(i + 2, 'day').add(j, 'month').format('DD/MM/YYYY'));
                    } else if (current === "0") {
                        dates.push(dayjs().add(i + 1, 'day').add(j, 'month').format('DD/MM/YYYY'));
                    } else {
                        dates.push(dayjs().add(i, 'day').add(j, 'month').format('DD/MM/YYYY'));
                    }
                }
                return dates;
            }
        }
        return true
    }
    else {
        let realDate;
        if (deliveryDate === 'Segunda') realDate = "1";
        if (deliveryDate === 'Quarta') realDate = "3";
        if (deliveryDate === 'Sexta') realDate = "5";
        for (let i = 0; i < 8; i++) {
            if (dayjs().add(i, 'day').format('d') === realDate) {
                return [
                    dayjs().add(i, 'day').format('DD/MM/YYYY'),
                    dayjs().add(i + 7, 'day').format('DD/MM/YYYY'),
                    dayjs().add(i + 14, 'day').format('DD/MM/YYYY'),
                ];
            }
        }
    }
}

export {
    informFutureDeliveryDates,
};
