//trying closing button
function closeDashboard(){
    document.getElementById("settings").style.display = "none";
};

function displayDashboard(){
    document.getElementById("settings").style.display = "block"
    
};


//functions for changing the color of the timer options
function colorC1(){
// logic for setting colors of circle and the apply apply button background color
    document.getElementById("progressOne").style.background = "#F87070";
    document.getElementById("progressTwo").style.background = "#F87070";
    document.getElementById("apply").style.background = "#F87070";
// identifier for active theme or background color
    window.colorOne = "#F87070";
// overwriting the identifier for  active theme or background color  
    window.colorTwo = "null";
    window.colorThree = "null";
// logic forr setting the current  active theme to the active color ##F87070    
    if(window.btnOneActive == "true"){
        document.getElementById("pomodoro").style.background = "#F87070";
    }else if (window.btnTwoActive == "true"){
        document.getElementById("short1").style.background = "#F87070";
    }else if (window.btnThreeActive == "true"){
        document.getElementById("long1").style.background = "#F87070";
    };
     };

   function colorC2(){
// logic for setting colors of circle and the apply apply button background color
    document.getElementById("apply").style.background = "#19c3c9";
    document.getElementById("progressOne").style.background = "#19c3c9";
    document.getElementById("progressTwo").style.background = "#19c3c9";
// identifier for active theme or background color
    window.colorTwo = "#19c3c9";
// overwriting the identifier for  active theme or background color 
    window.colorOne = "null";
    window.colorThree = "null";
// logic forr setting the current  active theme to the active color "#19c3c9"
    if (window.btnOneActive == "true"){
    document.getElementById("pomodoro").style.background = "#19c3c9";
   }else if (window.btnTwoActive == "true"){
    document.getElementById("short1").style.background = "#19c3c9";
   }else if (window.btnThreeActive == "true"){
    document.getElementById("long1").style.background = "#19c3c9";
   };
    };

function colorC3(){
// logic for setting colors of circle and the apply apply button background color
    document.getElementById("apply").style.background = "#D881F8";
    document.getElementById("progressOne").style.background = "#D881F8";
    document.getElementById("progressTwo").style.background = "#D881F8";
// identifier for active theme or background color
    window.colorThree = "#D881F8";
// overwriting the identifier for  active theme or background color
    window.colorTwo = "null";
    window.colorOne = "null";
// logic forr setting the current active theme to the active color "#D881F8"
    if (window.btnOneActive == "true"){
        document.getElementById("pomodoro").style.background = "#D881F8";
    }else if (window.btnTwoActive == "true"){
        document.getElementById("short1").style.background = "#D881F8";
    }else if (window.btnThreeActive == "true"){
        document.getElementById("long1").style.background = "#D881F8";
    };
};

//function for setting button colors and disabling the other colors onclick 
 function pomodoroOnclick(){
// identifier for active button 
    window.btnOneActive = "true";
// overwriting the other buttons    
    window.btnTwoActive = "null";
    window.btnThreeActive = "null";
    //setting pomodoro buttons to get the values from the pomodoro input using local storage
    localStorage.setItem("pomodoroSelected", "pomodoro-selected");
    localStorage.setItem("shortBreakSelected", "null");
    localStorage.setItem("longBreakSelected", "null");
    document.getElementById("pomodoro").style.background = "#19c3c9";
    document.getElementById("long1").style.background = "#161932";
    document.getElementById("short1").style.background = "#161932";
    //reset();
    //restart();


    
//logic for setting color change for the first button
    if (window.colorOne == "#F87070") {
        document.getElementById("pomodoro").style.background ="#F87070";
        document.getElementById("long1").style.background = "#161932";
        document.getElementById("short1").style.background = "#161932";  
    }
    else if (window.colorTwo == "#19c3c9") {
        document.getElementById("pomodoro").style.background = "#19c3c9";
        document.getElementById("long1").style.background = "#161932";
        document.getElementById("short1").style.background = "#161932";
    } 
    else if (window.colorThree == "#D881F8") {
        document.getElementById("pomodoro").style.background ="#D881F8";
        document.getElementById("long1").style.background = "#161932";
        document.getElementById("short1").style.background = "#161932";
    };
    
};
//function for setting button colors and disabling the other colors onclick
function shortOnclick(){
// identifier for active button 
    window.btnTwoActive = "true";
// overwriting the other buttons    
    window.btnOneActive = "null";
    window.btnThreeActive = "null";
    //setting short break buttons to get the values from the short break input using local storage
    localStorage.setItem("shortBreakSelected", "short-break-selected");
    localStorage.setItem("pomodoroSelected", "null");
    localStorage.setItem("longBreakSelected", "null");
    document.getElementById("short1").style.background= "#19c3c9";
    document.getElementById("pomodoro").style.background = "#161932";
    document.getElementById("long1").style.background = "#161932";
    //reset();
    //restart();
//logic for setting color change for the second button
    if (window.colorOne == "#F87070") {
        document.getElementById("short1").style.background= "#F87070";
        document.getElementById("pomodoro").style.background = "#161932";
        document.getElementById("long1").style.background = "#161932";
    }else if (window.colorTwo == "#19c3c9") {
        document.getElementById("short1").style.background= "#19c3c9";
        document.getElementById("pomodoro").style.background = "#161932";
        document.getElementById("long1").style.background = "#161932";
    }else if (window.colorThree == "#D881F8") {
        document.getElementById("short1").style.background= "#D881F8";
        document.getElementById("pomodoro").style.background = "#161932";
        document.getElementById("long1").style.background = "#161932";
    };
};
// function for setting button colors and disabling other colors onclick 
function longOnclick(){
// identifier for active buttons
window.btnThreeActive = "true";
// overwriting the other active button
window.btnOneActive = "null";
window.btnTwoActive = "null";
 //setting long break buttons to get the values from the long break input using local storage
 localStorage.setItem("longBreakSelected", "long-break-selected");
 localStorage.setItem("pomodoroSelected", "null");
 localStorage.setItem("shortBreakSelected", "null");
 document.getElementById("long1").style.background= "#19c3c9";
 document.getElementById("pomodoro").style.background = "#161932";
 document.getElementById("short1").style.background= "#161932"; 
 reset();
 //restart();
// logic for setting color change for the third button
    if (window.colorOne == "#F87070"){
    document.getElementById("long1").style.background= "#F87070";
    document.getElementById("pomodoro").style.background = "#161932";
    document.getElementById("short1").style.background= "#161932";
    }else if (window.colorTwo == "#19c3c9"){
        document.getElementById("long1").style.background= "#19c3c9"; 
        document.getElementById("pomodoro").style.background = "#161932";
        document.getElementById("short1").style.background= "#161932";
    }else if(window.colorThree == "#D881F8"){
        document.getElementById("long1").style.background = "#D881F8";
        document.getElementById("pomodoro").style.background = "#161932";
        document.getElementById("short1").style.background= "#161932";
    };
};

//functions for changing font styles of the timer options
function fontF1(){
    //document.getElementById("f1-border").style.borderColor = "red";
    document.getElementById("pomodoro").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("short1").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("long1").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("minutes").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("seconds").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("srp").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("settings-text").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("time-text").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("font-styles").style.fontFamily = "'Kumbh Sans', sans-serif";
    document.getElementById("change-colors").style.fontFamily = "'Kumbh Sans', sans-serif";
}

function fontF2(){
    document.getElementById("pomodoro").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("short1").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("long1").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("minutes").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("seconds").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("srp").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("settings-text").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("time-text").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("font-styles").style.fontFamily = "'Roboto Slab', serif";
    document.getElementById("change-colors").style.fontFamily = "'Roboto Slab', serif";
}

function fontF3(){
    document.getElementById("pomodoro").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("short1").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("long1").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("minutes").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("seconds").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("srp").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("settings-text").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("time-text").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("font-styles").style.fontFamily = "'Space Mono', monospace";
    document.getElementById("change-colors").style.fontFamily = "'Space Mono', monospace";
};

//logic for increment and decrement of input values
var i = 0;
function pomoIncrementOperator(){
    document.getElementById("pomo_doro").value = ++i;
    };

var i = 0;
function pomoDecrementOperator(){
    document.getElementById("pomo_doro").value = --i;
}; 

var i = 0;
function shortIncrementOperator(){
    document.getElementById("short_break").value = ++i;
    };

var i = 0;
function shortDecrementOperator(){
    document.getElementById("short_break").value = --i;
};   

var i = 0;
function longIncrementOperator(){
    document.getElementById("long_break").value = ++i;
    };

var i = 0;
function longDecrementOperator(){
    document.getElementById("long_break").value = --i;
};



function apply() {
    //Get the value of the time input and set it as the inner text of the minutes element
    //window.progressValue = document.getElementById("pomo_doro").value;
    //console.log("Came first - "+progressValue);
    window.pomodoroTimeInput = document.getElementById("pomo_doro").value;
    const pomodoroTimeInput = document.getElementById("pomo_doro");
    window.shortProgressValue = document.getElementById("short_break").value;
    console.log("Came Second - "+shortProgressValue);
    const shortBreakTimeInput = document.getElementById('short_break');
    window.longProgressValue = document.getElementById("long_break").value;
    console.log("Came third - "+longProgressValue);
    const longBreakTimeInput = document.getElementById('long_break');
    const Minutes = document.getElementById("minutes");
    const Seconds = document.getElementById("seconds");
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    // if user selected pomodoro clock
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
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    
    
    // Close the dashboard
    closeDashboard();
};

  // logic to make the timer functional 
  // varaible declarations
  var minutesDisplay = document.getElementById("minutes");
  var secondsDisplay = document.getElementById("seconds");
  var countdownButton = document.getElementById("srp");
  var pauseBtn = document.getElementById('pause');
  var restartBtn = document.getElementById('restart');
  var x;
  var paused = false;
  
  function startCountdown() {
    const pomoTime = window.progressValue;
    const shortTime = window.shortProgressValue;
    const longTime = window.longProgressValue;
    if (pomoTime === "" || pomoTime < 1) {
      alert("Please enter a valid time in minutes.");
      return;
    }
    // Log the value of pomoTime to the console
    console.log("pomoTime:", pomoTime);
    console.log(shortTime);
    console.log(longTime);
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
  
  function pause() {
    clearTimeout(x);
    clearInterval(timerLoop);
    document.getElementById("pause").style.display = "none";
    document.getElementById("restart").style.display = "block";
    setTimeout(function(){
        window.location.reload();
    }, 5000);
  }
  
  function restart(){
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
    // calling progress function

    // resetting the buttons
    function reset(){
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


    function setProgressCircleOn() {
    semicircles[0].style.display = 'block';
    semicircles[1].style.display = 'block';
    semicircles[2].style.display = 'block';
   };

    function progressIndicator() {
    ////////////////////////////////////////////////////////////
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
    window.timerLoop = setInterval(countDownTimer);
    countDownTimer();  

    function countDownTimer() {
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
    }
    
    //////////////////////////////////////////////////////////
 };

