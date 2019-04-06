function outputConditions(e){var t=document.querySelector("#weatherSummary"),n=document.querySelector("#currenttemp");
let a=new XMLHttpRequest;a.open("GET","https://api.openweathermap.org/data/2.5/weather?id="+e+"&units=imperial&APPID=93f7b5fbca8fc6183352adb88e36039d",!0)
,a.responseType="json",a.send(),a.onload=function(){var e=a.response;console.log(e);var i,r,d=e.weather[0].main,
p=parseFloat(e.main.temp),o=e.main.humidity,l=parseFloat(e.wind.speed),c=(r=l,35.74+.6215*(i=p)-35.75*Math.pow(r,.16)+.4275*i*Math.pow(r,.16));
var m=document.createElement("article"),u=document.createElement("p"),h=document.createElement("p"),s=document.createElement("p"),
C=document.createElement("p"),w=document.createElement("p");u.innerHTML="Currently: "+d,h.innerHTML="Temp: "+p+"&deg; F",s.innerHTML="Humidity: "+o+"%",
C.innerHTML="Wind: "+l+"mph",w.innerHTML=p>50||l<3?"Wind Chill: --":"Wind Chill: "+c.toFixed(0)+"&deg; F",m.appendChild(u),m.appendChild(h),m.appendChild(s),
m.appendChild(C),m.appendChild(w),t.appendChild(m);p=parseFloat(e.main.temp).toFixed(0);var E="https://openweathermap.org/img/w/"+e.weather[0].icon+".png",
g=document.createElement("article"),T=document.createElement("h5"),f=(h=document.createElement("div"),document.createElement("img")),y=document.createElement("p");
T.innerHTML="Current Temp:",h.innerHTML=p+"&deg;F",f.setAttribute("src",E),f.setAttribute("alt","weather icon"),y.innerHTML=e.weather[0].description,g.appendChild(T),
g.appendChild(h),g.appendChild(f),g.appendChild(y),n.appendChild(g)}}function outputFiveDay(e){var t=document.querySelector("#forecastTable");let n=new XMLHttpRequest;
n.open("GET","https://api.openweathermap.org/data/2.5/forecast?id="+e+"&units=imperial&APPID=93f7b5fbca8fc6183352adb88e36039d",!0),n.responseType="json",n.send(),n.onload=function()
{var e=n.response;console.log(e);var a=document.createElement("tr"),r=[(new Date).getDay()];for(day=[],i=0;i<5;i++){day[i]=document.createElement("th");
day[i].innerHTML=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"][r],++r>6&&(r=0),a.appendChild(day[i])}t.appendChild(a);var d=document.createElement("tr"),
p=[],o=0;for(i=0;i<e.list.length;i++){-1!=e.list[i].dt_txt.search("18:00:00")&&(p[o]=document.createElement("td"),p[o].innerHTML=e.list[i].main.temp_max.toFixed(0)+"&deg; F",d.appendChild(p[o]),o++)}
t.appendChild(d);var l=document.createElement("tr"),c=[],m=(o=0,[]);for(i=0;i<e.list.length;i++){if(-1!=e.list[i].dt_txt.search("18:00:00")){c[o]=document.createElement("td"),
m=document.createElement("img");var u="https://openweathermap.org/img/w/"+e.list[i].weather[0].icon+".png";m.setAttribute("src",u),m.setAttribute("alt","weather icon"),
c[o].appendChild(m),l.appendChild(c[o]),o++}}t.appendChild(l)}}