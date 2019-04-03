const dayEl = document.querySelector('.timer-day');
const hourEl = document.querySelector('.timer-hours');
const minuteEl = document.querySelector('.timer-minutes');
const secondEl = document.querySelector('.timer-seconds');

function getTimeDifference(start, end) {
    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let day = Math.floor(hours / 24);

    hours = hours - (day * 24);
    minutes = minutes - (day * 24 * 60) - (hours * 60);
    seconds = seconds - (day * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    return {
        rDays: day,
        rHours: hours,
        rMinutes: minutes,
        rSeconds: seconds
    }
}

let countDownTimer = setInterval(() => {
    const startDate = new Date();
    const endDate = new Date('April, 14, 2019 21:00:00');

    let timeDifferenceObj = getTimeDifference(startDate, endDate)

    // Checks when the timer is over to stop it
    if (timeDifferenceObj.rDays < 0) {
        console.log('Timer is over!');
        clearInterval(countDownTimer);
    } else {
        // Adds a 0 when less than 10
        if (timeDifferenceObj.rDays < 10) {
            dayEl.textContent = `0${timeDifferenceObj.rDays}`
        } else {
            dayEl.textContent = timeDifferenceObj.rDays;
        }

        if (timeDifferenceObj.rHours < 10) {
            hourEl.textContent = `0${timeDifferenceObj.rHours}`;
        } else {
            hourEl.textContent = timeDifferenceObj.rHours;
        }

        if (timeDifferenceObj.rDays < 10) {
            dayEl.textContent = `0${timeDifferenceObj.rDays}`
        } else {
            dayEl.textContent = timeDifferenceObj.rDays;
        }

        if (timeDifferenceObj.rDays < 10) {
            dayEl.textContent = `0${timeDifferenceObj.rDays}`
        } else {
            dayEl.textContent = timeDifferenceObj.rDays;
        }

        if(timeDifferenceObj.rMinutes < 10) {
            minuteEl.textContent = `0${timeDifferenceObj.rMinutes}`;
        } else {
            minuteEl.textContent = timeDifferenceObj.rMinutes;
        }

        if(timeDifferenceObj.rSeconds < 10){
            secondEl.textContent = `0${timeDifferenceObj.rSeconds}`;
        } else {
            secondEl.textContent = timeDifferenceObj.rSeconds;
        }
    }

}, 1000)