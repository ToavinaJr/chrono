let min = document.getElementById('min');
let sec = document.getElementById('sec');
let amPm = document.getElementById("am-pm");

let date = Date;

setInterval(() => {
    let secondeValue= parseInt(sec.textContent);
    let minuteValue= parseInt(min.textContent);
    secondeValue++;

    if (secondeValue === 60) {
        secondeValue = 0;
        minuteValue++;
    }
    
    if (minuteValue > 12 ) {
        minuteValue = 1;
        if ( amPm.textContent === "am") 
            amPm.textContent = "pm";
        else if ( amPm.textContent === "pm")
            amPm.textContent = "am";
    }

    sec.textContent = (secondeValue < 10 ) ? '0' + secondeValue : secondeValue;
    min.textContent = (minuteValue < 10) ? '0' + minuteValue : minuteValue;
}, 1000);