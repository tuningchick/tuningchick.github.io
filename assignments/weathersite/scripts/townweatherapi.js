function runShowTowns(){var s=document.querySelector("#homeTowns"),e=new XMLHttpRequest;
e.open("GET","https://byui-cit230.github.io/weather/data/towndata.json"),e.responseType="json",
e.send(),e.onload=function(){!function(e){for(var t=e.towns,n=0;n<t.length;n++)if
("Preston"==t[n].name||"Soda Springs"==t[n].name||"Fish Haven"==t[n].name)
{var a=document.createElement("article"),o=document.createElement("a"),d=document.createElement("img"),
r=document.createElement("h4"),l=document.createElement("h6"),p=document.createElement("p"),
i=document.createElement("p"),m=document.createElement("p"),c=t[n].name.replace(/\s/g,"").toLowerCase(),
u="images/"+c+".jpg";o.setAttribute("href",c+".html"),d.setAttribute("src",u),
d.setAttribute("alt","Photo of "+t[n]),r.textContent=t[n].name,l.textContent=t[n].motto,
p.textContent="Year Founded: "+t[n].yearFounded,i.textContent="Population: "
+t[n].currentPopulation,m.textContent="Annual Rainfall: "+t[n].averageRainfall,o.appendChild(d),
a.appendChild(o),a.appendChild(r),a.appendChild(l),a.appendChild(p),a.appendChild(i),a.appendChild(m),
s.appendChild(a)}}(e.response)}}