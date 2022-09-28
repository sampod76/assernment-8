import React from 'react';



const SetlocalStorage = (card, time) => {
    let totalTime;
    const getTimes = localStorage.getItem('time')

    if (getTimes) {
        totalTime = JSON.parse(getTimes)
    } else {
        totalTime = {}
    }

    totalTime[card] = Number(time)

    localStorage.setItem('time', JSON.stringify(totalTime))
};


export { SetlocalStorage };