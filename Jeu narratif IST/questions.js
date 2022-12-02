const json = [
    {"id" : 0, "question" : "Quel est le moyen de contraception le plus efficace ?", "réponses" : ["Le préservatif", "La pillule", "la méthode du retrait"], "bonne réponse" : 0},
    {"id" : 1, "question" : "Qu’est-ce qu’une IST ?", "réponses" : ["une interruption sensorielle temporaire", "Une intense sensibilité à la température", "Une  infection sexuellement transmissible"], "bonne réponse" :2 },
    {"id" : 2, "question" : "Quel est le temps de gestation moyen d'une otarie ?", "réponses" : ["De 7 à 8 mois", "De 10 à 12 mois", "De 3 à 4 moi"], "bonne réponse" : 1},
    {"id" : 3, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 4, "question" : " Quels sont les symptomes d'une hepatite", "réponses" : ["La diarrhée", "Des saignements", "La perte d’appétit"], "bonne réponse" : 0},
    {"id" : 5, "question" : " Dans qu'elles circonstances se transmet l'hepatite B ?", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 6, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 7, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 8, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 9, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 10, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 11, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 12, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 13, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 14, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 15, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0},
    {"id" : 16, "question" : " ", "réponses" : ["", "", ""], "bonne réponse" : 0}
]

data=document.getElementById("data").value;
console.log(document.getElementById("data").value)
console.log(data)

var buttonA = document.getElementById("reponseA");
var buttonB = document.getElementById("reponseB");
var buttonC = document.getElementById("reponseC");

var suivant = document.getElementById("suivant");

var questionEnCours = 0;
var aRepondu = false;

function chargerQuestion() {
    document.getElementById("question").innerHTML = json[questionEnCours].question;
    buttonA.innerHTML = json[questionEnCours].réponses[0];
    buttonB.innerHTML = json[questionEnCours].réponses[1];
    buttonC.innerHTML = json[questionEnCours].réponses[2];
}

function repondre(reponse) {
    aRepondu = true;
    suivant.hidden = false;
    if(reponse === json[questionEnCours]["bonne réponse"]) {
        alert("Bravo !")
    } else {
        alert("Mauvaise réponse !")
    }
}

function suivantClick() {
    questionEnCours++;
    chargerQuestion();
    suivant.hidden = true;
}

chargerQuestion();