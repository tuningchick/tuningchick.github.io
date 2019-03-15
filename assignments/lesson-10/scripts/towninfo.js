/* thank you Kimi for getting me on the right track with the opening function and
Richard the TA for helping me get my if configuration to work */
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

/* create and display image, town name, motto, founding, population, annual rainfall */
function showTowns(jsonObj) {
    var townName = jsonObj['towns'];

    for (var i = 0; i < townName.length; i++) {
        if ((townName[i].name == "Preston") || (townName[i].name == "Soda Springs") || (townName[i].name == "Fish Haven")) {
            var myArticle = document.createElement('article');
            var myLink = document.createElement('a');
            var myImg = document.createElement('img');
            var myH4 = document.createElement('h4');
            var myH6 = document.createElement('h6');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');

            var simplename = townName[i].name.replace(/\s/g, '').toLowerCase();
            var myImgName= 'images/' + simplename + '.jpg';

            myLink.setAttribute('href', simplename + '.html');
            myImg.setAttribute('src', myImgName);
            myImg.setAttribute('alt', 'Photo of ' + townName[i]);
            myH4.textContent = townName[i].name;
            myH6.textContent = townName[i].motto;
            myPara1.textContent = 'Year Founded: ' + townName[i].yearFounded;
            myPara2.textContent = 'Population: '; + townName[i].currentPopulation;
            myPara3.textContent = 'Annual Rainfall: ' + townName[i].averageRainfall;

            myImg.appendChild(myLink);

            myArticle.appendChild(myImg);
            myArticle.appendChild(myH4);
            myArticle.appendChild(myH6);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            
            section.appendChild(myArticle);
        }
           
    }
    } 
}
}