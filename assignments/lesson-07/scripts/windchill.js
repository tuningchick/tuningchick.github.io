// Calculate wind chill
// use two functions to calculate wind chill and return result to website
// output wind chill in degrees F
function outputWindChill() {
    //get temp and wind speed from website data
    var inputTemp = parseFloat(document.getElementById("temperature").value);
    var inputSpeed = parseFloat(document.getElementById("windSpeed").value);
    var chill = windChill(inputTemp, inputSpeed);
    document.getElementById("displayWindChill").innerHTML = "Wind chill: " + chill.toFixed(1)
        + "&deg";
}

//calculating wind chill
function windChill(temp, speed) {
    var f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temp * Math.pow(speed, 0.16));
    return f;
}