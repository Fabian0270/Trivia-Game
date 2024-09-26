const questions = [
    "What's the capital of France?", 
    "Who painted the Mona Lisa?", 
    "What is the largest planet in our solar system?", 
    "Who wrote 'To Kill a Mockingbird'?", 
    "What is the chemical symbol for gold?",
    "What is the smallest country in the world?", 
    "Who developed the theory of relativity?", 
    "Which element has the atomic number 1?", 
    "What is the hardest natural substance on Earth?", 
    "Who is known as the 'Father of Computers'?"
];

const choicesArray = [
    ["Paris", "London", "Berlin", "Madrid"], 
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], 
    ["Earth", "Mars", "Jupiter", "Saturn"], 
    ["Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway"], 
    ["Au", "Ag", "Pb", "Fe"],
    ["Vatican City", "Monaco", "Nauru", "San Marino"],
    ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
    ["Gold", "Iron", "Diamond", "Platinum"],
    ["Charles Babbage", "Alan Turing", "John von Neumann", "George Boole"]
];

const correctAnswers = [
    "Paris", 
    "Da Vinci", 
    "Jupiter", 
    "Harper Lee", 
    "Au",
    "Vatican City", 
    "Albert Einstein", 
    "Hydrogen", 
    "Diamond", 
    "Charles Babbage"
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestionIndex];
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`choice${i+1}`);
            btn.innerHTML = choicesArray[currentQuestionIndex][i];
            btn.value = choicesArray[currentQuestionIndex][i];
        }
        document.getElementById('currentScore').innerHTML = `Current Score: ${score}`;
    } else {
        document.getElementById('result').innerHTML =
          `You scored ${score} out of ${questions.length}!`;
        document.getElementById('question').innerHTML = "";
        document.getElementById('choices').innerHTML = "";
        document.getElementById('currentScore').innerHTML = '';
    }
}

function checkAnswer(btn) {
    if (btn.value === correctAnswers[currentQuestionIndex]) {
        score++;
        currentQuestionIndex++;
        displayQuestion();
    } else {
        document.getElementById('retryBtn').style.display = 'block';
        document.getElementById('choices').style.display = 'none';
    }
}

function retryQuestion() {
    document.getElementById('retryBtn').style.display = 'none';
    document.getElementById('choices').style.display = 'block';
}

displayQuestion();