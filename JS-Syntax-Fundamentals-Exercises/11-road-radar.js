`use strict`;

function checkSpeedLimits(currentSpeed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const currentSpeedLimit = speedLimits[area];

    if (currentSpeed <= currentSpeedLimit) {
        console.log(`Driving ${currentSpeed} km/h in a ${currentSpeedLimit} zone`);
        return;
    }

    const speedingStatus = (currentSpeed - currentSpeedLimit <= 20) ? `speeding` : (currentSpeed - currentSpeedLimit <= 40) ? `excessive speeding` : `reckless driving`;

    console.log(`The speed is ${currentSpeed - currentSpeedLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedingStatus}`);
}

checkSpeedLimits(120, 'interstate');