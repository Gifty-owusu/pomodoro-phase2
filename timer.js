/// Variable declarations for the elements to modify the background color
const circles = document.getElementsByClassName("circle");
const applyButton = document.getElementById("apply");
const pomodoroButton = document.getElementById("pomodoro");
const longButton = document.getElementById("long1");
const shortButton = document.getElementById("short1");
const firstFont = document.getElementById("fontOne");
const secondFont = document.getElementById("fontTwo");
const thirdFont = document.getElementById("fontThree");
const FirstColorSelected = document.getElementById("color-one");

window.bodytag = document.querySelector('body');


// functions for opening and closing the settings dashboard
const closeDashboard = () => {
    document.getElementById("settings").style.display = "none";
};
const displayDashboard = () => {
    document.getElementById("settings").style.display = "block";
};

// Functions for clearing initial or selected color options for pomodoro, short, and long break buttons
const clearFirstColor = () => {
    applyButton.classList.remove("first-color-display");
    pomodoroButton.classList.remove("first-color-display");
    longButton.classList.remove("first-color-display");
    shortButton.classList.remove("first-color-display");
};
const clearSecondColor = () => {
    applyButton.classList.remove("second-color-display");
    pomodoroButton.classList.remove("second-color-display");
    longButton.classList.remove("second-color-display");
    shortButton.classList.remove("second-color-display");
};
const clearThirdColor = () => {
    applyButton.classList.remove("third-color-display");
    pomodoroButton.classList.remove("third-color-display");
    longButton.classList.remove("third-color-display");
    shortButton.classList.remove("third-color-display");
};

//functions for changing the color of the timer options
const colorC1 = () =>{
        clearSecondColor();
        clearThirdColor();
// logic for setting colors of circle and the apply apply button background color
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "#F87070";
    }
    applyButton.classList.add("first-color-display");
    
    // identifier for active theme or background color
    window.colorOne = "#F87070";
// overwriting the identifier for  active theme or background color  
    window.colorTwo = "null";
    window.colorThree = "null";
// logic forr setting the current  active theme to the active color 'first-color-display'  
    if(window.btnOneActive == "true"){
        pomodoroOnclick();
    }else if (window.btnTwoActive == "true"){
        shortOnclick();
    }else if (window.btnThreeActive == "true"){
        longOnclick();
    };
     };

const colorC2 = () =>{
        clearFirstColor();
        clearThirdColor();
// logic for setting colors of circle and the apply apply button background color
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "#70F3F8";
    }
    applyButton.classList.add("second-color-display");
    // identifier for active theme or background color
         window.colorTwo = "#70F3F8";
    // overwriting the identifier for  active theme or background color 
        window.colorOne = "null";
        window.colorThree = "null";
    // logic forr setting the current  active theme to the active color "#70F3F8"
        if (window.btnOneActive == "true"){
            pomodoroOnclick();
        }else if (window.btnTwoActive == "true"){
            shortOnclick();
        }else if (window.btnThreeActive == "true"){
            longOnclick();
        };
    };

const colorC3 = () =>{
    clearFirstColor();
    clearSecondColor();
// logic for setting colors of circle and the apply apply button background color
for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = "#D881F8";
}
applyButton.classList.add("third-color-display");
// identifier for active theme or background color
    window.colorThree = "#D881F8";
// overwriting the identifier for  active theme or background color
    window.colorTwo = "null";
    window.colorOne = "null";
// logic forr setting the current active theme to the active color "#D881F8"
    if (window.btnOneActive == "true"){
         pomodoroOnclick();
    }else if (window.btnTwoActive == "true"){
        shortOnclick();
    }else if (window.btnThreeActive == "true"){
        longOnclick();
    };
    };

//function for setting button colors and disabling the other colors onclick 
 const pomodoroOnclick = () =>{
// Adding and removing pomodoro timer option initial font colors
    pomodoroButton.classList.add("default-font-color");
    longButton.classList.add("selected-font-color");
    shortButton.classList.add("selected-font-color");

    pomodoroButton.classList.remove("selected-font-color");
    longButton.classList.remove("default-font-colo");
    shortButton.classList.remove("default-font-colo");
// identifier for active button 
    window.btnOneActive = "true";
// overwriting the other buttons    
    window.btnTwoActive = "null";
    window.btnThreeActive = "null";
//setting pomodoro buttons to get the values from the pomodoro input using local storage
    localStorage.setItem("pomodoroSelected", "pomodoro-selected");
    localStorage.setItem("shortBreakSelected", "null");
    localStorage.setItem("longBreakSelected", "null");
// Adding and removing pomodor timer option initial background colors
    pomodoroButton.classList.add("initial-color");
    longButton.classList.remove("initial-color");
    shortButton.classList.remove("initial-color");
    shortButton.classList.add("bg-default");
    longButton.classList.add("bg-default");
//logic for setting color options for the pomodoro timer options
    if (window.colorOne == "#F87070") {
        //pomodoroButton.classList.remove("initial-color");
        //pomodoroButton.classList.remove("bg-default");
        longButton.classList.remove("first-color-display");
        shortButton.classList.remove("first-color-display");

        pomodoroButton.classList.add("first-color-display");
        longButton.classList.add("bg-default");
        shortButton.classList.add("bg-default");
     }
    else if (window.colorTwo == "#70F3F8") {
        
    } 
    else if (window.colorThree == "#D881F8") {
        longButton.classList.remove("third-color-display");
        shortButton.classList.remove("third-color-display");

        pomodoroButton.classList.add("third-color-display");
        longButton.classList.add("bg-default");
        shortButton.classList.add("bg-default");
    };
    
};
//function for setting button colors and disabling the other colors onclick
const shortOnclick = () =>{
// Adding and removing short break timer option initial font colors
    pomodoroButton.classList.add("selected-font-color");
    longButton.classList.add("selected-font-color");
    shortButton.classList.add("default-font-color");

    shortButton.classList.remove("selected-font-color");
    longButton.classList.remove("default-font-color");
    pomodoroButton.classList.remove("default-font-color");
    
// identifier for active button 
    window.btnTwoActive = "true";
// overwriting the other buttons    
    window.btnOneActive = "null";
    window.btnThreeActive = "null";
    //setting short break buttons to get the values from the short break input using local storage
    localStorage.setItem("shortBreakSelected", "short-break-selected");
    localStorage.setItem("pomodoroSelected", "null");
    localStorage.setItem("longBreakSelected", "null");
// Adding and removing short break initial colors
    pomodoroButton.classList.remove("initial-color");
    longButton.classList.remove("initial-color");
    shortButton.classList.add("initial-color");
    pomodoroButton.classList.add("bg-default");
    longButton.classList.add("bg-default");

//logic for setting color change for the second button
    if (window.colorOne == "#F87070") {
        longButton.classList.remove("first-color-display");
        pomodoroButton.classList.remove("first-color-display");

        shortButton.classList.add("first-color-display");
        longButton.classList.add("bg-default");
        pomodoroButton.classList.add("bg-default");

    }else if (window.colorTwo == "#19c3c9") {
        

    }else if (window.colorThree == "#D881F8") {
        longButton.classList.remove("third-color-display");
        pomodoroButton.classList.remove("third-color-display");

        shortButton.classList.add("third-color-display");
        longButton.classList.add("bg-default");
        pomodoroButton.classList.add("bg-default");
    };
};

// function for setting button colors and disabling other colors onclick 
const longOnclick = () =>{
    pomodoroButton.classList.add("selected-font-color");
    longButton.classList.add("default-font-color");
    shortButton.classList.add("selected-font-color");

    longButton.classList.remove("selected-font-color");
    pomodoroButton.classList.remove("default-font-color");
    shortButton.classList.remove("default-font-color");
// identifier for active buttons
    window.btnThreeActive = "true";
// overwriting the other active button
    window.btnOneActive = "null";
    window.btnTwoActive = "null";
 //setting long break buttons to get the values from the long break input using local storage
    localStorage.setItem("longBreakSelected", "long-break-selected");
    localStorage.setItem("pomodoroSelected", "null");
    localStorage.setItem("shortBreakSelected", "null");
// Adding and removing long break initial colors
    pomodoroButton.classList.remove("initial-color");
    shortButton.classList.remove("initial-color");
    longButton.classList.add("initial-color");
    pomodoroButton.classList.add("bg-default");
    shortButton.classList.add("bg-default");
 
// logic for setting color change for the third button
    if (window.colorOne == "#F87070"){
        shortButton.classList.remove("first-color-display");
        pomodoroButton.classList.remove("first-color-display");

        longButton.classList.add("first-color-display");
        shortButton.classList.add("bg-default");
        pomodoroButton.classList.add("bg-default");

    }else if (window.colorTwo == "#70F3F8"){
        

    }else if(window.colorThree == "#D881F8"){
        shortButton.classList.remove("third-color-display");
        pomodoroButton.classList.remove("third-color-display");

        longButton.classList.add("third-color-display");
        shortButton.classList.add("bg-default");
        pomodoroButton.classList.add("bg-default");
    };
};

const clear1 = () =>{
    bodytag.classList.remove('DisplayF1');
};

const clear2 = () =>{
    bodytag.classList.remove('DisplayF2');
};

const clear3 = () =>{
    bodytag.classList.remove('DisplayF3');
};

//functions for changing font styles of the timer options
const fontF1 = () =>{
    clear2();
    clear3();
// selected font style "identifier for selected font".
    firstFont.classList.add("bg-default");
    firstFont.classList.add("selected-font-color")
    secondFont.classList.remove("bg-default");
    secondFont.classList.add("default-font-bg-color");
    secondFont.classList.remove("selected-font-color")
    secondFont.classList.add("default-font-color")
    thirdFont.classList.add("default-font-color");
    thirdFont.classList.remove("selected-font-color")
    thirdFont.classList.remove("bg-default");
    thirdFont.classList.add("default-font-bg-color");

// Add the "DisplayF1" class to the body element
    bodytag.classList.add("DisplayF1");
}

const fontF2 = () =>{
    clear1();
    clear3();
    // selected font style "identifier for selected font".
    secondFont.classList.add("bg-default");
    secondFont.classList.add("selected-font-color")
    firstFont.classList.remove("bg-default");
    firstFont.classList.add("default-font-bg-color");
    firstFont.classList.remove("selected-font-color")
    firstFont.classList.add("default-font-color")
    thirdFont.classList.add("default-font-color");
    thirdFont.classList.remove("selected-font-color")
    thirdFont.classList.remove("bg-default");
    thirdFont.classList.add("default-font-bg-color");
    // Remove the selected font class
    bodytag.classList.remove("DisplayF1");
    // Add the "DisplayF2" class to the body element
    bodytag.classList.add("DisplayF2");
}

const fontF3 = () =>{
    clear1();
    clear2();
    // selected font style "identifier for selected font".
    thirdFont.classList.add("bg-default");
    thirdFont.classList.add("selected-font-color")
    firstFont.classList.remove("bg-default");
    firstFont.classList.add("default-font-bg-color");
    firstFont.classList.remove("selected-font-color")
    firstFont.classList.add("default-font-color")
    secondFont.classList.add("default-font-color");
    secondFont.classList.remove("selected-font-color")
    secondFont.classList.remove("bg-default");
    secondFont.classList.add("default-font-bg-color");
    // Remove a class
    bodytag.classList.remove("DisplayF2");
   // Add the "DisplayF3" class to the body element
   bodytag.classList.add("DisplayF3");
};

// functions for increament and decreament operators for timer values
    let pomoCount = 0;
        const pomoIncrementOperator = () => {
            document.getElementById("pomo_doro").value = ++pomoCount;
        };
        const pomoDecrementOperator = () => {
            document.getElementById("pomo_doro").value = --pomoCount;
        }; 
    let shortBreakCount = 0;
        const shortIncrementOperator = () => {
            document.getElementById("short_break").value = ++shortBreakCount;
        };
        const shortDecrementOperator = () => {
            document.getElementById("short_break").value = --shortBreakCount;
        };   
    let longBreakCount = 0;
        const longIncrementOperator = () => {
            document.getElementById("long_break").value = ++longBreakCount;
        };
        const longDecrementOperator = () => {
            document.getElementById("long_break").value = --longBreakCount;
        }; 

const apply = () =>{
    //Get the value of the time input and set it as the inner text of the minutes element
    window.pomodoroTimeInput = document.getElementById("pomo_doro").value;
    window.shortProgressValue = document.getElementById("short_break").value;
    window.longProgressValue = document.getElementById("long_break").value;
    const Minutes = document.getElementById("minutes");

    // Getting displaying user timer preference
    if (localStorage.getItem("pomodoroSelected") == "pomodoro-selected") {
        window.progressValue = document.getElementById("pomo_doro").value;
        Minutes.innerText = parseInt(progressValue).toString().padStart(2, 0);
        
     }else if (localStorage.getItem("shortBreakSelected") == "short-break-selected") {
        window.progressValue = document.getElementById("short_break").value;
        Minutes.innerText = parseInt(shortProgressValue).toString().padStart(2, 0);
        
    }else if (localStorage.getItem("longBreakSelected") == "long-break-selected") {
        window.progressValue = document.getElementById("long_break").value;
        Minutes.innerText = parseInt(longProgressValue).toString().padStart(2, 0);
    }
// Close the dashboard
    closeDashboard();
};

// Timer logic
  let minutesDisplay = document.getElementById("minutes");
  let secondsDisplay = document.getElementById("seconds");
  let countdownButton = document.getElementById("srp");
  let pauseBtn = document.getElementById('pause');
  let restartBtn = document.getElementById('restart');
  let x;
  let paused = false;
  
const startCountdown = () =>{
    const pomoTime = window.progressValue;
    if (pomoTime === "" || pomoTime < 1) {
      alert("Please enter a valid time in minutes.");
      return;
    }
    function start() {
      window.countdownTime = 60 * parseInt(minutesDisplay.textContent) + parseInt(secondsDisplay.textContent);
      x = setInterval(function() {
        countdownTime--;
      
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;
      
        minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
  
        if (countdownTime <= 0) {
          clearTimeout(x);
          minutesDisplay.textContent = "00";
          secondsDisplay.textContent = "00";
          countdownButton.innerText = "START";
          document.getElementById('restart').style.display = "none";
          document.getElementById('pause').style.display = "none";
          countdownButton.className = "start";
          window.location.reload();
          paused = false;
        };

        document.getElementById("strokeFirst").style.background = "#161932";
        document.getElementById("progressThree").style.background = "#161932";
       
      }, 1000);
        progressIndicator();
        setProgressCircleOn();
    };
    
    countdownButton.addEventListener('click', function() {
      if (countdownButton.innerHTML === "START") {
        // Start the timer
        countdownButton.className = "hide_btn";
        document.getElementById('pause').style.display = "block";
        start();
      }
    });
  }
  
  const pause = () =>{
    clearTimeout(x);
    clearInterval(timerLoop);
    document.getElementById("pause").style.display = "none";
    document.getElementById("restart").style.display = "block";
  }
  
  const restart = () =>{
    window.location.reload();
    clearTimeout(x);
    countdownButton.className = "start";
    document.getElementById('restart').style.display = "none";
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    countdownButton.disabled = false;
     //clearInterval(timerLoop);
    progressOne.style.display = 'none';
    progressTwo.style.display = 'none';
    progressThree.style.display = 'none';
 }
//calling the timer to start
     startCountdown();
    
// resetting the buttons
    const reset = () =>{
        clearTimeout(x);
        minutesDisplay.textContent = "00";
        secondsDisplay.textContent = "00";
        progressOne.style.display = 'none';
        progressTwo.style.display = 'none';
        progressThree.style.display = 'none';
        countdownButton.className = "start";
        document.getElementById('restart').style.display = "none";
        document.getElementById("pause").style.display = "none";
    }

    const setProgressCircleOn = () =>{
    semicircles[0].style.display = 'block';
    semicircles[1].style.display = 'block';
    semicircles[2].style.display = 'block';
   };

    const progressIndicator = () =>{
    window.semicircles = document.querySelectorAll('.semicircle');

    // input 
    window.min = progressValue;
    const sec = 0;
    const minute = min * 60000;
    const second = sec * 1000;
    const setTime = minute + second;
    const startTime = Date.now();
    const futureTime = startTime + setTime;
    window.pausedTime = null;

    const countDownTimer = () =>{
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime / setTime) * 360;
    
    // progress indicator
    if(angle > 180) {
    semicircles[2].style.display = 'none';
    semicircles[0].style.transform = 'rotate(180deg)';
    semicircles[1].style.transform = `rotate(${angle}deg)`;
    } else {
    semicircles[2].style.display = 'block';
    semicircles[0].style.transform = `rotate(${angle}deg`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
    }

    if(remainingTime < 0) {
    clearInterval(timerLoop);
    window.semicircles[0].style.display = 'none';
    window.semicircles[1].style.display = 'none';
    window.semicircles[2].style.display = 'none';
    }
    };
    window.timerLoop = setInterval(countDownTimer);
    countDownTimer(); 
 };

