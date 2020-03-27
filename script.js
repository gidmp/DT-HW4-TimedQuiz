//question list
var quizQuestions = [{
    question: "up dog?",
    answers: [
        "what is up dog?",
        "what?",
        "the numbers mason, what do they mean?",
        "hotdog",
    ],   
    correct : "what is up dog?"     
}, {
    question: "Which one of these are not the fellowship of the ring",
    answers: [
        "Frodo",
        "Gandalf",
        "Bilbo",
        "Gimli",
    ],   
    correct : "Bilbo"     
}, {
    question: "Which one of this is not a HTML element",
    answers: [
        "HTML",
        "div",
        "head",
        "time",
    ],   
    correct : "time"     
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
var score = 0;
var secondsLeft =99;

startButton.addEventListener("click", startQuiz);
//add submit highscore and view highscore button
//add choosing answer button to go to next question

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
            viewGameOverScreen();  
        }
    }, 1000);
    //if secondsLeft === 0 show a gameover and retry screen
    
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

function showQuestion(){
    questionEl.textContent = quizQuestions[questionIndex].question;
    for(var i = 0; i < quizQuestions[questionIndex].answers.length; i++){
        var ansBtn = document.createElement("button");
        answerButtonEl.appendChild(ansBtn);
        ansBtn.setAttribute("class", "block btn btn-primary ansBtn")
        ansBtn.textContent = quizQuestions[questionIndex].answers[i];
    }
    nextQuestion();

}

function nextQuestion(event){
    //when an answer button is pressed, move on to the next question
    //if out of question go to game over screen
    //use event delegation to pass an eventlistener to the children
    document.querySelectorAll(".ansBtn").forEach(ans =>{
        ans.addEventListener("click", function(){
            questionIndex++;
            answerButtonEl.innerHTML = "";
            if(questionIndex < quizQuestions.length){
                showQuestion();
            }else{
                viewGameOverScreen();
            }
        })
    })

}

function checkAnswer(){
    //when an answer button is pressed keep tally of the score and 
    //pass it along to viewHighScore
    //if the value inside the button === quizQuestion[i].correct score++

}

function viewGameOverScreen(){
    showHide(gameOverScreen,getQuiz);
}

function viewHighScore(){
    showHide(highScoreScreen,gameOverScreen);
    showHide(highScoreScreen,getQuiz);
    showHide(highScoreScreen,startButton);

}

//list of questions and answers

console.log(answerButtonEl.children[questionIndex]);
console.log(quizQuestions[questionIndex]);
console.log(questionIndex);
console.log(quizQuestions.length);
