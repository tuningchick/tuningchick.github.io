/* encase the request, call and response in a function to call */

function runTemperature() {
    var span = document.querySelector('#currentTemp');
/* create and open new request */

let weatherRequest = new XMLHttpRequest();
    weatherRequest.open ("GET", "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=93f7b5fbca8fc6183352adb88e36039d", true);
/* send the request */

weatherRequest.send();

/* get response from server and do something with it */

weatherRequest.onload = function() {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        let currentTemp = request.response;
        Temperature(currentTemp);

/* display current temperature on test page */

function Temperature(jsonObj) {
    var outputMain = jsonObj['main'];
    var myP = document.createElement('p');

    var i = outputMain.length;
    myP.textcontent = outputMain[i].temp;

    span.appendchild(myP);
}
    
}
}
