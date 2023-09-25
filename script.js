
window.onload = function () {
    // console.log("this page is fully loaded")
    var milliSeconds = '00';
    var seconds = '00';
    var minutes = '00';
    var hours = '00';

    var addMilliSeconds = document.getElementById("milliSeconds")
    var addSeconds = document.getElementById('seconds')
    var addMinutees = document.getElementById('minutes')
    var addHours = document.getElementById('hours')
    var start = document.getElementById("start-btn");
    var stop = document.getElementById("stop-btn");
    var reset = document.getElementById("reset-btn");
    var interval;

    //  Start button Event
    start.onclick = function () {
        clearInterval(interval);
        interval = setInterval(setTimer, 10)

    }

    //stop button event
    stop.onclick = function () {
        clearInterval(interval);
        start.innerHTML = "Resume";
    }

    //reset button event
    reset.onclick = function () {
        clearInterval(interval);
        milliSeconds = setZero(addMilliSeconds);
        seconds = setZero(addSeconds);
        minutes = setZero(addMinutees);
        hours = setZero(addHours);
        start.innerHTML = "Start"
    }

    // setTimer function
    function setTimer() {
        milliSeconds++;
        if (milliSeconds <= 9) {
            // console.log(milliSeconds)
            addMilliSeconds.innerHTML = '0' + milliSeconds;
        }
        else {
            addMilliSeconds.innerHTML = milliSeconds;
        }

        if (milliSeconds > 99) {
            seconds++;
            milliSeconds = setZero(addMilliSeconds);
            if (seconds <= 9) {
                addSeconds.innerHTML = '0' + seconds;
            } else {
                addSeconds.innerHTML = seconds;
            }
        }
        if (seconds >= 59) {
            minutes++;
            milliSeconds = setZero(addMilliSeconds);
            seconds = setZero(addSeconds)
            if (minutes <= 9) {
                addMinutees.innerHTML = '0' + minutes;
            } else {
                addMinutees.innerHTML = minutes;
            }

        }
        if (minutes >= 59) {
            hours++;
            milliSeconds = setZero(addMilliSeconds);
            seconds = setZero(addSeconds);
            minutes = setZero(addMinutees);
            (hours <= 9) ? addHours.innerHTML = "0" + hours : addHours.innerHTML = hours;
        }

    }

    function setZero(appendElement) {
        var element = 0;
        appendElement.innerHTML = "0" + element;
        return element;
    }


}