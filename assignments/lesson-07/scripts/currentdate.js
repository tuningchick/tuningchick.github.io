// Input: computer entered
// Process: use .getDate and two arrays to compile the date 
// Output: date in this format: day, date month, year

function actualDate() {
    var d = new Date();
    var dayOfMonth = d.getDate();
    var year = d.getFullYear();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    var currentDay = weekday[d.getDay()];
    var currentMonth = month[d.getMonth()];

document.getElementById("displayDate").innerHTML = currentDay + ", " + dayOfMonth + "  " +
    currentMonth + ", " + year;
}

// create toggle function to make the small view hamburger menu work

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Calculate wind chill
// use two functions to calculate wind chill and return to website
// output wind chill in degrees F
function doInputOutput() {
    //get temp and wind speed from website data
    var inputTemp = parseFloat(document.getElementById("temperature").value);
    var inputSpeed = parseFloat(document.getElementById("windSpeed").value);
    var chill = windChill(inputTemp, inputSpeed);
    document.getElementById("displayWindChill").innerHTML = "Wind chill: " + chill.toFixed(1)
        + "&deg";
}

function windChill(temp, speed) {
    var f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temp * Math.pow(speed, 0.16));
    return f;
}