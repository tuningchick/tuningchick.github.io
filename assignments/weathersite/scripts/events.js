function runEvents(u){var s=document.querySelector("#upcoming"),e=new XMLHttpRequest;
e.open("GET","https://byui-cit230.github.io/weather/data/towndata.json"),e.responseType="json",
e.send(),e.onload=function(){!function(e){for(var n=e.towns,t=0;t<n.length;t++)if(n[t].name==u)
{for(var o=n[t].events,a=document.createElement("ul"),r=0;r<o.length;r++)
{var i=document.createElement("li");i.innerHTML=o[r],a.appendChild(i)}s.appendChild(a)}}(e.response)}}