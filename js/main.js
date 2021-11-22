const fullDate = new Date();
const day = document.querySelector(".day");
const date = document.querySelector(".date");

function showDate() {
  getDay();
  getDate();
}

// Get current weekday name function
function getDay() {
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const currentDay = weekday[fullDate.getDay()];
  day.innerHTML = currentDay;
}

// Show current date function
function getDate() {
  const currentDate = fullDate.getDate();
  const currentMounth = fullDate.getMonth();
  const currentYear = fullDate.getFullYear();
  date.innerHTML = currentDate + "." + currentMounth + "." + currentYear;
}

showDate();
