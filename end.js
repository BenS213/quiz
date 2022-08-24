var btnRetake = document.getElementById("retakeQuiz");
var btnSave = document.getElementById("save");
var scoreDisplay = document.getElementById("scoreDisplay");
var mostRecentScore = localStorage.getItem("score");
var username = document.getElementById("username");
const highScores = localStorage.getItem("score");
// var scoreObj = localStorage.getItem('scoreObj')
var allScores = JSON.parse(localStorage.getItem('allScores')) || [];
btnSave.addEventListener("click", saveScore);

// sets the inner text of the header your score
scoreDisplay.innerText = "your score: " + mostRecentScore;

// a function that saves your username and score into an object and sets that object to local storage
function saveScore(e) {
  e.preventDefault();
  if(!username.value){
    window.alert('please enter a username');
    return
  }else {
const scoreObj = {
    score: mostRecentScore,
    name: username.value,
  };
  allScores.push(scoreObj);

  allScores.sort( (a,b) => b.score - a.score)
  
 localStorage.setItem('allScores', JSON.stringify(allScores))
  window.location.href = "score.html";

  }
}
