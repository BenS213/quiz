// query selectors
var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var choicesArr = Array.from(choices);
var inputs = document.querySelectorAll(".choice-input");
const btnNextQuestion = document.querySelector(".nextQuestion");

var currentQuestion = {};
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var selectedChoice;
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

// array of questions, choices, and the correct answer contained in their respective object
var questions = [
  {
    question: "What is 2 + 2?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 4,
  },
  {
    question: "What is the capitol of Alabama?",
    choice1: "Montgomery",
    choice2: "Florence",
    choice3: "Birmingham",
    choice4: "Tuscaloosa",
    answer: 1,
  },
  {
    question: "How tall am I?",
    choice1: "2 feet",
    choice2: "5 feet",
    choice3: "6 feet",
    choice4: "10 feet",
    answer: 3,
  },
  {
    question: "Does mac and cheese taste good?",
    choice1: "maybe",
    choice2: "no",
    choice3: "sometimes",
    choice4: "definitely",
    answer: 4,
  },
  {
    question: "Is Ben really cool?",
    choice1: "yes",
    choice2: "sure",
    choice3: "maybe",
    choice4: "nope",
    answer: 1,
  },
];

// start game function: resets the question counter and score each time the quiz resets
var startGame = function () {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  resetClasses();
};

// getNewQuestion gets a random question from the questions array and increments the question counter
var getNewQuestion = function () {
  btnNextQuestion.removeEventListener("click", getNewQuestion);
  btnNextQuestion.classList.add('disabled')

  resetClasses();
  for (var input of inputs) {
    input.addEventListener("click", selectHandler);
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // populates the innertext of choices with the corresponding choices from the question array
  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  // removes the current question from the list of available questions so it isn't repeated
  availableQuestions.splice(questionIndex, 1);
};

// adds a listener to each radio button and runs the function selectedChoice when one of the radio buttons is clicked
for (const input of inputs) {
  input.addEventListener("click", selectHandler);
}

// selectHandler: first it removes the selected class from all of the available choices, then it adds the class ('.selected') to the checked radio button; finally, it set the dataset number of the selected choice to the variable selectedChoice.
function selectHandler(e) {
  for (const input of inputs) {
    input.nextElementSibling.classList.remove("selected");
    if (this.checked) {
      this.nextElementSibling.classList.add("selected");
    }
    selectedChoice = parseInt(this.dataset.number);
  }
}
// resets all classes and radio buttons for next question
var resetClasses = function () {
  for (const input of inputs) {
    input.checked = false;
    input.nextElementSibling.classList.remove(
      "selected",
      "correct",
      "incorrect"
    );
  }
};

// when submit button is clicked, the score is incremented, the classes/radio buttons are reset,
var submit = function () {
  if (selectedChoice == currentQuestion.answer) {
    score++;
    choices[selectedChoice - 1].classList.add("correct");

    for (let input of inputs) {
      input.removeEventListener("click", selectHandler);
    }

    btnNextQuestion.addEventListener("click", getNewQuestion);
    btnNextQuestion.classList.remove('disabled')
  } else if (selectedChoice == undefined) {
    window.alert("please select an answer");
  } else {
    choices[currentQuestion.answer - 1].classList.add("correct");
    choices[selectedChoice - 1].classList.add("incorrect");
    for (let input of inputs) {
      input.removeEventListener("click", selectHandler);
    }
    btnNextQuestion.addEventListener("click", getNewQuestion);
    btnNextQuestion.classList.remove('disabled')
  }  console.log(score)
};

startGame();
