var toptime = document.getElementById("top1");
var maintime = document.getElementById("time1");
var dayy = document.getElementById("day1");

var time = setInterval(function(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    time = new Date();
    var day = time.getDay();
    var hour = String(time.getHours()).padStart(2, '0');
    var min = String(time.getMinutes()).padStart(2, '0');
    var sec = String(time.getSeconds()).padStart(2, '0');

    toptime.innerHTML = hour + ':' + min + ':' + sec;
    maintime.innerHTML = hour + ':' + min;
    dayy.innerHTML = days[day]; 
}, 1000);