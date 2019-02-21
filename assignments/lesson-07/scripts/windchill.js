// Calculate wind chill
// use two functions to calculate wind chill and return result to website
// output wind chill in degrees F
function calculateWindChill() {
    //get temp and wind speed from website data
    var inputTemp = parseFloat(document.getElementById("temperature").value);
    var inputSpeed = parseFloat(document.getElementById("windSpeed").value);
    var chill = 35.74 + (0.6215 * inputTemp) - (35.75 * Math.pow(inputSpeed, 0.16))
    + (0.4275 * temp * Math.pow(speed, 0.16));
    document.getElementById("displayWindChill").innerHTML = "Wind chill: " + chill.toFixed(1)
        + "&deg";
}