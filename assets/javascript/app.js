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
}
]

//  Set our number counter.
var number = 50;

//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;

// Selected Question Answer next Index
var QA_Index;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  
//  The decrement function.
function decrement() {
//  Decrease number by one.
    number--;

      //  Show the number in the #show-number tag.
      $("#TimerDisplay").empty();
      $("#TimerDisplay").append(number);
      //  Once number hits zero...
      if (number === 0) {
//Trigger the next Question
        stop();

      }
    }

    function stop() {

        //  Clears our intervalId. We just pass the name of the interval to the clearInterval function.
        clearInterval(intervalId);
      }

  //  run();
   nextQA();

    function nextQA(){

        //Run the stop function to clear the timer 
        //stop()
        //clearDisplay();
        QA_Index = Math.floor(Math.random()*QA_Object.length);
        var QuestionDisplay = $("<div>");
        QuestionDisplay.text("HELLO!!!!");
        alert(QA_Index+ " :: "+ QA_Object[QA_Index].question);
        $("#QuestionDisplay").append("HELLO HI@@@@@@");
        //Display the options available for this Question
        for(var i = 0; i < QA_Object[QA_Index].options.length; i++){
            $("#OptionDisplay").append(QA_Object[QA_Index].options[i]);
            console.log(QA_Object[QA_Index].options[i]);

        }

        

    }

    function clearDisplay(){
        $("#OptionDisplay").empty();
        $("#QuestionDisplay").empty();
        $("#Message").empty();
    }


