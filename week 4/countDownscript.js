let seconds = 10;
let timerId = null;
let marks =[20,50,70]

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const result = document.getElementById ('result');

startButton.addEventListener('click',()=> {

    
   if (timerId !==null) return;

   timerId = setInterval (() => {
    seconds--;
    timerDisplay.textContent =seconds;

    if (seconds <=0) {
        clearInterval (timerId);
        timerDisplay.textContent = "Time's UP !";
        result.textContent = marks[1]
        timerId =null;
    }

   },1000) ;
});
