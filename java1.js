const startButton = document.querySelector(".start");
const countdownContainer = document.querySelector(".time");
const body = document.querySelector(".body");
const pomodoro = document.querySelector(".a");
const shortbreak = document.querySelector(".b");
const longbreak = document.querySelector(".c");
const input = document.querySelector(".change1");
const close = document.querySelector(".bi-x-lg");
const setting = document.querySelector(".settingframe");
const setting1 = document.querySelector(".b-but2");
const input2 = document.querySelector(".change2");
const input3 = document.querySelector(".change3");
const tb = document.querySelector(".tb");
const yes = document.querySelector(".yess");
const no = document.querySelector(".no");
const task1 = document.querySelector(".task1");
const option = document.querySelector(".option");
const cancel = document.querySelector(".no1");
const inputnewtask = document.querySelector(".newtaskdetail");
const addtask = document.querySelector(".addtask");
let countdownInterval = null;
let minutesChosen1 = input.valueAsNumber;
let totalTimeInSeconds = {value: minutesChosen1*60};
let minutesChosen2 = input2.valueAsNumber;
let minutesChosen3 = input3.valueAsNumber;
let slide = 1;
let minutesChosen = minutesChosen1;
let temp = slide;
let container;
let dem = 1;

startButton.addEventListener("click", function() {
  if (startButton.textContent === 'START') {
    startButton.innerHTML = 'STOP';
    if (totalTimeInSeconds.value === 0) {
      totalTimeInSeconds.value = minutesChosen * 60;
    }
    startCountdown(totalTimeInSeconds);
  } else {
    startButton.innerHTML = 'START';
    clearInterval(countdownInterval);
  }
});

function startCountdown(totalSeconds) {
  if (slide == temp) {
     if (slide === 1) {
      totalSeconds.value = input.valueAsNumber*60;
    }
  
    else if (slide === 2) {
      totalSeconds.value = input2.valueAsNumber*60;
    }
    else if (slide === 3) {
      totalSeconds.value = input3.valueAsNumber*60;
    }
  }
  countdownInterval = setInterval(function() {
    let displayMinutes = Math.floor(totalSeconds.value / 60);
    let displaySeconds = totalSeconds.value % 60;
    displayMinutes = displayMinutes < 10 ? "0" + displayMinutes : displayMinutes;
    displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;
    countdownContainer.innerHTML = displayMinutes + ":" + displaySeconds;

    totalSeconds.value--;
    if (totalSeconds.value < 0) {
      clearInterval(countdownInterval);
      body.style.backgroundColor = "rgb(56, 133, 138)";
      countdownContainer.innerHTML = "05:00";
      totalTimeInSeconds.value = 5 * 60;
      minutesChosen = 5;
      startButton.style.color = "rgb(56, 133, 138)";
      startButton.innerHTML = 'START';
    }
  }, 1000);
}
yes.addEventListener("click", function() {
  slide = temp;
  if (slide == 1) {
    minutesChosen = input.valueAsNumber;
    totalTimeInSeconds.value = minutesChosen*60;
    countdownContainer.innerHTML = minutesChosen < 10 ? "0" + `${minutesChosen}:00` : `${minutesChosen}:00`;
    body.style.backgroundColor = "rgb(186, 73, 73)";
    startButton.style.color = "rgb(186, 73, 73)";
    startButton.innerHTML = 'START';
  }
  else if(slide == 2) {
    minutesChosen = input2.valueAsNumber;
    totalTimeInSeconds.value = minutesChosen*60;
    countdownContainer.innerHTML = minutesChosen < 10 ? "0" + `${minutesChosen}:00` : `${minutesChosen}:00`;
    body.style.backgroundColor = "rgb(56, 133, 138)";
    startButton.style.color = "rgb(56, 133, 138)";
    startButton.innerHTML = 'START';
  }
  else if (slide == 3) {
    minutesChosen = input2.valueAsNumber;
    totalTimeInSeconds.value = minutesChosen*60;
    countdownContainer.innerHTML = minutesChosen < 10 ? "0" + `${minutesChosen}:00` : `${minutesChosen}:00`;
    body.style.backgroundColor = "rgb(56, 133, 138)";
    startButton.style.color = "rgb(56, 133, 138)";
    startButton.innerHTML = 'START';
  }
  tb.style.display = "none";
})

no.addEventListener("click", function() {
    tb.style.display = "none";
    startButton.innerHTML = 'START';
})

pomodoro.addEventListener("click", function() {  
  if (minutesChosen*60 != totalTimeInSeconds.value) {
    tb.style.display = "block";
    clearInterval(countdownInterval);
    temp = 1;
  }
  else {
    slide = 1;
    clearInterval(countdownInterval);
    minutesChosen = input.valueAsNumber;
    totalTimeInSeconds.value = minutesChosen*60;
    countdownContainer.innerHTML = minutesChosen < 10 ? "0" + `${minutesChosen}:00` : `${minutesChosen}:00`;
    countdownContainer.innerHTML = minutesChosen < 1 ? "00:" + `${totalTimeInSeconds.value}` : `${minutesChosen}:00`; 
    body.style.backgroundColor = "rgb(186, 73, 73)";                                        
    startButton.style.color = "rgb(186, 73, 73)";
    startButton.innerHTML = 'START';         
  }
});

shortbreak.addEventListener("click", function() {
  if (minutesChosen*60 != totalTimeInSeconds.value) {
    tb.style.display = "block";
    clearInterval(countdownInterval);
    temp = 2;
  }
  else {
    slide = 2;
    clearInterval(countdownInterval);
    minutesChosen = input2.valueAsNumber;
    totalTimeInSeconds.value = minutesChosen*60;
    countdownContainer.innerHTML = minutesChosen < 1 ? "00:" + `${totalTimeInSeconds.value}` : (minutesChosen < 10 ? "0" + `${minutesChosen}:00` : `${minutesChosen}:00`); 
    body.style.backgroundColor = "rgb(56, 133, 138)";
    startButton.style.color = "rgb(56, 133, 138)";
    startButton.innerHTML = 'START';
  }

});

longbreak.addEventListener("click", function() {
  if (minutesChosen*60 != totalTimeInSeconds.value) {
    tb.style.display = "block";
    clearInterval(countdownInterval);
    temp = 3;
  }
  else {
    slide = 3;
    clearInterval(countdownInterval);
    minutesChosen = input3.valueAsNumber;
    totalTimeInSeconds.value = minutesChosen*60;
    countdownContainer.innerHTML = minutesChosen < 1 ? "00:" + `${totalTimeInSeconds.value}` : (minutesChosen < 10 ? "0" + `${minutesChosen}:00` : `${minutesChosen}:00`);  
    body.style.backgroundColor = "rgb(57, 112, 151)";
    startButton.style.color = "rgb(57, 112, 151)";
    startButton.innerHTML = 'START';
  }
});

close.addEventListener("click", function() {
  setting.style.display = "none";
  if (slide === 1) {
    minutesChosen = input.valueAsNumber;
  }
  else if (slide === 2) {
    minutesChosen = input2.valueAsNumber;
  }
  else if (slide === 3) {
    minutesChosen = input3.valueAsNumber;
  }
  totalTimeInSeconds.value = minutesChosen*60;
  countdownContainer.innerHTML = minutesChosen < 1 ? "00:" + (totalTimeInSeconds.value < 10 ? "0" + `${totalTimeInSeconds.value}` : totalTimeInSeconds.value) : (minutesChosen < 10 ? "0" + `${minutesChosen}:00` : `${minutesChosen}:00`);  
});

setting1.addEventListener("click", function() {
  setting.style.display = "block";
});
 
addtask.addEventListener("click", function() {
  task1.style.display = "block";
})

cancel.addEventListener("click", function() {
  task1.style.display = "none";
})




