const d = new Date();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
const weekday = 
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[d.getDay()];

const showDate = document.getElementById("date");
showDate.innerText = `${day} : ${date}-${month}-${year}`;