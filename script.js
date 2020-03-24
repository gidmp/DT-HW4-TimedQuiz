var startButton = document.getElementById("startButton");
var getQuiz = document.getElementById("quizContainer");
var timer = document.getElementById("time");
var gameOverScreen = document.getElementById("gameOver");
var highScoreScreen = document.getElementById("hisgScore");

var secondsLeft = 5;

startButton.addEventListener("click", startQuiz);
//add submit highscore and view highscore button
//add choosing answer button to go to next question

//function for screen transition
function showHide(show, hide){
    show.classList.remove("hide");     
    hide.classList.add("hide"); 
}

//function for quiz start button
function startQuiz(){
    console.log("starter test");

    //remove intro scene and display the quiz question
    startButton.parentElement.style.display = "none";
    getQuiz.classList.remove("hide");

    //start timer
    setTime();

}

function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;
    
        //if you answer a question wrong cut timer by 3 seconds

        if(secondsLeft === 0) {
            clearInterval(timerInterval); 
           //remove the main screen and show game over screen
            showHide(gameOverScreen,getQuiz);  
        }
    }, 1000);

    //if secondsLeft === 0 show a gameover and retry screen
    
}

function nextQuestion(){
    //when an answer button is pressed, move on to the next question
    //if out of question go to game over screen

}

function answer(){
    //when an answer button is pressed keep tally of the score and 
    //pass it along to viewHighScore

}

function viewHighScore(){
    showHide(highScoreScreen,);

}

//list of questions and answers
var quizQuestions = [{
    question: "up dog?",
    answers: [
        {word : "what is up dog?", verdict : true},
        {word : "what?", verdict : false},
        {word : "the numbers mason, what do they mean?", verdict : false},
        {word : "hotdog", verdict : false},
    ]        
}, {
    question: "which one of these is not the fellowship of the ring?",
    answers: [
        {word : "Frodo?", verdict : false},
        {word : "Bilbo", verdict : true},
        {word : "Legolas", verdict : false},
        {word : "Gimli", verdict : false},
    ]        
}, 
];