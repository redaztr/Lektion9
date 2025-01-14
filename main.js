const questions = [
    {
        question: "Herzlich Glückwunsch ..... Geburtstag.",
        answers: [
            { text: "Zu", correct: false },
            { text: "Zur", correct: false },
            { text: "Zum", correct: true },
            { text: "Zu den", correct: false }
        ]
    },
    {
        question: "Alles gut zur ....",
        answers: [
            { text: "Hochzeit", correct: true },
            { text: "Geburtstag", correct: false },
            { text: "Kindergeburtstag", correct: false },
            { text: "Examen", correct: false }
        ]
    },
    {
        question: "Ich gratuliere .... ganz herzlich zum Bachelor geschafft.",
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
    },
    {
        question: "Was bedeuten diese Emogis 🎉🎄🎅? ",
        answers: [
            { text: "Weihnachten", correct: true },
            { text: "Ostern", correct: false },
            { text: "Dankfest", correct: false },
            { text: "Feier", correct: false }
        ]
    },
    {
        question: "Was bedeuten diese Emogis 👨‍🎓🏫📝? ",
        answers: [
            { text: "Weihnachten", correct: false },
            { text: "Hochzeit", correct: false },
            { text: "Geburtstag", correct: false },
            { text: "Studienabschluss", correct: true }
        ]
    },
    {
        question: "Was ist die Plural von Bär? ",
        answers: [
            { text: "Bärn", correct: false },
            { text: "Bären", correct: true },
            { text: "Bäre", correct: false },
            { text: "Bär", correct: false }
        ]
    },
    {
        question: "Ich schencke .... Vater .... Armbanduhr ",
        answers: [
            { text: "meinem/eine", correct: true },
            { text: "meinem/einen", correct: false },
            { text: "meiner/eine", correct: false },
            { text: "meiner/einen", correct: false }
        ]
    },
    {
        question: "Warum antwortest du .... nicht?",
        answers: [
            { text: "mich", correct: false },
            { text: "ich", correct: false },
            { text: "mir", correct: true },
            { text: "meinem", correct: false }
        ]},
        {
            question: "Können Sie bitte .... helfen?",
            answers: [
                { text: "mich", correct: false },
                { text: "dir", correct: false },
                { text: "mir", correct: true },
                { text: "ich", correct: false }
            ]
        },
        {
            question: "Was bedeuten diese Emogis 🐑🔪☪? ",
            answers: [
                { text: "Das Opferfest", correct: true },
                { text: "Die Hochzeit", correct: false },
                { text: "Der Geburtstag", correct: false },
                { text: "Haddsch", correct:false }
            ]
        },
        {
            question: "Sie gibt .... mein Buch.",
            answers: [
                { text: "mich", correct: false },
                { text: "mir", correct: true },
                { text: "∅", correct: false },
                { text: "sich", correct: false }
            ]
        },
        {
            question: "Ich habe die Kerze .... ",
            answers: [
                { text: "eingeschaltet", correct: false },
                { text: "angemacht", correct: false },
                { text: "angezündet", correct: true },
                { text: "aufgeschaltet", correct: false }
            ]
        },
        {
            question: "Was ist die Plural von Präsident?",
            answers: [
                { text: "Präsidenten", correct: true },
                { text: "Präsidens", correct: false },
                { text: "Presidents", correct: false },
                { text: "Präsident", correct: false }
            ]
        },
        {
            question: "Die Musik .... mir sehr.",
            answers: [
                { text: "gibt", correct: false },
                { text: "stimmt", correct: false },
                { text: "gefällt", correct: true },
                { text: "leiht", correct: false }
            ]
        },
        {
            question:"Die .... Gäste waren auf dem Geburtstag.",
            answers: [
                { text: "nette", correct: false },
                { text: "nettes", correct: false },
                { text: "netten", correct: true },
                { text: "netter", correct: false }
            ]
        },
        {
            question:"Die .... Hochzeit hat mir sehr gut gefallen.",
            answers: [
                { text: "schöne", correct: true},
                { text: "schöner", correct: false },
                { text: "schönen", correct: false },
                { text: "schones", correct: false }
            ]
        },
        {
            question:"Das Geschenk war für das .... Brautpaar.",
            answers: [
                { text: "gluckliche", correct: true },
                { text: "glucklicher", correct: false },
                { text: "glucklichen", correct: false },
                { text: "gluckliches", correct: false }
            ]
        },
        {
            question:"Er hat die .... Kuchen gebacken.",
            answers: [
                { text: "leckern", correct: false },
                { text: "leckere", correct: false },
                { text: "leckerem", correct: false },
                { text: "leckeren", correct: true }
            ]
        },
        {
            question:"Ich habe .... Party für meine .... Freundin organisiert.",
            answers: [
                { text: "ein/tolle", correct: false },
                { text: "ein/tollen", correct: false },
                { text: "einen/tollen", correct: false },
                { text: "eine/tolle", correct: true }
            ]
        },
        {
            question:"Vorfreude ist .... .... Freude",
            answers: [
                { text: "der schönste", correct: false },
                { text: "die schönste", correct: true },
                { text: "das schönste", correct: false },
                { text: "der schönstere", correct: false }
            ]
        },
        {
            question:"Wir gehen mit den .... ins Kino.",
            answers: [
                { text: "Freunden", correct: true },
                { text: "Freundin", correct: false },
                { text: "Freunde", correct: false },
                { text: "Freund", correct: false }
            ]
        },
        { question: "Ich habe die .... aus der Schule getroffen.",
             answers: [
                 { text: "Bekannten", correct: true },
                 { text: "Bekanten", correct: false },
                 { text: "Bekannt", correct: false },
                 { text: "Bekannter", correct: false }
             ]
        },
        {
            question:"Die .... warten auf ihre Bestellungen.",
            answers: [
                { text: "Kunde", correct: false },
                { text: "Kunden", correct: true },
                { text: "Kundin", correct: false },
                { text: "Kundennen", correct: false }
            ]
        },
        {
            question:"Die .... sind sehr freundlich.",
            answers: [
                { text: "Lehrer", correct: true },
                { text: "Lehreren", correct: false },
                { text: "lehrerinnen", correct: false },
                { text: "lehrerin", correct: false }
            ]
        },
        {
            question:"Ich habe mit den .... gesprochen.",
            answers: [
                { text: "Männer", correct: false },
                { text: "Mann", correct: false },
                { text: "Männeren", correct: false },
                { text: "Männern", correct: true }
            ]
        },
        {
            question: "Die .... aus der Abteilung sind nett.", 
            answers:[   
                {text:"Kollege", correct: false},
                {text:"Kollegen", correct: true},
                {text:"Kolleginen", correct: false},
                {text:"Kollegin", correct: false}
            ]
        },
        {
            question:"Die Kinder spielen mit den .... .",
            answers: [
                { text: "Nachbarn", correct: true },
                { text: "Nachbarin", correct: false },
                { text: "Nachbaren", correct: false },
                { text: "Nachbarnen", correct: false }
            ]
        },
        {
            question:"Die .... sind sehr nett.",
            answers: [
                { text: "Kinder", correct: true },
                { text: "Kind", correct: false },
                { text: "Kinderen", correct: false },
                { text: "Kindinnen", correct: false }
            ]
        },
        {
            question:"Wir haben viele .... eingeladen.",
            answers: [
                { text: "Freund", correct: false },
                { text: "Freunde", correct: true },
                { text: "Freundinnen", correct: false },
                { text: "Freunden", correct: false }
            ]
        }

];

const questionElement = document.getElementById("fragen");
const answerButtons = document.getElementById("antworts");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Countdown timer variables
let timeLeft = 30; // Temps pour chaque question
const timerElement = document.getElementById("time-left");
const timerEl = document.getElementById("timer");
let timerInterval; // Intervalle pour le timer

// Fonction pour démarrer le timer
function startTimer() {
    clearInterval(timerInterval); // Réinitialiser tout timer existant
    timeLeft = 30; // Réinitialiser le temps pour la nouvelle question
    timerElement.innerHTML = verbleibende Zeit; // Afficher le temps initial
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
