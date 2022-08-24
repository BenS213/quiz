var scoreList = document.querySelector(".score-list");
var allScores = JSON.parse(localStorage.getItem('allScores'));

function addScore() {

// look through allScores and list them all out as list elements on the scores page
for (i = 0; i < allScores.length; i++){  
  var scoreEl = document.createElement("li");
  scoreEl.setAttribute("class", "list-item");
  scoreEl.innerText = allScores[i].name + " - " + allScores[i].score;
  scoreList.appendChild(scoreEl);
}
// set the updated allScores value, which included the latest score, to local storage so that the next time the quiz is taken, all the scores will be displayed
}
addScore();

