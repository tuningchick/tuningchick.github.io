function actualDate(){var e=new Date,a=e.getDate(),t=e.getFullYear(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
[e.getDay()],r=["January","February","March","April","May","June","July","August","September","October","November","December"]
[e.getMonth()];document.getElementById("displayDate").innerHTML=n+", "+a+"  "+r+", "+t}function toggleMenu(){document.getElementById("primaryNav").classList.toggle("hide")}
