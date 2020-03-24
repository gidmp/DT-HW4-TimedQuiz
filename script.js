var startButton = document.getElementById("startButton");
var getQuiz = document.getElementById("quizContainer");
var timer = document.querySelector(".time");
var secondsLeft = 100;

startButton.addEventListener("click", startQuiz);

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


        if(secondsLeft === 0) {
            clearInterval(timerInterval); 
            //display a gameoverscreen
            
          }
    }, 1000);

    //if secondsLeft === 0 show a gameover and retry screen
    //if you answer a question wrong cut timer by 3 seconds
    
}

function nextQuestion(){

}

function answer(){

}

function gameOver(){

}

function viewHighScore(){

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