// Input: computer entered
// Process: use .getDate and two arrays to compile the date 
// Output: date in this format: day, date month, year

function actualDate() {
    var d = new Date();
    var dayOfMonth = d.getDate();
    var year = d.getFullYear();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    var currentDay = weekday[d.getDay()];
    var currentMonth = month[d.getMonth()];

document.getElementById("displayDate").innerHTML = currentDay + ", " + dayOfMonth + "  "
    currentMonth + ", " + year;
}