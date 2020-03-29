# DT-HW4-TimedQuiz
A timed quiz for the 4th homework of UW coding bootcamp

Homework 4 link: https://gidmp.github.io/DT-HW4-TimedQuiz/

The goal of this homework is to create a time-based quiz with score using only vanilla javascript. This time, the project emphasize on the usage of DOM manipulation and web API. The code was made from scratch and the HTML tempelate used was mostly from bootstrap. The interface is exceedingly simple since I choose to focus more on the javascript part. Here are the simplified steps that I take:
    1. Create CSS and HTML by utilizing bootstrap
    2. Create a list of question by storing the inside an object that is stored within an array
    3. storing all the elements and buttons used inside a variable by latching on their respective classes and Id using .getElementById)()
    4. create variables to store values of time score and question index and add event listeners to the buttons
    5. creating function that runs the timer and have them stop when either the quiz is done or the timer reaches 0
    6. create a function that appends question and their multiple choice into their respective parent element
    7. latch on a value to the correct answer using .setAttribute
    8. create a function that will update question index when user pushed one of the answer button and call it to the function that shows       the question
    9. create the function that will check if user clicked the correct answer by checking if the button have the specific attribute reserved    only for the correct answer. If user clicked the right answer, score will be added, if not, timer will be shaved off by 10 second
    10. create a function that will create a local storage to store user's score and initial that they will input after the quiz is done and display them in a score page







