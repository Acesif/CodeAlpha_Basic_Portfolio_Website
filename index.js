const d = new Date();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
const weekday = 
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[d.getDay()];

const showDate = document.getElementById("date");
showDate.innerText = `${day} : ${date}-${month}-${year}`;

let checkMouse = () => {
    document.addEventListener('mousemove',(e)=>{
        if(e.pageY>970){
            document.getElementById("nameplate").style["opacity"] = "0";
        }
        else{
            document.getElementById("nameplate").style["opacity"] = "1"; 
        }
    })
}
// document.setInterval(checkMouse(), 1);
window.onscroll = () =>{
    console.log(document.body.scrollHeight);
}