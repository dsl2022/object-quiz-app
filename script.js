// JavaScript code for the game
const question = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const answerButtons = document.querySelectorAll('.answer-button');
const feedback = document.getElementById('feedback');
const questions = [
  {
    question: 'What is an object in JavaScript?',
    answers: [
      {text: 'A type of function', correct: false},
      {text: 'A data type that represents a collection of values', correct: true},
      {text: 'A type of variable', correct: false},
      {text: 'A programming language', correct: false}
    ]
  },
  {
    question: 'What is the syntax for creating an empty object in JavaScript?',
    answers: [
      {text: 'const obj = []', correct: false},
      {text: 'const obj = {}', correct: true},
      {text: 'const obj = () => {}', correct: false},
      {text: 'const obj = null', correct: false}
    ]
  },
  {
    question: 'What is the syntax for adding a property to an object in JavaScript?',
    answers: [
      {text: 'obj.property = value;', correct: true},
      {text: 'obj.property(value);', correct: false},
      {text: 'obj.setProperty(value);', correct: false},
      {text: 'obj.addProperty(value);', correct: false}
    ]
  },
  {
    question: 'What is the syntax for deleting a property from an object in JavaScript?',
    answers: [
      {text: 'delete obj.property;', correct: true},
      {text: 'obj.deleteProperty(value);', correct: false},
      {text: 'obj.removeProperty(value);', correct: false},
      {text: 'obj.unsetProperty(value);', correct: false}
    ]
  },
  {
    question: 'What is the difference between dot notation and bracket notation in JavaScript object property access?',
    answers: [
      {text: 'Dot notation uses a string to access a property, while bracket notation uses a literal property name', correct: false},
      {text: 'Dot notation is used for arrays, while bracket notation is used for objects', correct: false},
      {text: 'Dot notation uses a literal property name, while bracket notation uses a string or expression to access a property', correct: true},
      {text: 'Dot notation is faster than bracket notation', correct: false}
    ]
  }
];

let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
const currentQuestion = questions[currentQuestionIndex];
question.textContent = currentQuestion.question;
currentQuestion.answers.forEach((answer, index) => {
answerButtons[index].textContent = answer.text;
answerButtons[index].dataset.correct = answer.correct;
});
}

// Function to check the answer
function checkAnswer(event) {
event.preventDefault();
const selectedButton = event.target;
const isCorrect = selectedButton.dataset.correct === 'true';
if (isCorrect) {
feedback.textContent = 'Correct!';
} else {
feedback.textContent = 'Incorrect. Please try again.';
}
answerButtons.forEach(button => {
button.disabled = true;
if (button.dataset.correct === 'true') {
button.classList.add('correct');
} else {
button.classList.add('incorrect');
}
});
}

// Function to go to the next question
function nextQuestion() {
currentQuestionIndex++;
if (currentQuestionIndex >= questions.length) {
currentQuestionIndex = 0;
}
answerButtons.forEach(button => {
button.disabled = false;
button.classList.remove('correct', 'incorrect');
});
displayQuestion();
feedback.textContent = '';
}

// Display the first question
displayQuestion();

// Add click event listeners to answer buttons
answerButtons.forEach(button => {
button.addEventListener('click', checkAnswer);
});

// Add click event listener to the question div
question.addEventListener('click', nextQuestion);