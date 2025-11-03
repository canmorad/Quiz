
var minutes = 1;
var seconds = 0;
var m = minutes < 10 ? "0" + minutes : minutes;
var s = seconds < 10 ? "0" + seconds : seconds;
var timerInterval;
let nomTableau;
let angle = 360;
let currentQuestion = 1;
let score = 0;
let ChoixUser;

const body = document.body;


const questionHTML = {
    question1: {
        question: "Que signifie HTML ?",
        choix: {
            A: "Hyper Text Markup Language",
            B: "High Tool Modern Language",
            C: "Home Text Make Language",
            D: "Hyper Transfer Markup Language"
        },
        reponseCorrecte: "A"
    },

    question2: {
        question: "Quelle balise est utilisée pour les titres principaux ?",
        choix: {
            A: "<title>",
            B: "<h1>",
            C: "<head>",
            D: "<header>"
        },
        reponseCorrecte: "B"
    },

    question3: {
        question: "Quelle balise crée un paragraphe ?",
        choix: {
            A: "<p>",
            B: "<para>",
            C: "<paragraph>",
            D: "<text>"
        },
        reponseCorrecte: "A"
    },

    question4: {
        question: "Quelle balise permet d'insérer une image ?",
        choix: {
            A: "<img>",
            B: "<image>",
            C: "<picture>",
            D: "<src>"
        },
        reponseCorrecte: "A"
    },

    question5: {
        question: "Quelle balise sert à créer un lien hypertexte ?",
        choix: {
            A: "<a>",
            B: "<link>",
            C: "<href>",
            D: "<url>"
        },
        reponseCorrecte: "A"
    },

    question6: {
        question: "Quel attribut est obligatoire dans la balise <img> ?",
        choix: {
            A: "href",
            B: "src",
            C: "alt",
            D: "title"
        },
        reponseCorrecte: "B"
    },

    question7: {
        question: "Quelle balise est utilisée pour créer une liste non ordonnée ?",
        choix: {
            A: "<ul>",
            B: "<ol>",
            C: "<li>",
            D: "<list>"
        },
        reponseCorrecte: "A"
    },

    question8: {
        question: "Où place-t-on le contenu visible de la page ?",
        choix: {
            A: "<body>",
            B: "<head>",
            C: "<html>",
            D: "<meta>"
        },
        reponseCorrecte: "A"
    },

    question9: {
        question: "Quelle balise permet d'ajouter un commentaire ?",
        choix: {
            A: "<!-- commentaire -->",
            B: "// commentaire",
            C: "# commentaire",
            D: "/* commentaire */"
        },
        reponseCorrecte: "A"
    },

    question10: {
        question: "Quelle balise contient le titre affiché dans l’onglet du navigateur ?",
        choix: {
            A: "<title>",
            B: "<header>",
            C: "<meta>",
            D: "<h1>"
        },
        reponseCorrecte: "A"
    }
};

const questionCSS = {
    question1: {
        question: "Que signifie CSS ?",
        choix: {
            A: "Cascading Style Sheets",
            B: "Creative Style System",
            C: "Computer Styled Sections",
            D: "Colorful Style Syntax"
        },
        reponseCorrecte: "A"
    },

    question2: {
        question: "Quel symbole est utilisé pour sélectionner une classe en CSS ?",
        choix: {
            A: ".",
            B: "#",
            C: "*",
            D: "@"
        },
        reponseCorrecte: "A"
    },

    question3: {
        question: "Quel symbole est utilisé pour sélectionner un id en CSS ?",
        choix: {
            A: "#",
            B: ".",
            C: "*",
            D: "%"
        },
        reponseCorrecte: "A"
    },

    question4: {
        question: "Quelle propriété change la couleur du texte ?",
        choix: {
            A: "color",
            B: "background-color",
            C: "font-color",
            D: "text-color"
        },
        reponseCorrecte: "A"
    },

    question5: {
        question: "Quelle propriété change la taille du texte ?",
        choix: {
            A: "font-size",
            B: "text-size",
            C: "font-style",
            D: "text-height"
        },
        reponseCorrecte: "A"
    },

    question6: {
        question: "Comment écrire un commentaire en CSS ?",
        choix: {
            A: "/* commentaire */",
            B: "// commentaire",
            C: "# commentaire",
            D: "<!-- commentaire -->"
        },
        reponseCorrecte: "A"
    },

    question7: {
        question: "Quelle propriété change la couleur de fond ?",
        choix: {
            A: "background-color",
            B: "color",
            C: "bgcolor",
            D: "fill"
        },
        reponseCorrecte: "A"
    },

    question8: {
        question: "Comment centrer un texte ?",
        choix: {
            A: "text-align: center;",
            B: "align: center;",
            C: "center: text;",
            D: "text: middle;"
        },
        reponseCorrecte: "A"
    },

    question9: {
        question: "Quelle propriété change la police d'écriture ?",
        choix: {
            A: "font-family",
            B: "font-type",
            C: "text-font",
            D: "font-style"
        },
        reponseCorrecte: "A"
    },

    question10: {
        question: "Comment lier un fichier CSS à une page HTML ?",
        choix: {
            A: "<link rel='stylesheet' href='style.css'>",
            B: "<style src='style.css'>",
            C: "<css link='style.css'>",
            D: "<script href='style.css'>"
        },
        reponseCorrecte: "A"
    }
};

const questionJS = {
    question1: {
        question: "Que signifie JS ?",
        choix: {
            A: "JavaScript",
            B: "JavaSystem",
            C: "JustScript",
            D: "JoinScript"
        },
        reponseCorrecte: "A"
    },

    question2: {
        question: "Comment déclare-t-on une variable ?",
        choix: {
            A: "var, let ou const",
            B: "variable",
            C: "create var",
            D: "new variable"
        },
        reponseCorrecte: "A"
    },

    question3: {
        question: "Quelle fonction affiche un message dans la console ?",
        choix: {
            A: "console.log()",
            B: "alert()",
            C: "print()",
            D: "echo()"
        },
        reponseCorrecte: "A"
    },

    question4: {
        question: "Comment écrire un commentaire en JS ?",
        choix: {
            A: "// commentaire",
            B: "/* commentaire */",
            C: "<!-- commentaire -->",
            D: "## commentaire"
        },
        reponseCorrecte: "A"
    },

    question5: {
        question: "Quel événement est déclenché lors d’un clic ?",
        choix: {
            A: "onclick",
            B: "onhover",
            C: "onpress",
            D: "onload"
        },
        reponseCorrecte: "A"
    },

    question6: {
        question: "Quelle méthode convertit une chaîne en majuscules ?",
        choix: {
            A: "toUpperCase()",
            B: "upperCase()",
            C: "capitalize()",
            D: "toCaps()"
        },
        reponseCorrecte: "A"
    },

    question7: {
        question: "Quelle méthode permet d’ajouter un élément à un tableau ?",
        choix: {
            A: "push()",
            B: "add()",
            C: "insert()",
            D: "append()"
        },
        reponseCorrecte: "A"
    },

    question8: {
        question: "Comment vérifier si deux valeurs sont égales en valeur et en type ?",
        choix: {
            A: "===",
            B: "==",
            C: "=",
            D: "equals"
        },
        reponseCorrecte: "A"
    },

    question9: {
        question: "Quelle structure sert à répéter un bloc de code ?",
        choix: {
            A: "for",
            B: "if",
            C: "switch",
            D: "case"
        },
        reponseCorrecte: "A"
    },

    question10: {
        question: "Quelle fonction affiche une alerte ?",
        choix: {
            A: "alert()",
            B: "show()",
            C: "message()",
            D: "popup()"
        },
        reponseCorrecte: "A"
    }
};


function calculerScore(choixCorrecte) {
    const choix = document.getElementsByClassName('choix');

    for (let i = 0; i < choix.length; i++) {
        if (choix[i].classList.contains('choisir')) {

            const radioChoisirValue = choix[i].getAttribute('value');

            if (radioChoisirValue == choixCorrecte) {
                score++;
            }

            break;
        }
    }


}

function afficherPageHome() {
    body.innerHTML = `<section class="choix-quiz">
                            <div class="container">
                                <h3>Lisez attentivement les instructions, et quand vous êtes prêt, commencez le quiz.</h3>

                                <div class="card-quiz">
                                    <div class="card-choix">
                                        <div class="titre">
                                            <p>HTML</p>
                                            <i class="fa-brands fa-html5" id="html"></i>
                                        </div>
                                        <span>Tests pour évaluer vos compétences en HTML.</span>
                                        <div class="info">
                                            <span class="time">
                                                ⏰
                                                <p>10 minutes</p>
                                            </span>

                                            <p>10 question</p>
                                        </div>

                                        <button onclick="startQuiz('HTML')">Passer le Test HTML</button>
                                    </div>

                                    <div class="card-choix">
                                        <div class="titre">
                                            <p>CSS</p>
                                            <i class="fa-brands fa-css3-alt" id="css"></i>

                                        </div>
                                        <span>Tests pour évaluer vos compétences en CSS.</span>
                                        <div class="info">
                                            <span class="time">
                                                ⏰
                                                <p>10 minutes</p>
                                            </span>

                                            <p>10 question</p>
                                        </div>

                                        <button onclick="startQuiz('CSS')">Passer le Test CSS</button>
                                    </div>

                                    <div class="card-choix">
                                        <div class="titre">
                                            <p>JS</p>
                                            <i class="fa-brands fa-html5" id="js"></i>
                                        </div>
                                        <span>Tests pour évaluer vos compétences en JS.</span>
                                        <div class="info">
                                            <span class="time">
                                                ⏰
                                                <p>10 minutes</p>
                                            </span>

                                            <p>10 question</p>
                                        </div>

                                        <button onclick="startQuiz('JS')">Passer le Test JS</button>
                                    </div>
                                </div>

                            </div>
                        </section>`
}

function startQuiz(tabChoix) {
    afficherPageQuiz(tabChoix);
    changerBackgroundBottonChoix('A');
    startTimer();
}

afficherPageHome();

function afficherPageQuiz(tabChoix) {

    if (tabChoix === 'HTML') {
        nomTableau = questionHTML;
        ChoixUser = 'HTML';
    }
    if (tabChoix === 'CSS') {
        nomTableau = questionCSS;
        ChoixUser = 'CSS';
    }
    if (tabChoix === 'JS') {
        nomTableau = questionJS;
        ChoixUser = 'JS';
    }

    const q = nomTableau["question" + currentQuestion];

    if (currentQuestion <= 10) {
        body.innerHTML = "";
        body.innerHTML = `
                        <section class="header">
                            <div class="container">
                                <button class="precedent"><i class="fa-solid fa-arrow-left"></i></button>
                                <p class="header-text">${tabChoix} /Question <span class="nombre-question">${currentQuestion}</span>/10</p>

                                <div class="circle" id="circle" style = "background :conic-gradient(blue ${angle}deg , #ddd 0deg">
                                    <div class="timer" id="timer">
                                        <p>${m}:${s}</p>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <section class="card" id="card">
                            <div class="container">
                                <div class=" question">
                                    ${escapeHTML(q.question)}
                                </div>

                                <button class="button-choix choisir" id="button-A" onclick="changerBackgroundBottonChoix('A')">
                                    <p>A</p>
                                    <p class="text-choix">${escapeHTML(q.choix.A)} </p>
                                    <input class="choix choisir" type="radio" name="choix" id="choix-A" value="A">
                                </button>

                                <button class="button-choix" id="button-B" onclick="changerBackgroundBottonChoix('B')">
                                    <p>B</p>
                                    <p class="text-choix">${escapeHTML(q.choix.B)}</p>
                                    <input class="choix " type="radio" name="choix" id="choix-B" value="B">
                                </button>

                                <button class="button-choix" id="button-C" onclick="changerBackgroundBottonChoix('C')">
                                    <p>C</p>
                                    <p class="text-choix">${escapeHTML(q.choix.C)}</p>
                                    <input class="choix" type="radio" name="choix" id="choix-C" value="C">
                                </button>

                                <button class="button-choix" id="button-D" onclick="changerBackgroundBottonChoix('D')">
                                    <p>D</p>
                                    <p class="text-choix">${escapeHTML(q.choix.D)}</p>
                                    <input class="choix" type="radio" name="choix" id="choix-D" value="D">
                                </button>

                                <button class="suivante" onclick="afficherQuestionSuivante()">SUIVANTE</button>

                            </div>
                        </section>`;
    }

}


function afficherPageScore() {

    body.innerHTML = "";
    body.innerHTML = `<section class="score">
                            <div class="container">
                                <h2>Résultat Du Quiz</h2>
                                <div class="medaille">
                                    <img class="img1" src="award.png" alt="">
                                    <img class="img2" src="woman.png" alt="">
                                </div>
                                <h3>Félicitations !</h3>
                                <p>VOTRE SCORE</p>
                                <p class="text-score"><span class="point">${score} </span> / 10</p>
                                <p class="">PIÈCES GAGNÉES</p>

                                <div class="coins">
                                    <i class="fa-solid fa-coins"></i>
                                    <p>500</p>
                                </div>

                                <button class="home" onclick="afficherPageHome()">Refaire le quiz</button>
                            </div>

                        </section>`;

    currentQuestion = 1;
    score = 0;
}


function afficherQuestionSuivante() {

    if (currentQuestion <= 10) {

        const q = nomTableau["question" + currentQuestion];
        calculerScore(q.reponseCorrecte);
        afficherPageQuiz(ChoixUser);

        changerBackgroundBottonChoix('A');
        currentQuestion++;

    } else {
        stopTimer();
        afficherPageScore();
        score = 0;
    }
}

function changerBackgroundBottonChoix(c) {

    const bottonChoix = document.getElementsByClassName('button-choix');
    const choix = document.getElementsByClassName('choix');

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


function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


function startTimer() {
    timerInterval = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    angle = 360;
    minutes = 1;
    seconds = 0;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
}


function timer() {
    seconds--;

    if (seconds < 0 && minutes > 0) {
        seconds = 59;
        minutes--;
    }


    if (minutes === 0 && seconds === 0) {
        stopTimer();
        afficherPageScore();

        currentQuestion = 1;
        score = 0;
        return;
    }

    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;

    angle = ((minutes * 60 + seconds) / (1 * 60)) * 360;

    document.getElementById("timer").innerHTML = "";
    document.getElementById("timer").innerHTML += `<p>${m}:${s}</p>`;
    document.getElementById("circle").style.background = `conic-gradient(blue ${angle}deg , #ddd 0deg)`;

}

function returnPageHome() {
    afficherPageQuiz();
    startTimer();
}
