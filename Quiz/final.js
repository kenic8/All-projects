// Jeg opsætter de variabler jeg gerne vil bruge i JS
var questionID,
  question,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  userChoice,
  questions,
  numQuestions,
  qInfo,
  current = 0,
  score = 0,
  points = [];

// her har jeg en række spørgsmål, som bruges i quizzen
var defaultQuestions = [
  {
    question: "Hvor er de 3 mindste knogler i kroppen?",
    choiceA: "Øret",
    choiceB: "næsen",
    choiceC: "Tæerne",
    choiceD: "Øjnene",
    correct: "A"
  },
  {
    question: "Hvilket elememt findes der mest af i verden",
    choiceA: "Helium",
    choiceB: "Oxygen",
    choiceC: "Lithium",
    choiceD: "Hydrogen",
    correct: "D"
  },
  {
    question: "Hvor lang tid tager det for solens stråler at nå jorden?",
    choiceA: "8 dage",
    choiceB: "8 sekunder",
    choiceC: "8 minuter",
    choiceD: "8 timer",
    correct: "C"
  },
  {
    question: "hvad er  10/2?",
    choiceA: "5",
    choiceB: "2",
    choiceC: "8",
    choiceD: "9",
    correct: "A"
  },
  {
    question: "Hvilken planet har flest måner?",
    choiceA: "Saturn",
    choiceB: "Mars",
    choiceC: "Jupiter",
    choiceD: "Uranus",
    correct: "C"
  }
];

// Henter mine html dokumenter jeg vil impelemtere dater i
var elQuiz = document.getElementById("quiz");
var elQuizStatus = document.getElementById("quizStatus");

var elQuestion = document.getElementById("question");
var elChoiceA = document.getElementById("choiceA");
var elChoiceB = document.getElementById("choiceB");
var elChoiceC = document.getElementById("choiceC");
var elChoiceD = document.getElementById("choiceD");
var elChoices = document.getElementsByName("choices");

// Her starter quizzen
populateQuestions();
renderQuestion();
document.getElementById("submit").onclick = gradeQuestion;

function populateQuestions() {
  // Jeg "fylder" spørgsmål på med populate funktionen
  questions = defaultQuestions;
  // Her bruges localstorage til at tilføje spørgsmål hvis der nogle tilstede
  if (localStorage.getItem("questions")) {
    var storedQuestions = JSON.parse(localStorage.getItem("questions"));
    for (var i = 0; i < storedQuestions.length; i++) {
      questions.push(storedQuestions[i]);
    }
  }
  numQuestions = questions.length;
}

function populateQuestionInfo() {
  question = questions[current].question;
  qInfo = questions[current];
  choiceA = qInfo.choiceA;
  choiceB = qInfo.choiceB;
  choiceC = qInfo.choiceC;
  choiceD = qInfo.choiceD;
  correct = qInfo.correct;
}

function renderQuestion() {
  questionID = current + 1;
  elQuizStatus.innerHTML = "Spørgsmål " + questionID + " af " + numQuestions;
  populateQuestionInfo();
  elQuestion.innerHTML = question;
  elChoiceA.innerHTML = choiceA;
  elChoiceB.innerHTML = choiceB;
  elChoiceC.innerHTML = choiceC;
  elChoiceD.innerHTML = choiceD;
}

function gradeQuestion() {
  if (getUserChoice()) {
    if (userChoice == questions[current].correct) {
      score++;
      points[current] = 1;
    } else {
      points[current] = 0;
    }

    if (current == questions.length - 1) {
      endGame();
    } else {
      // Hopper til næste spørgsmål
      current++;
      renderQuestion();
    }
  }
}

function getUserChoice() {
  for (var i = 0, length = elChoices.length; i < length; i++) {
    if (elChoices[i].checked) {
      userChoice = elChoices[i].value;

      // Jeg clare mit radio array, så der er klar til næste spørgsmål
      elChoices[i].checked = false;

      return true;
    }
  }
  // Hvis der ikke en et svar, bliver user spurgt om at indtaste et
  alert("Please select an answer before continuing");
  return false;
}

// Her kan du set hvor godt du har klaret dit !
function endGame() {
  elQuiz.innerHTML =
    "<h2>Din Score: " + score + " ud af " + numQuestions + "</h2>";
  for (var i = 0; i < points.length; i++) {
    var summary = document.createElement("p");
    if (points[i] == 0) {
      summary.innerHTML = "Question #" + (i + 1) + ": FORKERT";
      summary.style.color = "red";
    } else {
      summary.innerHTML = "Question #" + (i + 1) + ": RIGTIGT!";
      summary.style.color = "green";
    }
    elQuiz.appendChild(summary);
  }
  document.getElementById("options").style.display = "block";
}
