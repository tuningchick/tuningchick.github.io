/* thank you Kimi for getting me on the right track with the opening function and
Richard the TA for helping me get my if configuration to work */
function runShowTemples() {
    var section = document.querySelector('#temples');
    var requestURL = 'https://tuningchick.github.io/assignments/termproject/data/templedata.json';
    /* create and open new request */
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    /* set response type to JSON */
    request.responseType = 'json';
    request.send();
    /* get response from server and deal with it */
    request.onload = function() {
        var getTemples = request.response;
        showTemples(getTemples);
    
    /* create and display image, town name, motto, founding, population, annual rainfall */
    function showTemples(jsonObj) {
        var templeName = jsonObj['temples'];
    
        for (var i = 0; i < templeName.length; i++) {
                var myArticle = document.createElement('article');
                var myDiv = document.createElement('div');
                var templeImg = document.createElement('img');
                var myH3 = document.createElement('h3');
                var templeDates = document.createElement('p');
                var address = document.createElement('h5');
                var templeStreet = document.createElement('p');
                var templeCity = document.createElement('p');
                var templeCountry = document.createElement('p');
                var phone = document.createElement('h5');
                var templePhone = document.createElement('p');
                var email = document.createElement('h5');
                var templeEmail = document.createElement('p');

                var simplename = templeName[i].name.replace(/\s/g, '').toLowerCase();
                var templeImgName= 'images/' + simplename + '.jpg';

                /* set up article info */
    
                templeImg.setAttribute('src', templeImgName);
                templeImg.setAttribute('alt', 'Photo of ' + templeName[i]);
                myH3.textContent = templeName[i].name;
                templeDates.textContent = templeName[i].dates;
                address.textContent = "Address: ";
                templeStreet.innerHTML = templeName[i].address.street;
                templeCity.textContent = templeName[i].address.cityStateZip;
                templeCountry.textContent = templeName[i].address.country;
                phone.textContent = "Phone: ";
                templePhone.innerHTML = templeName[i].phone;
                email.textContent = "Email: ";
                templeEmail.textContent = templeName[i].email;

                /* set up div info */

            var servicesList = document.createElement('ul');
            var closuresList = document.createElement('ul');
            var services = templeName[i].services;
            var closures = templeName[i].closures;
            var closuresTitle = document.createElement('h5');
            var servicesTitle = document.createElement('h5');
            var sessionsTitle = document.createElement('h5');
            var sessions = templeName[i].sessions;
            var ordinancesTitle = document.createElement('h5');
            var ordinances = templeName[i].ordinances;
            var historyTitle = document.createElement('h5');
            var templeHistory = document.createElement('p');
            
            
        /* loop to determine services and add them to list */
        for (var s = 0; s < services.length; s++) {
            var servicesAvailable = document.createElement('li');

            servicesAvailable.innerHTML = services[s];
            servicesList.appendChild(servicesAvailable);
        }

        /* loop to determine closures and add them to list */
        for (var c = 0; c < closures.length; c++) {
            var templeClosures = document.createElement('li');

            templeClosures.innerHTML = closures[c];
            closuresList.appendChild(templeClosures);
        }

            historyTitle.textContent = "History: ";
            templeHistory.innerHTML = templeName[i].history;
    
                myArticle.appendChild(templeImg);
    
                myArticle.appendChild(myH3);
                myArticle.appendChild(templeDates);
                myArticle.appendChild(address);
                myArticle.appendChild(templeStreet);
                myArticle.appendChild(templeCity);
                myArticle.appendChild(templeCountry);
                myArticle.appendChild(phone);
                myArticle.appendChild(templePhone);
                myArticle.appendChild(email);
                myArticle.appendChild(templeEmail);

                servicesTitle.textContent = "Services Available: ";
                closuresTitle.textContent = "Temple Closures: ";
                sessionsTitle.textContent = "Session Schedule: ";
                ordinancesTitle.textContent = "Ordinances Schedule: ";

                myDiv.appendChild(servicesTitle);
                myDiv.appendChild(servicesList);
                myDiv.appendChild(closuresTitle);
                myDiv.appendChild(closuresList)
                myDiv.appendChild(sessionsTitle);
                myDiv.appendChild(sessions);
                myDiv.appendChild(ordinancesTitle);
                myDiv.appendChild(ordinances);

                myDiv.appendChild(historyTitle);
                myDiv.appendChild(templeHistory);

                section.appendChild(myArticle);
                section.appendChild(myDiv);
               
        }
        } 
    }
    }