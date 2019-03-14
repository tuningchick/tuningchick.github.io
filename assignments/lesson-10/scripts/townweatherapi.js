/* thanks, Kimi, for pointing out that I could use the town ID to call the function so that this code 
will work for each town. Sometimes I am a little slow to the draw!! */
function outputConditions(townID) {
/* create and open new request */
var span = document.querySelector('#weatherSummary');
let weatherRequest = new XMLHttpRequest();
    weatherRequest.open ("GET", "https://api.openweathermap.org/data/2.5/weather?id=" + 
    townID + "&units=imperial&APPID=93f7b5fbca8fc6183352adb88e36039d", true);
/* send the request */
weatherRequest.responseType = 'json';
weatherRequest.send();

/* get response from server and do something with it */

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    console.log(weatherData);

/* display temp, humidity, wind, current conditions and wind chill in weather summary */

    var outputDesc = weatherData.weather[0].main;
    var outputTemp = parseFloat(weatherData.list[0].main.temp);
    var outputHumid = weatherData.list[0].main.humidity;
    var outputWind = parseFloat(weatherData.list[0].wind.speed);

// create variable for wind chill in degrees F
    var chill = windChill(outputTemp, outputWind);
//calculating wind chill
    function windChill(temp, speed) {
        var f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16))
            + (0.4275 * temp * Math.pow(speed, 0.16));
        return f;
    }

    var myConditions = document.createElement('article');
    var myDesc = document.createElement('p');
    var myTemp = document.createElement('p');
    var myHumidity = document.createElement('p');
    var myWind = document.createElement('p');
    var myChill = document.createElement('p');

    myDesc.innerHTML = 'Currently: ' + outputDesc;
    myTemp.innerHTML = 'Temp: ' + outputTemp + '&deg; F';
    myHumidity.innerHTML = 'Humidity: ' + outputHumid + '%';
    myWind.innerHTML = 'Wind: ' + outputWind + 'mph';
    myChill.innerHTML = 'Wind Chill: ' + chill.toFixed(0) + '&deg; F';

    myConditions.appendChild(myDesc);
    myConditions.appendChild(myTemp); 
    myConditions.appendChild(myHumidity);
    myConditions.appendChild(myWind);
    myConditions.appendChild(myChill);

    span.appendChild(myConditions);
}
}

/* 5 day forecast function */

function outputFiveDay(townID) {
    /* create and open new request */
    var table = document.querySelector('#forecastTable');
    let forecastRequest = new XMLHttpRequest();
    forecastRequest.open ("GET", "https://api.openweathermap.org/data/2.5/forecast?id=" + 
    townID + "&units=imperial&APPID=93f7b5fbca8fc6183352adb88e36039d", true);
    /* send the request */
    forecastRequest.responseType = 'json';
    forecastRequest.send();

/* create function to get the 5 day forecast and display it in a table */

forecastRequest.onload = function() {
    var forecastData = forecastRequest.response;
    console.log(forecastData);

    var dayRow = createElement('tr');
    var d = new Date();
    day = [];
    /*create loop to populate table header row */
    for (i=0; i<5; i++) {
        day[i] = createElement('th');
        var weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        var day = weekdays[d.getDay()++];
        dayRow.appendChild(day[i]);
    }
    
}

}
