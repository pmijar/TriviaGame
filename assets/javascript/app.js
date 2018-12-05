// Trivia Game

// Create an Question/Answer Object Array with each object a Key Value pair. The Key should contain Question, Answer and Options.
// question Key would have the Question text as the value
// answer Key would have the Answer Text as the value
// options Key is the array of string. It presents the user with 4 answer option.

// Write a timer function to count down from the requested time variable, 
// The Timer count down value for the question should be displayed to the user in Row #2 of index page
// The callback function when the timer goes to zero should be userAnswerMessage(), which displays the correct answer for a few seconds (using timer)
// Once the userAnswerMessage() is displayed to the user it should call the next question.


// Create an Question/Answer single Object with Key Value pair. The Key should contain Question, Answer and Options.

var QA_Object = [{
    question:"What was Mohammed Ali’s birth name?",
    answer: "Cassius Clay",
    options:["Mohammed Ali","Newton Clay","Cassius Clay","John Clayton"]
},
{
    question:"Which planet is the closest to Earth?",
    answer: "Venus",
    options:["Venus","Mars","Mercury","Saturn"]
},
{
    question:"Which sign of the zodiac is represented by the ram?",
    answer: "Aires",
    options:["Libra","Taurus","Capricorn","Aires"]
},
{
    question:"How many strings does a violin have?",
    answer: "Four",
    options:["Three","Four","Five","Six"]
},
{
    question:"Mount Everest is found in which mountain range?",
    answer: "Himalayas",
    options:["Andes","Sahyadri","Himalayas","Tibetian"]
},
{
    question:"What color is the circle on the Japanese national flag?",
    answer: "Red",
    options:["White","Red","Blue","Black"]
}
]

var QUESTION_TIMER_COUNT = 10;


var number = QUESTION_TIMER_COUNT; //  Set our number counter.
var intervalId; //  Variable that will hold our interval ID when we execute the "run" function
var QA_Index = 0; // Selected Question Answer next Index
var correctAnswer = 0; // Answered Correct counter
var inCorrectAnswer = 0; // Answered inCorrectly counter
var unAnswered = 0; // unAnswered counter
var toggleStart = true; // whether we are loading the page for the first time 
var count = QA_Object.length // no of questions

$(document).ready(function() {

clearDisplay();
 
if(toggleStart){
    $("#game_container").hide();
    $("button").show();
}
else{
    if(count<0){
        // Display Score Stats
        toggleStart = true;
        alert("Game Over !!!");
    }
    else{
    nextQA();
    }
}




$("#start").on("click", function(){
    $("button").hide();    
    $("#game_container").show();   
    toggleStart=false;
    nextQA();
})

$("#OptionDisplay").on("click", "li", function(){
    if($(this).text() === QA_Object[QA_Index-1].answer){
        $("#Message").append("You are correct, the answer is " + QA_Object[QA_Index-1].answer);
        correctAnswer++;
    }
    else
    {
        $("#Message").append("Sorry wrong answer, the correct answer is " + QA_Object[QA_Index-1].answer);
        inCorrectAnswer++;
    }
   // 1. Stop the decrement counter
    stop();
   // 2. Initilaize the number counter for the next Question Answer
    number = QUESTION_TIMER_COUNT;
   // 3. call the nextQA() function for the next question after we display the message
    setTimeout(nextQA, 1000 * 3);
})





})

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  
//  The decrement function.
function decrement() {
    number--; //  Decrease number by one.
      //  Display in Webpage
      $("#TimerDisplay").empty();
      $("#TimerDisplay").append("Time Remaining : "+number);

      //  Once number hits zero.. actions to be executed
      if (number === 0) {
            // 1. call the stop() function to reset the interval Id
            stop();
            // 2. Reset the Timer Count;
            number = QUESTION_TIMER_COUNT;
            $("#Message").append("Answer is : "+QA_Object[QA_Index-1].answer);
            // 3. Update the un answered count;
            unAnswered++;
            // 4. call the nextQA() function for the next question after we display the message
            setTimeout(nextQA, 1000 * 3);
        }
    }

    function stop() {
        //  Clears our intervalId. We just pass the name of the interval to the clearInterval function.
        clearInterval(intervalId);
      }



    function nextQA(){
        if(count <= 0){
            toggleStart = true;
            stop();
            clearDisplay();
            console.log("NEXTQA() Inside COUNT <= 0");
            var correctAns = $("<div>");
            var inCorrectAns = $("<div>");
            var unAns = $("<div>");
            $("button").text("Start Over");
            $("button").show();
            $("#Message").empty();
            correctAns.text("Number of correct answers :: " + correctAnswer);
            inCorrectAns.text("Number of incorrect answers :: " + inCorrectAnswer);
            unAns.text("Questions not answered :: " + unAnswered);
            $("#Message").append(correctAns).append(inCorrectAns).append(unAns);
            resetGame();
        }
        else {
        clearDisplay();
        console.log(QA_Index+ " :: "+ QA_Object[QA_Index].question);
        var question = "<div>"+QA_Object[QA_Index].question+"<div>";
        $("#QuestionDisplay").html(question);
        //Display the options available for this Question
        for(var i = 0; i < QA_Object[QA_Index].options.length; i++){
            var optionsAns = $("<li>");
           // optionsAns.attr("class","answerOptions");
          //  optionsAns.attr("dataVal", i);
            optionsAns.text(QA_Object[QA_Index].options[i]);      
            $("#OptionDisplay").append(optionsAns);
            console.log(QA_Object[QA_Index].options[i]);
        }
        run();
        QA_Index++;
        count--;
    }
}

    function clearDisplay(){
        $("#TimerDisplay").empty();
        $("#OptionDisplay").empty();
        $("#QuestionDisplay").empty();
        $("#Message").empty();
    }

    function resetGame(){
        number = QUESTION_TIMER_COUNT; 
        QA_Index = 0; 
        correctAnswer = 0; 
        inCorrectAnswer = 0;
        unAnswered = 0; 
        toggleStart = true; // whether we are loading the page for the first time 
        count = QA_Object.length // no of questions       
    }