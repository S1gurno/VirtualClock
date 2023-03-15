let remainingSeconds
let intervalId;
const timerSelector = '.timer-result';

function startTimer(){
    const hourValue = parseInt(document.querySelector("#input-hour").value);
    const minuteValue = parseInt(document.querySelector("#input-minute").value);
    const secondValue = parseInt(document.querySelector("#input-second").value);
    remainingSeconds = secondValue + minuteValue*60 + hourValue*3600;
    // console.log(remainingSeconds);
    intervalId = setInterval(updateTimer, 1000);

    // setTimeout(() => {fdfdfdfdf()}, 1000);

    hideElement(".timer-inputs");
    showElement(timerSelector);
    hideElement(".start-btn");
    hideElement(".clock");
    document.documentElement.requestFullscreen();
    document.querySelector(timerSelector).classList.add("focus");
    document.querySelector(".stop-btn").classList.add("hide-stop");
    // exitFullscreen();
}
// startTimer()


function stopTimer() {
    clearInterval(intervalId);
    remainingSeconds = 0

    hideElement(timerSelector);
    showElement(".start-btn");
    showElement(".timer-inputs");
    showElement(".clock");
    document.querySelector(".stop-btn").classList.remove("hide-stop");
    document.exitFullscreen();
}

// Math.floor()

function updateTimer(){
    if (remainingSeconds > 0){
        remainingSeconds -= 1;
        
        let remainingHours = Math.floor(remainingSeconds / 3600);
        // (remainingTime % 3600) / 60;
        let remainingMinutes = Math.floor(remainingSeconds % 3600 / 60);
        let remainSeconds = remainingSeconds % 60;
        document.querySelector(".timer-result").textContent = `${remainingHours.toString().padStart(2,"0")} : ${remainingMinutes.toString().padStart(2,"0")} : ${remainSeconds.toString().padStart(2,"0")}`
        
    }
    else if (remainingSeconds >= 0){
        setTimeout(stopTimer, 2000)
    }
}

function hideElement(element){
    document.querySelector(element).classList.add("hide")
}

function showElement(element){
    document.querySelector(element).classList.remove("hide")
}

// объект_который_слушаем.addEventListener('событие_которое_слушаем', название_функции_которая_выполнится_когда_сработает_событие);
document.querySelector('.start-btn').addEventListener('click', startTimer);
document.querySelector('.stop-btn').addEventListener("click", stopTimer);
document.querySelector('.timer').addEventListener('keydown', (event) => {
    // console.log('event.keyCode: ', event.keyCode);
    // console.log('event.key: ', event.key);
    
    if (event.keyCode === 13){
        startTimer()
    }
})



// 1. Создать функции, которые будут показывать и скрывать элементы, селекторы которых передаем аргументами. ✅
// Напирмер: showElement('.start-btn');
// 2. Стилизовать вывод таймера (timer-result) так же, как и сам таймер. ✅
// 3. Сделать так, чтобы при нажатии на кнопку "старт" приложение разворачивалось на весь экран, все элементы скрывались, а сам таймер перемещался в центр и выводился большими цифрами. ❌
