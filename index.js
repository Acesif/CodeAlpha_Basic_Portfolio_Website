const d = new Date();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
const weekday = 
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[d.getDay()];

const showDate = document.getElementById("date");
showDate.innerText = `${day} : ${date}-${month}-${year}`;

let nameplate = document.getElementById("nameplate");

let ret = document.getElementById("return");

window.onscroll = () => {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    ret.style.display = "block";
    nameplate.style.opacity = "0";
  } else {
    ret.style.display = "none";
    nameplate.style.opacity = "1";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
} 
ret.addEventListener('click',topFunction);
