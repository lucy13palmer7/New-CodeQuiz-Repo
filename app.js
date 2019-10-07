console.log("hello");
var counter = 0;
var timeleft = 240;
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionsIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionsIndex = 0;
  questionContainerElement.classList.remove("hide");
  function setup() {
    var timer = select("#timer");
    timer.innerHTML(convertSeconds(timeleft - counter));
    function timeIt() {
      counter++;
      timer.innerHTML(timeleftcounter);
    }
    setInterval(timeIt, 1000);
    function convertSeconds(s) {
      var min = floor(s / 60);
      var sec = s % 60;
      return nf(min, 2) + ":" + nf(sec, 2);
    }
  }
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionsIndex]);
}
function showQuestion(questions) {
  questionElement.innerText = question.question;
  question.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(firstChild);
  }
}

function selectAnswer() {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionsIndex + 1) {
    nextButton.classList.remove("hide");
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    questions: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false }
    ]
  },
{
    questions: "The condition in an if / else statement is enclosed within ____.",
    answers: [
        { text: "quotes", correct: false},
        { text: "curly brackets", correct: false},
        { text: "parentheses", correct: true},
        { text: "square brackets", correct: false}
    ]  
},
{ 
    question: " Do all HTML tags need a closing tag?",
    answers: [
        { text: "yes", correct: false },
        { text: "no", correct: true },
    ]
},
{
    question: "Which tag do you use to link an HTML file with a CSS file?",
    answer: [
        { text: "<div>", correct: false },
        { text: "<p>", correct: false },
        { text: "<li>", correct: false },
        { text: "<link>", correct: true },
    ]
}]
