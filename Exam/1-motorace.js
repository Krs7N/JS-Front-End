function solve(arr) {
    const riders = [];

    const countInputs = Number(arr.shift());

    for (let index = 0; index < countInputs; index++) {
        const riderTokens = arr.shift().split('|');
        riders.push(riderTokens);
    }

    let lines = arr.shift().split(' - ');

    while (lines[0] !== 'Finish') {
        const command = lines[0];
        const rider = lines[1];
        const token2 = lines[2];
        const token3 = lines[3];

        switch (command) {
            case 'StopForFuel':
                const currRider = riders.filter(r => r[0] === rider)    
                const currFuel = Number(currRider[0][1]);
                if (currFuel < Number(token2)) {
                    currRider[0][2] = token3;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${Number(token3)}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
        
            case 'Overtaking':
                const firstRider = riders.filter(r => r[0] == rider);
                const secondRider = riders.filter(r => r[0] == token2);
                const firstRiderPosition = Number(firstRider[0][2]);
                const secondRiderPosition = Number(secondRider[0][2]);
                if (firstRiderPosition < secondRiderPosition) {
                    [firstRider[0][2], secondRider[0][2]] = [secondRider[0][2], firstRider[0][2]];

                    console.log(`${firstRider[0][0]} overtook ${secondRider[0][0]}!`);
                }
                break;
            case 'EngineFail':
                const failedRider = riders.indexOf((riders.filter(r => r[0] == rider))[0]);
                delete riders[failedRider];
                const lapsLeft = Number(token2);

                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }

        lines = arr.shift().split(' - ');
    }

    riders.forEach(r => {
        console.log(r[0]);
        console.log(`   Final position: ${Number(r[2])}`);
    })
}

solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);