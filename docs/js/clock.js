const clock = document.querySelector("#clock");

function showClock(){
    const time = new Date();
    clock.innerText = `${String(time.getHours()).padStart(2,"0")}:${String(time.getMinutes()).padStart(2,"0")}:${String(time.getSeconds()).padStart(2,"0")}`;
}

function displayClock(){
    setInterval(showClock, 1000);
}
clock.style.color = 'white';
document.addEventListener("DOMContentLoaded", displayClock);