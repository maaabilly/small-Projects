// setting const variables to the elements days, hours, minutes, seconds
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// countdown end goal date
const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    // insert html to display days, hours, minutes, seconds values
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    // Same as below
        // if (time < 10) {
        //     return `0${time}`;
        // } else {
        //     return time;
        // }
}

// initial call
countdown();

// continuously call countdown() EVERY 1000ms(1sec)
// loops until either clearInterval() is called or window is closed
setInterval(countdown, 1000);

