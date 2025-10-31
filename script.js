const choix = document.getElementsByClassName('choix');
const bottonChoix = document.getElementsByClassName('button-choix');
const question = document.getElementsByClassName('question');
const textChoix = document.getElementsByClassName('text-choix');
const nombreQuestion = document.getElementsByClassName('nombre-question');
const point = document.getElementsByClassName('point');

let currentQuestion = 1;
let score = 0;

const Questions = {
    question1: {
        question: "Que signifie HTML ?",
        choix: {
            A: "Hyper Text",
            B: "High Tool",
            C: "Home Template",
            D: "Hyper Transfer"
        },
        reponseCorrecte: "A"
    },

    question2: {
        question: "Couleur par défaut body ?",
        choix: {
            A: "Blanc",
            B: "Noir",
            C: "Gris",
            D: "Rouge"
        },
        reponseCorrecte: "A"
    },

    question3: {
        question: "CSS signifie ?",
        choix: {
            A: "Cascading Style",
            B: "Color Style",
            C: "Custom Script",
            D: "Code Style"
        },
        reponseCorrecte: "A"
    },

    question4: {
        question: "Balise paragraphe ?",
        choix: {
            A: "<p>",
            B: "<h1>",
            C: "<div>",
            D: "<span>"
        },
        reponseCorrecte: "A"
    },

    question5: {
        question: "JS est utilisé pour ?",
        choix: {
            A: "Interactivité",
            B: "Structure",
            C: "Style",
            D: "Images"
        },
        reponseCorrecte: "A"
    },

    question6: {
        question: "Sélecteur id CSS ?",
        choix: {
            A: "#id",
            B: ".class",
            C: "*",
            D: "div"
        },
        reponseCorrecte: "A"
    },

    question7: {
        question: "Événement click JS ?",
        choix: {
            A: "onclick",
            B: "onhover",
            C: "onchange",
            D: "onload"
        },
        reponseCorrecte: "A"
    },

    question8: {
        question: "Comment lier CSS ?",
        choix: {
            A: "<link>",
            B: "<script>",
            C: "<style>",
            D: "<meta>"
        },
        reponseCorrecte: "A"
    },

    question9: {
        question: "Balise liste non ordonnée ?",
        choix: {
            A: "<ul>",
            B: "<ol>",
            C: "<li>",
            D: "<list>"
        },
        reponseCorrecte: "A"
    },

    question10: {
        question: "Comment déclarer variable JS ?",
        choix: {
            A: "let",
            B: "var",
            C: "const",
            D: "tous"
        },
        reponseCorrecte: "D"
    }
};


function calculerScore(choixCorrecte) {

    for (let i = 0; i < choix.length; i++) {
        if (choix[i].classList.contains('choisir')) {
            const radioChoisirValue = choix[i].getAttribute('value');
            if (radioChoisirValue == choixCorrecte)
                score++;
            break;
        }
    }
}


function afficherQuestionSuivante() {

    if (currentQuestion <= 10) {

        document.getElementsByClassName('header')[0].style.display = 'flex';
        document.getElementsByClassName('card')[0].style.display = 'flex';
        document.getElementsByClassName('score')[0].style.display = 'none';

        const q = Questions["question" + currentQuestion];

        question[0].textContent = q.question;
        textChoix[0].textContent = q.choix.A;
        textChoix[1].textContent = q.choix.B;
        textChoix[2].textContent = q.choix.C;
        textChoix[3].textContent = q.choix.D;

        nombreQuestion[0].textContent = currentQuestion;

        calculerScore(q.reponseCorrecte);
        changerBackgroundBottonChoix('A');
        currentQuestion++;

    } else {
        
        document.getElementsByClassName('header')[0].style.display = 'none';
        document.getElementsByClassName('card')[0].style.display = 'none';
        document.getElementsByClassName('score')[0].style.display = 'flex';
        point[0].textContent = score;
        currentQuestion = 1;
        score = 0;
    }
    // console.log(score);
}

afficherQuestionSuivante();

function changerBackgroundBottonChoix(c) {

    for (let i = 0; i < bottonChoix.length; i++) {
        bottonChoix[i].classList.remove('choisir');
    }

    for (let i = 0; i < choix.length; i++) {
        choix[i].classList.remove('choisir');
        choix[i].checked = false;
    }



    if (c === 'A') {
        document.getElementById('button-A').classList.add('choisir');
        document.getElementById('choix-A').classList.add('choisir');
        document.getElementById('choix-A').checked = true;
    }

    if (c === 'B') {
        document.getElementById('button-B').classList.add('choisir');
        document.getElementById('choix-B').classList.add('choisir');
        document.getElementById('choix-B').checked = true;
    }

    if (c === 'C') {
        document.getElementById('button-C').classList.add('choisir');
        document.getElementById('choix-C').classList.add('choisir');
        document.getElementById('choix-C').checked = true;
    }

    if (c === 'D') {
        document.getElementById('button-D').classList.add('choisir');
        document.getElementById('choix-D').classList.add('choisir');
        document.getElementById('choix-D').checked = true;
    }
}