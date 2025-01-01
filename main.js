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
        question: "Welche Verben sind mit Dativ?",
        answers: [
            { text: "Gratulieren", correct: true },
            { text: "brauchen", correct: false },
            { text: "trinken", correct: false },
            { text: "feiern", correct: false }
        ]
    }
];

const questionElement = document.getElementById("fragen");
const answerButtons = document.getElementById("antworts");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Countdown timer variables
let timeLeft = 15; // Temps pour chaque question
const timerElement = document.getElementById("time-left");
const timerEl = document.getElementById("timer");
let timerInterval; // Intervalle pour le timer

// Fonction pour démarrer le timer
function startTimer() {
    clearInterval(timerInterval); // Réinitialiser tout timer existant
    timeLeft = 15; // Réinitialiser le temps pour la nouvelle question
    timerElement.innerHTML = timeLeft; // Afficher le temps initial
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval); // Arrêter le timer
            showCorrectAnswers(); // Afficher les bonnes réponses automatiquement
            nextButton.style.display = "block"; // Afficher le bouton suivant
        }
    }, 1000); // Décompte toutes les secondes
}

// Fonction pour arrêter le timer
function stopTimer() {
    clearInterval(timerInterval); // Arrêter l'intervalle
}

// Fonction pour afficher automatiquement les bonnes réponses
function showCorrectAnswers() {
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true; // Désactiver tous les boutons
    });
}

// Fonction pour mélanger les questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Fonction pour démarrer le quiz
function startQuiz() {
    shuffleQuestions(); // Mélange les questions
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Nächste";
    showQuestion();
}

// Fonction pour afficher une question
function showQuestion() {
    resetState(); // Réinitialiser l'état précédent
    const currentQuestion = questions[currentQuestionIndex];
    const fullQuestion = currentQuestionIndex + 1 + ". " + currentQuestion.question;

    // Effet machine à écrire pour afficher la question
    typeWriterEffect(fullQuestion, questionElement, 50, () => {
        displayButtonsWithAnimation(currentQuestion.answers); // Afficher les boutons après la question
        timerEl.style.display = "block"; // Afficher le timer après la question
        startTimer(); // Démarrer le compteur après affichage des réponses
    });
}

// Fonction pour réinitialiser l'état
function resetState() {
    stopTimer(); // Arrêter le timer existant
    nextButton.style.display = "none";
    timerEl.style.display = "none"; // Cacher le timer
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Effet machine à écrire pour les questions
function typeWriterEffect(text, element, delay = 50, callback = null) {
    element.innerHTML = ""; // Réinitialise le contenu
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else if (callback) {
            callback(); // Appelle le callback une fois l'animation terminée
        }
    }
    type();
}

// Affichage des boutons avec animation
function displayButtonsWithAnimation(answers) {
    answers.forEach((answer, index) => {
        setTimeout(() => {
            const button = document.createElement("button");
            button.classList.add("btn");
            button.innerHTML = answer.text;
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);

            // Ajout d'une animation CSS personnalisée
            button.style.animation = `drop ${0.5 + index * 0.2}s ease`;
        }, index * 1000); // Délai entre chaque bouton (400ms entre chaque ajout)
    });
}

// Fonction pour sélectionner une réponse
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

    stopTimer(); // Arrêter le timer une fois qu'une réponse est sélectionnée
    nextButton.style.display = "block";
}

// Affichage du score final
function showScore() {
    resetState();
    questionElement.innerHTML = "Ihre Endpunktzahl beträgt " + ((score * 100) / questions.length).toFixed(2) + "% von insgesamt " + 100 + "%!";
    nextButton.innerHTML = "Neustarten";
    nextButton.style.display = "block";
}

// Gérer le clic sur le bouton suivant
function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextQuestion();
    } else {
        startQuiz();
    }
});

// Démarrer le quiz
startQuiz();
