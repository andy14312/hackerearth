// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

function validTime(time) {
    var timeParts = time.split(":").map(parseInt);
    if(timeParts.length === 2) {
        hours = timeParts[0];
        minutes = timeParts[1];
        if(hours < 24 && hours >= 0 && minutes <= 59 && minutes >=0) {
            return true;
        } 
    } 
    return false;
}

console.log(validTime("03:60"));