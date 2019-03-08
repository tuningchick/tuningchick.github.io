function runShowTowns() {
var section = document.querySelector('#homeTowns');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
/* create and open new request */
var request = new XMLHttpRequest();
request.open('GET', requestURL);
/* set response type to JSON */
request.responseType = 'json';
request.send();
/* get response from server and deal with it */
request.onload = function() {
    var homeTowns = request.response;
    showTowns(homeTowns);

/* create and display town name, motto, founding, population, annual rainfall */
function showTowns(jsonObj) {
    var townName = jsonObj['towns'];

    for (var i = 0; i < townName.length; i++) {
        var myArticle = document.createElement('article');
        var myH4 = document.createElement('h4');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myH4.textContent = townName[i].name;
        myPara1.textContent = '<em>' + townName[i].motto + '</em>';
        myPara2.textContent = 'Year Founded: ' + townName[i].yearFounded;
        myPara3.textContent = 'Population: '; + townName[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: ' + townName[i].averageRainfall;   

        myArticle.appendChild(myH4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
         myArticle.appendChild(myPara4);

        section.appendChild(myArticle);
        }
        } 
    }
}