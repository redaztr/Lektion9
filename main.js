const questions = [
    {
        question: "Herzlich Glückwunsch . . . . . Geburtstag.",
        answers: [
            { text: "Zu", correct: false },
            { text: "Zur", correct: false },
            { text: "Zum", correct: true },
            { text: "Zu den", correct: false }
        ]
    },
    {
        question: "Alles gut zur . . . . .",
        answers: [
            { text: "Hochzeit", correct: true },
            { text: "Geburtstag", correct: false },
            { text: "Kindergeburtstag", correct: false },
            { text: "Examen", correct: false }
        ]
    },
    {
        question: "Ich gratuliere . . . . . ganz herzlich zum Bachelor geschafft.",
        answers: [
            { text: "Dich", correct: false },
            { text: "Sich", correct: false },
            { text: "Dir", correct: true },
            { text: "Du", correct: false }
        ]
    },
    {
        question: "ein ..... Glückwunsch ",
        answers: [
            { text: "Großen", correct: false },
            { text: "Große", correct: false },
            { text: "Großes", correct: true },
            { text: "Großer", correct: false }
        ]
    }
];

const questionElement = document.getElementById("fragen");
const answerButtons = document.getElementById("antworts");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "nächste";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = "Ihre Endpunktzahl beträgt " + (score * 100) / questions.length + "% von insgesamt " + 100 + "%!";
    nextButton.innerHTML = "Recommencer";
    nextButton.style.display = "block";
 }
function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length ) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextQuestion();
    }else{
        startQuiz();
    }

});
// Démarrer le quiz
startQuiz();