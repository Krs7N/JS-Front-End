`use strict`;

function getTotalPriceForVacation(countOfPeopleInGroup, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;

    switch (typeOfGroup) {
        case `Students`:
            if (dayOfWeek === `Friday`) {
                totalPrice = countOfPeopleInGroup * 8.45;
            }
            else if (dayOfWeek === `Saturday`) {
                totalPrice = countOfPeopleInGroup * 9.8;
            }
            else if (dayOfWeek === `Sunday`) {
                totalPrice =  countOfPeopleInGroup * 10.46;
            }
            
            if (countOfPeopleInGroup >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case `Business`:
            if (countOfPeopleInGroup >= 100) {
                countOfPeopleInGroup -= 10;
            }

            if (dayOfWeek === `Friday`) {
                totalPrice = countOfPeopleInGroup * 10.9;
            }
            else if (dayOfWeek === `Saturday`) {
                totalPrice = countOfPeopleInGroup * 15.6;
            }
            else if (dayOfWeek === `Sunday`) {
                totalPrice =  countOfPeopleInGroup * 16;
            }
            break;
        case `Regular`:
            if (dayOfWeek === `Friday`) {
                totalPrice = countOfPeopleInGroup * 15;
            }
            else if (dayOfWeek === `Saturday`) {
                totalPrice = countOfPeopleInGroup * 20;
            }
            else if (dayOfWeek === `Sunday`) {
                totalPrice =  countOfPeopleInGroup * 22.5;
            }

            if (countOfPeopleInGroup >= 10 && countOfPeopleInGroup <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

getTotalPriceForVacation(30, "Students", "Sunday");