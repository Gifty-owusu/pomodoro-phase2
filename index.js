// Variable Declarations
let TimeDisplay = document.getElementById("minutes");
let PomodoroInputValue = document.getElementById("pomodoro-input-text");
let shortBreakInputValue = document.getElementById("short_break-input-text");
let longBreakInputValue = document.getElementById("long_break-input-text");
let pomodoroOptionSelected = document.getElementById("pomodoro-option");
let shortbreakOptioonSelected = document.getElementById("shortBreak-option");
let longbreakOptioonSelected = document.getElementById("longBreak-option");
let startButton = document.getElementById("start");
let bodytag = document.querySelector('body');
let fontOneOption = document.getElementById("fontOne");
let fontTwoOption = document.getElementById("fontTwo");
let fontThreeOption = document.getElementById("fontThree");
let pauseButton = document.getElementById('pause');
let restartButton = document.getElementById('restart');
let settingsDashboard = document.getElementById("settings");
let colorOneCheckIcon = document.getElementById("path1");
let colorTwoCheckIcon = document.getElementById("path2");
let colorThreeCheckIcon = document.getElementById("path3");
let colorOneOption = document.getElementById("color-one");
let colorTwoOption = document.getElementById("color-two");
let colorThreeOption = document.getElementById("color-three");
let applyButton = document.getElementById("apply");
let  progressPath = document.getElementById("progress-path");
let isTimerRunning = false;

// Function for starting the timer
const startTimer = () => {
  if (isTimerRunning) {
    return;
  }
    isTimerRunning = true;
    //startButton.style.pointerEvents = "none";
    startButton.style.display = "none";
    pauseButton.style.display = "block";
    restartButton.style.dispaly = 'none';
    
    const minutes = parseInt(TimeDisplay.innerText.substr(0, 2));
    const seconds = parseInt(TimeDisplay.innerText.substr(3, 2));
    let durationInSeconds = minutes * 60 + seconds;
  
   
    const circumference = 2 * Math.PI * (progressPath.getAttribute("r") - 6);
    let progress = 0;
  
    countdownInterval = setInterval(() => {
      updateTimeDisplay(Math.floor(durationInSeconds / 60), durationInSeconds % 60);
      durationInSeconds--;
  
      progress = 100- (durationInSeconds / (minutes * 60 + seconds)) * 100;
      progressPath.style.strokeDasharray = `${circumference}`;
      progressPath.style.strokeDashoffset = `${(circumference * progress) / 100}`;
  
      if (durationInSeconds < 0) {
        clearInterval(countdownInterval);
        isTimerRunning = false;
        startButton.style.pointerEvents = "auto";
        startButton.style.display = "block";
        pauseButton.style.display = 'none';
        restartButton.style.display = 'none';
        TimeDisplay.innerHTML = "00:00";
        progressPath.style.strokeDasharray = "0"; // Set the stroke dasharray to 0 to hide the progress indicator
        setTimeout(() => {
          progressPath.style.strokeDasharray = '`${circumference}`'; // Show the progress indicator again
        }, 1000);
      }
    }, 1000);
  };
    // function for pausing the timer and progress indicator   
  const pauseTimer = () => {
  clearInterval(countdownInterval);
  isTimerRunning = false;
  startButton.style.pointerEvents = "auto";
  pauseButton.style.display = 'none';
  restartButton.style.display = 'block';
  };

  const restartTimer = () => {
    clearTimeout(countdownInterval);
    restartButton.style.display = 'none';
    startButton.style.display = 'block';
    TimeDisplay.innerHTML = "00:00";
    startTimer();

    progress = 0; // Reset progress to 0
  };

    // Add event listener to the "START" button
    startButton.addEventListener("click", startTimer);

    //Add event listener to the "PAUSE" button
    pauseButton.addEventListener("click", pauseTimer);
  
    //Add event listener to the "PAUSE" button
    restartButton.addEventListener("click", restartTimer);

let countdownInterval; // Global variable to hold the countdown interval

// Function for closing the settings dashboard
const close = () => {
  settingsDashboard.style.display = "none";
};
document.querySelector("#close_icon").addEventListener("click", close);

// Function for displaying the settings dashboard
const display = () => {
  settingsDashboard.style.display = "block";
};
document.querySelector("#settings-icon").addEventListener("click", display);

// Input values
let pomodoroCount = 0;
const pomoIncrementOperator = () => {
  PomodoroInputValue.value = ++pomodoroCount;
};
const pomoDecrementOperator = () => {
  if (pomodoroCount > 0) {
    PomodoroInputValue.value = --pomodoroCount;
  }
};

let shortBreakCount = 0;
const shortIncrementOperator = () => {
  shortBreakInputValue.value = ++shortBreakCount;
};
const shortDecrementOperator = () => {
  if (shortBreakCount > 0) {
    shortBreakInputValue.value = --shortBreakCount;
  }
};

let longBreakCount = 0;
const longIncrementOperator = () => {
  longBreakInputValue.value = ++longBreakCount;
};
const longDecrementOperator = () => {
  if (longBreakCount > 0) {
    longBreakInputValue.value = --longBreakCount;
  }
};

// Add event listeners
document
  .getElementById("pomodoro-increase")
  .addEventListener("click", pomoIncrementOperator);
document
  .getElementById("pomodoro-decrease")
  .addEventListener("click", pomoDecrementOperator);
document
  .getElementById("short-break-increase")
  .addEventListener("click", shortIncrementOperator);
document
  .getElementById("short-break-decrease")
  .addEventListener("click", shortDecrementOperator);
document
  .getElementById("long-break-increase")
  .addEventListener("click", longIncrementOperator);
document
  .getElementById("long-break-decrease")
  .addEventListener("click", longDecrementOperator);

  const apply = () => {
    // Getting and displaying user timer preference
    if (localStorage.getItem("pomodoroSelected") == "pomodoro-selected") {
      window.progressValue = PomodoroInputValue.value;
      updateTimeDisplay(parseInt(PomodoroInputValue.value), 0);
    } else if (localStorage.getItem("shortBreakSelected") == "short-break-selected") {
      window.progressValue = shortBreakInputValue.value;
      updateTimeDisplay(parseInt(shortBreakInputValue.value), 0);
    } else if (localStorage.getItem("longBreakSelected") == "long-break-selected") {
      window.progressValue = longBreakInputValue.value;
      updateTimeDisplay(parseInt(longBreakInputValue.value), 0);
    }
    // Close the dashboard
    close();
    console.log("Script loaded");
  };
  
  applyButton.addEventListener("click", apply);
  
const updateTimeDisplay = (minutes, seconds) => {
  const formattedTime =
    minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  TimeDisplay.innerText = formattedTime;
};

const initialPomodoroColor = () =>{
  pomodoroOptionSelected.style.backgroundColor = "#F87070";
  pomodoroOptionSelected.style.color = "#1E213F";
  shortbreakOptioonSelected.style.backgroundColor = "transparent";
  shortbreakOptioonSelected.style.color = "#fff";
  longbreakOptioonSelected.style.backgroundColor = "transparent";
  longbreakOptioonSelected.style.color = "#fff";
}

const pomodoroColorSelection = () =>{
if (window.colorOne == "#F87070"){
  pomodoroOptionSelected.style.backgroundColor = "#F87070";
  pomodoroOptionSelected.style.color = "#1E213F";
  shortbreakOptioonSelected.style.backgroundColor = "transparent";
  shortbreakOptioonSelected.style.color = "#fff";
  longbreakOptioonSelected.style.backgroundColor = "transparent";
  longbreakOptioonSelected.style.color = "#fff";
  
}else if(window.colorTwo == "#70F3F8"){
  pomodoroOptionSelected.style.backgroundColor = " #70F3F8";
  pomodoroOptionSelected.style.color = "#1E213F";
  shortbreakOptioonSelected.style.backgroundColor = "transparent";
  shortbreakOptioonSelected.style.color = "#fff";
  longbreakOptioonSelected.style.backgroundColor = "transparent";
  longbreakOptioonSelected.style.color = "#fff";
  
}else if(window.colorThree == "#D881F8"){
  pomodoroOptionSelected.style.backgroundColor = " #D881F8";
  pomodoroOptionSelected.style.color = "#1E213F";
  shortbreakOptioonSelected.style.backgroundColor = "transparent";
  shortbreakOptioonSelected.style.color = "#fff";
  longbreakOptioonSelected.style.backgroundColor = "transparent";
  longbreakOptioonSelected.style.color = "#fff";
}
};

const pomodoroOptionOnclick = () => {
  // Setting pomodoro button to get the values from the pomodoro input using local storage
  localStorage.setItem("pomodoroSelected", "pomodoro-selected");
  localStorage.setItem("shortBreakSelected", "null");
  localStorage.setItem("longBreakSelected", "null");

  // Update the timer display immediately
  updateTimeDisplay(parseInt(PomodoroInputValue.value), 0);
  // identifier for active button 
     window.btnOneActive = "true";
  // overwriting the other buttons    
      window.btnTwoActive = "null";
      window.btnThreeActive = "null";
      initialPomodoroColor();
      pomodoroColorSelection();
};

const initialShortBreakColor = () =>{
  shortbreakOptioonSelected.style.backgroundColor = "#F87070";
  shortbreakOptioonSelected.style.color = "#1E213F";
  pomodoroOptionSelected.style.backgroundColor = "transparent";
  pomodoroOptionSelected.style.color = "#fff";
  longbreakOptioonSelected.style.backgroundColor = "transparent";
  longbreakOptioonSelected.style.color = "#fff";
}

const shortBreakColorSelection = () =>{
  if (window.colorOne == "#F87070"){
    shortbreakOptioonSelected.style.backgroundColor = "#F87070";
    shortbreakOptioonSelected.style.color = "#1E213F";
    pomodoroOptionSelected.style.backgroundColor = "transparent";
    pomodoroOptionSelected.style.color = "#fff";
    longbreakOptioonSelected.style.backgroundColor = "transparent";
    longbreakOptioonSelected.style.color = "#fff";
    
  }else if(window.colorTwo == "#70F3F8"){
    shortbreakOptioonSelected.style.backgroundColor = " #70F3F8";
    shortbreakOptioonSelected.style.color = "#1E213F";
    pomodoroOptionSelected.style.backgroundColor = "transparent";
    pomodoroOptionSelected.style.color = "#fff";
    longbreakOptioonSelected.style.backgroundColor = "transparent";
    longbreakOptioonSelected.style.color = "#fff";
    
  }else if(window.colorThree == "#D881F8"){
    shortbreakOptioonSelected.style.backgroundColor = " #D881F8";
    shortbreakOptioonSelected.style.color = "#1E213F";
    pomodoroOptionSelected.style.backgroundColor = "transparent";
    pomodoroOptionSelected.style.color = "#fff";
    longbreakOptioonSelected.style.backgroundColor = "transparent";
    longbreakOptioonSelected.style.color = "#fff";
  }
  };

const shortbreakOptionOnclick = () => {
  // Setting short break button to get the values from the pomodoro input using local storage
  localStorage.setItem("shortBreakSelected", "short-break-selected");
  localStorage.setItem("pomodoroSelected", "null");
  localStorage.setItem("longBreakSelected", "null");

  // Update the timer display immediately
  updateTimeDisplay(parseInt(shortBreakInputValue.value), 0);
  initialShortBreakColor();
  shortBreakColorSelection();
  // identifier for active button 
      window.btnTwoActive = "true";
  // overwriting the other buttons    
      window.btnOneActive = "null";
      window.btnThreeActive = "null";
};

const initialLongBreakColor = () =>{
    longbreakOptioonSelected.style.backgroundColor = "#F87070";
    longbreakOptioonSelected.style.color = "#1E213F";
    pomodoroOptionSelected.style.backgroundColor = "transparent";
    pomodoroOptionSelected.style.color = "#fff";
    shortbreakOptioonSelected.style.backgroundColor = "transparent";
    shortbreakOptioonSelected.style.color = "#fff";
}

const longBreakColorSelection = () =>{
  if (window.colorOne == "#F87070"){
    longbreakOptioonSelected.style.backgroundColor = "#F87070";
    longbreakOptioonSelected.style.color = "#1E213F";
    pomodoroOptionSelected.style.backgroundColor = "transparent";
    pomodoroOptionSelected.style.color = "#fff";
    shortbreakOptioonSelected.style.backgroundColor = "transparent";
    shortbreakOptioonSelected.style.color = "#fff";
    
  }else if(window.colorTwo == "#70F3F8"){
    longbreakOptioonSelected.style.backgroundColor = " #70F3F8";
    longbreakOptioonSelected.style.color = "#1E213F";
    pomodoroOptionSelected.style.backgroundColor = "transparent";
    pomodoroOptionSelected.style.color = "#fff";
    shortbreakOptioonSelected.style.backgroundColor = "transparent";
    shortbreakOptioonSelected.style.color = "#fff";
    
  }else if(window.colorThree == "#D881F8"){
    longbreakOptioonSelected.style.backgroundColor = " #D881F8";
    longbreakOptioonSelected.style.color = "#1E213F";
    pomodoroOptionSelected.style.backgroundColor = "transparent";
    pomodoroOptionSelected.style.color = "#fff";
    shortbreakOptioonSelected.style.backgroundColor = "transparent";
    shortbreakOptioonSelected.style.color = "#fff";
  }
  };

const longbreakOptionOnclick = () => {
  // Setting short break button to get the values from the pomodoro input using local storage
  localStorage.setItem("longBreakSelected", "long-break-selected");
  localStorage.setItem("pomodoroSelected", "null");
  localStorage.setItem("shortBreakSelected", "null");

  // Update the timer display immediately
  updateTimeDisplay(parseInt(longBreakInputValue.value), 0);
  initialLongBreakColor();
  longBreakColorSelection();

   // identifier for active buttons
      window.btnThreeActive = "true";
   // overwriting the other active button
       window.btnOneActive = "null";
       window.btnTwoActive = "null";
};

// Add event listeners
pomodoroOptionSelected.addEventListener("click", pomodoroOptionOnclick);
shortbreakOptioonSelected.addEventListener("click", shortbreakOptionOnclick);
longbreakOptioonSelected.addEventListener("click", longbreakOptionOnclick);


const fontOneSelected = () => {
  bodytag.classList.add("font-option-one");
  fontOneOption.classList.add("selected");
  bodytag.classList.remove("font-option-two");
  bodytag.classList.remove("font-option-three");
  fontThreeOption.classList.remove("selected");
  fontTwoOption.classList.remove("selected");
};

fontOneOption.addEventListener("click", fontOneSelected);


const fontTwoSelected = () =>{

    bodytag.classList.remove("font-option-one");
    bodytag.classList.add("font-option-two");
    bodytag.classList.remove("font-option-three");
    fontOneOption.classList.remove("selected");
    fontTwoOption.classList.add("selected");
    fontThreeOption.classList.remove("selected");
    TimeDisplay.classList.add("sizeTwo");
    TimeDisplay.classList.remove("sizeThree");
    startButton.classList.add("font-option-two");
    pauseButton.classList.add("font-option-two");
    restartButton.classList.add("font-option-two");
    startButton.classList.remove("font-option-three");
    pauseButton.classList.remove("font-option-three");
    restartButton.classList.remove("font-option-three");
}
fontTwoOption.addEventListener('click', fontTwoSelected);

const fontThreeSelected = () =>{
    bodytag.classList.remove("font-option-one");
    bodytag.classList.remove("font-option-two");
    bodytag.classList.add("font-option-three");
    fontOneOption.classList.remove("selected");
    fontTwoOption.classList.remove("selected");
    fontThreeOption.classList.add("selected");
    TimeDisplay.classList.add("sizeThree");
    TimeDisplay.classList.remove("sizeTwo");
    startButton.classList.add("font-option-three");
    pauseButton.classList.add("font-option-three");
    restartButton.classList.add("font-option-three");
    startButton.classList.remove("font-option-two");
    pauseButton.classList.remove("font-option-two");
    restartButton.classList.remove("font-option-two");
}
fontThreeOption.addEventListener('click', fontThreeSelected);

const colorOneSelected = () => {
  colorOneCheckIcon.style.visibility = 'visible';
  colorTwoCheckIcon.style.visibility = 'hidden';
  colorThreeCheckIcon.style.visibility = 'hidden';
  progressPath.classList.add("firstColor");
  progressPath.classList.remove("secondColor");
  progressPath.classList.remove("thirdColor");
  applyButton.classList.add("firstColor");
  applyButton.classList.remove("secondColor");
  applyButton.classList.remove("thirdColor");
  pomodoroOptionSelected.classList.add("firstColor");
  pomodoroOptionSelected.classList.remove("secondColor");
  pomodoroOptionSelected.classList.remove("thirdColor");
  shortbreakOptioonSelected.classList.add("firstColor");
  shortbreakOptioonSelected.classList.remove("secondColor");
  shortbreakOptioonSelected.classList.remove("thirdColor");
  longbreakOptioonSelected.classList.add("firstColor");
  longbreakOptioonSelected.classList.remove("secondColor");
  longbreakOptioonSelected.classList.remove("thirdColor");
 
  // identifier for active theme or background color
     window.colorOne = "#F87070";
  // overwriting the identifier for  active theme or background color  
      window.colorTwo = "null";
      window.colorThree = "null";
      // color change for mouse hover state of buttons
      startButton.addEventListener("mouseover", () => {
        startButton.style.color = "#F87070";
      });
      startButton.addEventListener("mouseout", () => {
        startButton.style.color = "#D7E0FF";
      });
      pauseButton.addEventListener("mouseover", () => {
        pauseButton.style.color = "#F87070";
      });
      pauseButton.addEventListener("mouseout", () => {
        pauseButton.style.color = "#D7E0FF";
      });
      restartButton.addEventListener("mouseover", () => {
        restartButton.style.color = "#F87070";
      });
      restartButton.addEventListener("mouseout", () => {
        restartButton.style.color = "#D7E0FF";
      });
}
colorOneOption.addEventListener('click', colorOneSelected);

const colorTwoSelected = () => {
  colorOneCheckIcon.style.visibility = 'hidden';
  colorTwoCheckIcon.style.visibility = 'visible';
  colorThreeCheckIcon.style.visibility = 'hidden';
  progressPath.classList.add("secondColor");
  progressPath.classList.remove("firstColor");
  progressPath.classList.remove("thirdColor");
  applyButton.classList.add("secondColor");
  applyButton.classList.remove("firstColor");
  applyButton.classList.remove("thirdColor");
  pomodoroOptionSelected.classList.add("secondColor");
  pomodoroOptionSelected.classList.remove("firstColor");
  pomodoroOptionSelected.classList.remove("thirdColor");
  shortbreakOptioonSelected.classList.add("secondColor");
  shortbreakOptioonSelected.classList.remove("firstColor");
  shortbreakOptioonSelected.classList.remove("thirdColor");
  longbreakOptioonSelected.classList.add("secondColor");
  longbreakOptioonSelected.classList.remove("firstColor");
  longbreakOptioonSelected.classList.remove("thirdColor");

   // identifier for active theme or background color
      window.colorTwo = "#70F3F8";
   // overwriting the identifier for  active theme or background color 
       window.colorOne = "null";
       window.colorThree = "null";

       // logic forr setting the current active theme to the active color "#D881F8"
      if (window.btnOneActive == "true"){
        pomodoroOptionOnclick();
      }else if (window.btnTwoActive == "true"){
       shortbreakOptionOnclick();
      }else if (window.btnThreeActive == "true"){
       longbreakOptionOnclick();
      };

      startButton.addEventListener("mouseover", () => {
        startButton.style.color = "#70F3F8";
      });
      startButton.addEventListener("mouseout", () => {
        startButton.style.color = "#D7E0FF";
      });
      pauseButton.addEventListener("mouseover", () => {
        pauseButton.style.color = "#70F3F8";
      });
      pauseButton.addEventListener("mouseout", () => {
        pauseButton.style.color = "#D7E0FF";
      });
      restartButton.addEventListener("mouseover", () => {
        restartButton.style.color = "#70F3F8";
      });
      restartButton.addEventListener("mouseout", () => {
        restartButton.style.color = "#D7E0FF";
      });
}
colorTwoOption.addEventListener('click', colorTwoSelected);

const colorThreeSelected = () => {
  colorOneCheckIcon.style.visibility = 'hidden';
  colorTwoCheckIcon.style.visibility = 'hidden';
  colorThreeCheckIcon.style.visibility = 'visible';
  progressPath.classList.add("thirdColor");
  progressPath.classList.remove("firstColor");
  progressPath.classList.remove("secondColor");
  applyButton.classList.add("thirdColor");
  applyButton.classList.remove("firstColor");
  applyButton.classList.remove("secondColor");
  pomodoroOptionSelected.classList.add("thirdColor");
  pomodoroOptionSelected.classList.remove("firstColor");
  pomodoroOptionSelected.classList.remove("secondColor");
  shortbreakOptioonSelected.classList.add("thirdColor");
  shortbreakOptioonSelected.classList.remove("firstColor");
  shortbreakOptioonSelected.classList.remove("secondColor");
  longbreakOptioonSelected.classList.add("thirdColor");
  longbreakOptioonSelected.classList.remove("firstColor");
  longbreakOptioonSelected.classList.remove("secondColor");

  // identifier for active theme or background color
    window.colorThree = "#D881F8";
// overwriting the identifier for  active theme or background color
    window.colorTwo = "null";
    window.colorOne = "null";

    // logic forr setting the current active theme to the active color "#D881F8"
    if (window.btnOneActive == "true"){
      pomodoroOptionOnclick();
    }else if (window.btnTwoActive == "true"){
     shortbreakOptionOnclick();
    }else if (window.btnThreeActive == "true"){
     longbreakOptionOnclick();
    };

    startButton.addEventListener("mouseover", () => {
      startButton.style.color = "#D881F8";
    });
    startButton.addEventListener("mouseout", () => {
      startButton.style.color = "#D7E0FF";
    });
    pauseButton.addEventListener("mouseover", () => {
      pauseButton.style.color = "#D881F8";
    });
    pauseButton.addEventListener("mouseout", () => {
      pauseButton.style.color = "#D7E0FF";
    });
    restartButton.addEventListener("mouseover", () => {
      restartButton.style.color = "#D881F8";
    });
    restartButton.addEventListener("mouseout", () => {
      restartButton.style.color = "#D7E0FF";
    });
}
colorThreeOption.addEventListener('click', colorThreeSelected);


