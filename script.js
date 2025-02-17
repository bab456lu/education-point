// Quiz Data
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        answers: ["Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5"],
        correctAnswer: "4"
    }
];

let currentQuestionIndex = 0;

// DOM Elements
const questionElement = document.getElementById('question');
const answer1Button = document.getElementById('answer1');
const answer2Button = document.getElementById('answer2');
const answer3Button = document.getElementById('answer3');
const resultElement = document.getElementById('result');

// Load the first question
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answer1Button.textContent = currentQuestion.answers[0];
    answer2Button.textContent = currentQuestion.answers[1];
    answer3Button.textContent = currentQuestion.answers[2];
}

// Check the answer
function checkAnswer(selectedAnswer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong! The correct answer is " + currentQuestion.correctAnswer;
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        setTimeout(loadQuestion, 1000); // Wait 1 second before loading the next question
    } else {
        setTimeout(() => {
            resultElement.textContent = "Quiz completed!";
        }, 1000);
    }
}

// Event listeners for buttons
answer1Button.addEventListener('click', () => checkAnswer(answer1Button.textContent));
answer2Button.addEventListener('click', () => checkAnswer(answer2Button.textContent));
answer3Button.addEventListener('click', () => checkAnswer(answer3Button.textContent));

// Initialize the quiz
loadQuestion();