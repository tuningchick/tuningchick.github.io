/* thanks, Kimi, for pointing out that I could use the town ID to call the function so that this code 
will work for each town. Sometimes I am a little slow to the draw!! */
function outputConditions(townID) {
/* create and open new request */
var span = document.querySelector('#weatherSummary');
var headerBox = document.querySelector('#currenttemp');
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
    var outputTemp = parseFloat(weatherData.main.temp);
    var outputHumid = weatherData.main.humidity;
    var outputWind = parseFloat(weatherData.wind.speed);

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

    /* populate the current temp box in the header of the town pages */

/* display "current temp:", the temp, and the weather icon */

    var outputTemp = parseFloat(weatherData.main.temp);
    var imgArray = weatherData.weather[0].icon;

    var iconURL = 'https://openweathermap.org/img/w/'+ imgArray + '.png';

    var myHeaderBox = document.createElement('article');
    var myText = document.createElement('h5');
    var myTemp = document.createElement('div');
    var myImg = document.createElement('img');
    var myP = document.createElement('p');

    myText.innerHTML = 'Current Temp:';
    myTemp.innerHTML = outputTemp + '&deg;F';
    myImg.setAttribute('src', iconURL);
    myImg.setAttribute('alt', "weather icon");
    myP.innerHTML = weatherData.weather[0].description;

    myHeaderBox.appendChild(myText);
    myHeaderBox.appendChild(myTemp);
    myHeaderBox.appendChild(myImg);
    myHeaderBox.appendChild(myP);

    headerBox.appendChild(myHeaderBox);
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

    var dayRow = document.createElement('tr');
    var d = new Date();
    var c = [d.getDay()];
    day = [];
    /*create loop to populate table header row */
    for (i=0; i<5; i++) {
        day[i] = document.createElement('th');
        var weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        day[i].innerHTML = weekdays[c];
        c++;
        if (c>6) {
            c = 0;
        }
        dayRow.appendChild(day[i]);
    }
    table.appendChild(dayRow);

    /* create loop to populate table data row */

    var tempRow = document.createElement('tr');
    var temp = [];
    var time = 0;
    for (i=0; i<forecastData.list.length; i++) {
        var timeSearch = forecastData.list[i].dt_txt;
        /* Kimi recommended looking up the string search on w3schools to look for a partial string match*/
        if (timeSearch.search('18:00:00') != -1) {
            temp[time] = document.createElement('td');
            temp[time].innerHTML = forecastData.list[i].main.temp_max.toFixed(0) + '&deg; F';
            tempRow.appendChild(temp[time]);
            time++;
        }
        
    }
    table.appendChild(tempRow);       
}


}
