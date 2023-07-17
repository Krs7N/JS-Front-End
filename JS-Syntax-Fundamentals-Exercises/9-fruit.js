`use strict`;

function printNeededMoneyToBuyFood(fruitType, weightGrams, priceForKg) {
    const weightKg = weightGrams / 1000;

    console.log(`I need $${(weightKg * priceForKg).toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`);
}

printNeededMoneyToBuyFood('orange', 2500, 1.80);