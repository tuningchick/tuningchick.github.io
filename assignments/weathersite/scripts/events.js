function runEvents(town) {
var section = document.querySelector('#upcoming');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
/* create and open new request */
var request = new XMLHttpRequest();
request.open('GET', requestURL);
/* set response type to JSON */
request.responseType = 'json';
request.send();
/* get response from server and deal with it */
request.onload = function() {
    var upcoming = request.response;
    eventData(upcoming);


/* create and display upcoming events */
function eventData(jsonObj) {
    var townName = jsonObj['towns'];
    /* look for right town */
    for (var i = 0; i < townName.length; i++) {
        if (townName[i].name == town) {
            var event = townName[i].events;
            
            var eventList = document.createElement('ul');

            /* loop to determine how many events and add them to list */
            for (var e = 0; e < event.length; e++) {
                var myEvent = document.createElement('li');

                myEvent.innerHTML = event[0];
                eventList.appendChild(myEvent);
            }

            /* take list items and add to section container */
            section.appendChild(eventList);
        }
           
    }
}
} 
}