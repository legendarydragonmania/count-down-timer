const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")

const futureDate = new Date(2022, 3, 24, 11, 30, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes= futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();
let weekday = futureDate.getDay();
weekday = weekdays[weekday]
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours} : ${minutes}am`

function countDown() {
    const currentDate = new Date();
    const totalsecs = (futureDate - currentDate)/1000;

    const seconds = formatTime(Math.floor(totalsecs%60));
    const minutes = formatTime(Math.floor((totalsecs/60)%60));
    const hours = formatTime(Math.floor((totalsecs/3600)%24))
    const days = formatTime(Math.floor(totalsecs/3600/24));
    const array = [days, hours, minutes, seconds]
    items.forEach((item, index) => {
        item.textContent = array[index]
    })
}
countDown();

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000)