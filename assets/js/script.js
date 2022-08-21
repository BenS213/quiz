// query selectors
var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var choicesArr = Array.from(choices);
var inputs = document.querySelectorAll(".choice-input");
const btn = document.querySelector(".btn");

var currentQuestion = {};
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var selectedChoice;
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

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

var startGame = function () {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  resetClasses();
};

var getNewQuestion = function () {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
};


for (const input of inputs) {
  input.addEventListener("change", selectChoice);
}
function selectChoice(e) {
  for (const input of inputs) {
    input.nextElementSibling.classList.remove("selected");
    if (this.checked) {
      this.nextElementSibling.classList.add("selected");
      selectedChoice = this.dataset.number;
    }
  }
}

var resetClasses = function () {
  for (let i; i < inputs.length; i++) {
    console.log(inputs[0]);
    inputs[i].checked = false;
    choices[i].classList.remove('selected')
  }

};


var submit = function () {
  if (selectedChoice == currentQuestion.answer) {
    console.log("true");
    score++;
    console.log(inputs);
    resetClasses();
    getNewQuestion();
  } else {
    console.log("false");
  }
};
startGame();
