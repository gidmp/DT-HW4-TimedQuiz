
//question list
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



var startButton = document.getElementById("startButton");
var getQuiz = document.getElementById("quizContainer");
var timer = document.getElementById("time");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answerButton");
var gameOverScreen = document.getElementById("gameOver");
var highScoreScreen = document.getElementById("hisgScore");

var questionIndex = 0;
var getQuestion = quizQuestions[questionIndex];

var secondsLeft =99;

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

    //show the question based on index that increase by increments
    showQuestion();
    

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

function showQuestion(){
    questionEl.innerHTML = "<p>" +  getQuestion.question + "<p>";
    for(var i = 0; i < getQuestion.answers.length; i++){
        //set each button to their corresponding answers
        answerButtonEl.children[i].innerHTML = quizQuestions[questionIndex].answers[i].word;
    }
}

function nextQuestion(){
    //when an answer button is pressed, move on to the next question
    //if out of question go to game over screen
    //use carousel for this?

}

function answer(){
    //when an answer button is pressed keep tally of the score and 
    //pass it along to viewHighScore

}

function viewHighScore(){
    showHide(highScoreScreen,gameOverScreen);
    showHide(highScoreScreen,getQuiz);
    showHide(highScoreScreen,startButton);

}

//list of questions and answers

console.log(getQuestion.answers.length);
console.log(answerButtonEl.children[questionIndex]);
console.log(quizQuestions[questionIndex]);