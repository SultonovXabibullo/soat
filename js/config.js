function timeShower() {
    let timeNow = new Date();



    document.querySelector(".hours").textContent = timeNow.getHours()
    document.querySelector(".minuts").textContent = timeNow.getMinutes()
    document.querySelector(".secunds").textContent = timeNow.getSeconds()
}
timeShower();

setInterval(function () {
    timeShower();
}, 1000)