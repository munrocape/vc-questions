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
    if (e.keyCode == 13){ // return
        nextQuestion();
    } else if (e.keyCode == 32){ // space
        flipflopTimer();
    }
};

function nextQuestion() {
    if (index >= questions.length){
        document.getElementById('question').innerHTML = 'fin.'
    } else {
        document.getElementById('question').innerHTML = questions[index]
        resetTimer();
        index += 1;
    }
}

function resetTimer() {
    timeRemaining = 15;
    clearTimeout(timer);
    document.getElementById('timeRemaining').innerHTML = timeRemaining + ' s';
    paused = false;
    timer = window.setInterval("decrementTimer();", 1000);
}

function decrementTimer() {
    if (timeRemaining >= 1) {
       timeRemaining = timeRemaining - 1;
    } else {
        timeRemaining = 0;
    }
    document.getElementById('timeRemaining').innerHTML = timeRemaining + ' s'; 
}

function flipflopTimer() {
    if (paused) {
        timer = window.setInterval("decrementTimer();", 1000);
        paused = false;
    } else {
        clearTimeout(timer);
        paused = true;
    }
}