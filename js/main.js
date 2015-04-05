function fyShuffle(A) {
    var n = A.length, i, j;
    while (n > 0) {
        i = Math.floor(Math.random() * n);
        n = n - 1;
        j = A[n];
        A[n] = A[i];
        A[i] = j;
    }
    return A;
}

var questions = fyShuffle(q);
questions = ['So what are you working on?'].concat(questions);
var index = 0;
var timeRemaining = 15;
var timer;
var paused = false;

document.onkeypress = function (e) {
    e = e || window.event;
    if ( e.keyCode == 13 ) { // return
        nextQuestion();
    } else if (e.keyCode == 32) { // space
        flipflopTimer();
    }
};

function nextQuestion() {
    if (index === 0){
        textArray = document.getElementsByClassName('helptext');
        for ( var i=0; i<textArray.length; i++ ) {
            textArray[i].className = textArray[i].className + " hide";
        }
        document.getElementById('questionText').innerHTML = 'NEXT QUESTION';
    }
    if ( index >= questions.length ) {
        document.getElementById('question').innerHTML = 'fin.'
        document.getElementById('questionControl').className = document.getElementById('questionControl').className + ' hide';
        document.getElementById('timerControl').className = document.getElementById('timerControl').className + ' hide';
        document.getElementById('timer').className = document.getElementById('timer').className + ' hide';
    } else {
        document.getElementById('question').innerHTML = questions[index]
        resetTimer();
        index += 1;
    }
}

function resetTimer() {
    timeRemaining = 15;
    startTimer();
}

function flipflopTimer() {
    if ( index === 0 ){
        return;
    }
    if (paused) {
        startTimer();
    } else {
        pauseTimer();
    }
}

function startTimer() {
    clearTimeout(timer);
    document.getElementById('timeRemaining').innerHTML = timeRemaining + ' s';
    document.getElementById('timerText').innerHTML = 'PAUSE TIMER';
    paused = false;
    timer = window.setInterval("decrementTimer();", 1000);
}

function pauseTimer() {
    clearTimeout(timer);
    document.getElementById('timerText').innerHTML = 'RESUME TIMER';
    paused = true;
}

function decrementTimer() {
    if ( timeRemaining >= 1 ) {
       timeRemaining = timeRemaining - 1;
    } else {
        timeRemaining = 0;
    }
    document.getElementById('timeRemaining').innerHTML = timeRemaining + ' s'; 
}