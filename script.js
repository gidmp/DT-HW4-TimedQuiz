var startButton = document.getElementById("startButton");
var getQuiz = document.getElementById("quizContainer");
var timer = document.getElementById("time");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answerButton");
var gameOverScreen = document.getElementById("gameOver");
var highScoreScreen = document.getElementById("hisgScore");
//timer
var secondsLeft = 99;
//keep track the amount of question
var questionIndex = 0;
//keeping track of score
var score = 0;

startButton.addEventListener("click", startQuiz);
//add submit highscore and view highscore button
//add choosing answer button to go to next question
answerButtonElement.addEventListener("click", checkAnswer);

//function for screen transition
function showHide(show, hide){
    show.classList.remove("hide");     
    hide.classList.add("hide"); 
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
    
}


//function for quiz start button
function startQuiz(){
    console.log("starter test");

    //remove intro scene and display the quiz question
    startButton.parentElement.style.display = "none";
    getQuiz.classList.remove("hide");

    //start timer
    setTime();
    showQuestion();

}

function showQuestion(){
    var questionNumber = quizQuestions[questionIndex];
    questionElement.innerHTML = "<p>" +questionNumber.question+"<p>";
    //use for loop to show the answer to each child element(answer buttons) and 
    //inside that loop put another loop to check if answers.verdixt ===true
}

function checkAnswer(){
    //when an answer button is pressed keep tally of the score and 
    //pass it along to viewHighScore          

    //innerText the questions using for loop somehow and store them in local storage
    //when an answer button is pressed, move on to the next question
    //if out of question go to game over screen

    //increase questionIndex increments by 1 in order to go to the next question
    showQuestion(quizQuestions[questionIndex]);
    questionIndex++;
    showQuestion(quizQuestions[questionIndex]);

    //if we finished the quiz, go to gameover screen
    if(questionIndex > quizQuestions.length){
        clearInterval(timerInterval); 
        showHide(gameOverScreen,getQuiz);  
    }  

}

function answer(){
    //use event delegation for this?
    answerButtonElement.addEventListener("click", function(event){
        event.preventDefault();
        if(event.target.matches("button")){
            //when an answer button is pressed keep tally of the score and 
            //pass it along to viewHighScore          
        }
    })
}

function viewHighScore(){

}

//list of questions and answers
var quizQuestions = [
    {
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

console.log(quizQuestions[questionIndex].answers.length)