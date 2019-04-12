
function outputConditions() {
var zip = "46032";
/* create and open new request */
var headerBox = document.querySelector('#currenttemp');
let weatherRequest = new XMLHttpRequest();
    weatherRequest.open ("GET", "https://api.openweathermap.org/data/2.5/weather?zip=" + 
    zip + ",us&units=imperial&APPID=93f7b5fbca8fc6183352adb88e36039d", true);
/* send the request */
weatherRequest.responseType = 'json';
weatherRequest.send();

/* get response from server and do something with it */

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    console.log(weatherData);

    /* populate the current temp box at the bottom of the temple page */

/* display "current temp:", the temp, and the weather icon */

    var outputTemp = parseFloat(weatherData.main.temp).toFixed(0);
    var imgArray = weatherData.weather[0].icon;

    var iconURL = 'https://openweathermap.org/img/w/'+ imgArray + '.png';

    var myHeaderBox = document.createElement('article');
    var myText = document.createElement('h5');
    var myTemp = document.createElement('div');
    var myImg = document.createElement('img');
    var myP = document.createElement('p');

    myText.innerHTML = 'Indianapolis:';
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