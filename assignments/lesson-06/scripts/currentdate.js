// Input: computer entered
// Process: use the array and .getday to assign the day of the week
// Output: the proper name of the day of the week

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

document.getElementById("actualDate").innerHTML = currentDay + ", " + dayOfMonth + "  "
    currentMonth + ", " + year;
}