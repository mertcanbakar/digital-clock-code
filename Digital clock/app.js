let getHour = document.querySelector("#hours");
let getMinute = document.querySelector("#minutes");

setInterval(function() {clockFunc()}, 1000);

function clockFunc(){
let getSecond = document.querySelector("#seconds");
let getDate = document.querySelector("#date");

let nowDate = new Date;
let hours = (nowDate.getHours());
let minutes = (nowDate.getMinutes());
let seconds = (nowDate.getSeconds());
let date = (nowDate.getDate()) + "/" + (nowDate.getMonth() + 1) + "/" + (nowDate.getFullYear());
    
getHour.innerHTML = hours < 10 ? "0" + hours : hours;
getMinute.innerHTML = minutes < 10 ? "0" + minutes : minutes;
getSecond.innerHTML = seconds < 10 ? "0" + seconds : seconds;
getDate.innerHTML = date;
}



