function updateTime(){
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    hours.textContent = hour.toString().padStart(2,"0");
    minutes.textContent = minute.toString().padStart(2,"0");
    seconds.textContent = second.toString().padStart(2,"0");
}


setInterval(updateTime, 1000);