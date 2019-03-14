/* thanks, Kimi, for pointing out that I could use the town ID to call the function so that this code will work for each town.
Sometimes I am a little slow to the draw!! */
function outputConditions(townID) {
/* create and open new request */
var span = document.querySelector('#weatherSummary');
let weatherRequest = new XMLHttpRequest();
    weatherRequest.open ("GET", "https://api.openweathermap.org/data/2.5/forecast?id=" + 
    townID + "&units=imperial&APPID=93f7b5fbca8fc6183352adb88e36039d", true);
/* send the request */
weatherRequest.send();

/* get response from server and do something with it */

weatherRequest.onload = function() {
        let weatherData = JSON.parse(weatherRequest.response);
        console.log(weatherData);
        let currentAPIData = weatherData;
        conditions(currentAPIData);

/* display temp, humidity, wind, current conditions and wind chill in weather summary */

function conditions(jsonObj) {
    var outputTemp = jsonObj.list[0].main.temp;
    var outputHumid = jsonObj.list[0].main.humidity;
    var outputWind = jsonObj.list[0].wind.speed;

// Calculate wind chill
// output wind chill in degrees F
    var chill = windChill(outputTemp, outputWind);
    

//calculating wind chill
function windChill(temp, speed) {
    var f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temp * Math.pow(speed, 0.16));
    return f;
}

    var myConditions = document.createElement('article');
    var myTemp = document.createElement('p');
    var myHumidity = document.createElement('p');
    var myWind = document.createElement('p');
    var myChill = document.createElement('p');

    myTemp.innerHTML = 'Temp: ' + outputTemp + '&deg; F';
    myHumidity.textcontent = 'Humidity: ' + outputHumid + '%';
    myWind.innerHTML = 'Wind: ' + outputWind + 'mph';
    myChill.innerHTML = 'Wind Chill: ' + chill + '&deg; F';

    myConditions.appendChild(myTemp);
    myConditions.appendChild(myHumidity);
    myConditions.appendChild(myWind);
}
}
}
