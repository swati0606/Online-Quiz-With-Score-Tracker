const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlin", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "22", "5"],
    correct: 1
  },
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answerBtns = document.querySelectorAll('.answer-btn');
const resultEl = document.getElementById('result');

function loadQuiz() {
  clearResult();
  const current = quizData[currentQuiz];
  questionEl.textContent = current.question;
  answerBtns.forEach((btn, index) => {
    btn.textContent = current.answers[index];
    btn.disabled = false;
    btn.style.background = "#e0e0e0";
  });
}

function selectAnswer(index) {
  const current = quizData[currentQuiz];
  answerBtns.forEach(btn => btn.disabled = true);
  if (index === current.correct) {
    score++;
    answerBtns[index].style.background = "#4CAF50"; // green
  } else {
    answerBtns[index].style.background = "#f44336"; // red
    answerBtns[current.correct].style.background = "#4CAF50"; // correct one
  }
}

function nextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz').innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your Score: ${score} / ${quizData.length}</p>
    <button onclick="location.reload()">Try Again</button>
  `;
}

function clearResult() {
  resultEl.textContent = '';
}

loadQuiz();
