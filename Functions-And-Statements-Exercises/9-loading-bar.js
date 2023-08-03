`use strict`;

function loadingBar(percentage) {
    const percentBar = [];
    
    for (let i = percentage / 10; i >= 1; i--) {
        percentBar.push('%');
    }

    for (let i = 10 - percentage / 10; i >= 1; i--) {
        percentBar.push('.');
    }

    if (percentage === 100) {
        console.log(`${percentage}% Complete!`);
        console.log(`[${percentBar.join('')}]`);
    } else {
        console.log(`${percentage}% [${percentBar.join('')}]`);
        console.log(`Still loading...`)
    }
} 

loadingBar(100);