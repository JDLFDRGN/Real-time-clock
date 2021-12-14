let seconds=document.querySelector('.second');
let minutes=document.querySelector('.minute');
let hours=document.querySelector('.hour');
let straightTheNum=document.querySelectorAll('h2');
let num=document.querySelectorAll('.number');
let time, sec, min, hr, secToDeg, minToDeg, hrToDeg, numDeg=0;
window.addEventListener('load',()=>{
   realTime();
})
function realTime(){
    setTime();
    convertTimetoDeg();
    setTimeout(realTime,1000)
}
function setTime(){
    time=new Date();
    sec=time.getSeconds();
    min=time.getMinutes();
    hr=time.getHours();
}
function convertTimetoDeg(){
    secToDeg=`rotate(${sec*6}deg)`;
    minToDeg=`rotate(${min*6}deg)`;
    hrToDeg=`rotate(${hr*30}deg)`;
    if(hr>12)hr-=12;
    seconds.style.setProperty('transform',secToDeg);
    minutes.style.setProperty('transform',minToDeg);
    hours.style.setProperty('transform',hrToDeg);
}
for(i in num){
    num[i].style.transform=`rotate(${numDeg}deg)`;
    straightTheNum[i].style.transform=`rotate(${-numDeg}deg)`;
    numDeg+=30;
}
