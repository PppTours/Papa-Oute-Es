const json = [
    {"id" : 0, "question" : "Après un rapport non protégé, combien de temps ai-je pour prendre une pilule de contraception d’urgence ? ", "réponses" : ["1 jour maximum", "3 jours maximum", "1 semaine maximum"], "bonne réponse" : 1},
    {"id" : 1, "question" : "Qu’est-ce qu’une IST ?", "réponses" : ["une interruption sensorielle temporaire", "Une intense sensibilité à la température", "Une  infection sexuellement transmissible"], "bonne réponse" :2, "infos complémentaires": "Une maladie qui se transmet lors de contacts et de rapports sexuels"},
    {"id" : 2, "question" : "Quel est le temps de gestation moyen d'une otarie ?", "réponses" : ["De 7 à 8 mois", "De 10 à 12 mois", "De 3 à 4 moi"], "bonne réponse" : 1},
    {"id" : 3, "question" : "C'est quoi une Fibrose/Cirrhose ?", "réponses" : ["Des problèmes articulaires", "La destruction des cellules hépatiques par diverses agressions : abus d’alcool, hépatite virale, médicamenteuse", "Une fragilité osseuse"], "bonne réponse" : 1, "infos complémentaires": "C’est une maladie qui atteint le foie, et l’ampleur des dommages peut être plus ou moins importante, selon plusieurs stades"},
    {"id" : 4, "question" : "Quels sont les symptomes d'une hepatite", "réponses" : ["La diarrhée", "Des saignements", "La perte de vue"], "bonne réponse" : 0, "infos complémentaires": "Les hépatites peuvent être trahies par différents symptômes. Cependant, dans bien des cas, la maladie demeure silencieuse pendant des années"},
    {"id" : 5, "question" : "Dans qu'elles circonstances se transmet l'hepatite B ?", "réponses" : ["Lors d'une poignée de main", "Lors d’un tatouage avec du matériel non stérile", "En buvant dans un verre utilisé par une personne contaminée"], "bonne réponse" : 1, "infos complémentaires": "Il existe d’autres façons de transmettre la maladie comme le contact d’un liquide contaminé par du sang, par transfusion sanguine, ou même encore d’une mère à son bébé pendant sa grossesse ou lors de l’accouchement. "},
    {"id" : 6, "question" : "Dans le cas où l’on est mineur, est-il nécessaire d’avoir l’accord de ses parents pour avoir accès à une méthode contraceptive ? ", "réponses" : ["Oui", "Non","C'EsT mIeUx sAnS nOn?"], "bonne réponse" : 1, "infos complémentaires": "En effet il est possible d’en obtenir une gratuitement et anonymement en Centre de Planification et d’Education Familiale, ou en cabinet en mentionnant sur l’ordonnance que l’on ne souhaite pas que cela apparaisse sur le relevé sécurité sociale des parents"},
    {"id" : 7, "question" : "Quand le dépistage devient-il obligatoire ?", "réponses" : ["Pour devenir fonctionnaire", "jamais c’est inutile ce truc", "Pour faire un don du sang, sperme ou organe"], "bonne réponse" : 2},
    {"id" : 8, "question" : "Où faire son dépistage? ", "réponses" : ["Dans un centre de dépistage ou de diagnostic ", "Chez le dentiste", "Dans une mairie"], "bonne réponse" : 0, "infos complémentaires": "C’est aussi possible dans d’autres lieux comme les pharmacies, les laboratoires, les centres de planification et d'éducation familiale, les centres de PMI (protection maternelle et infantile, les associations de lutte contre le sida ou encore les PASS (permanence d’accès aux soins de santé pour personnes en situation de précarité)"},
    {"id" : 9, "question" : "Quels types d’examens peuvent permettre le dépistage et le diagnostic ?", "réponses" : ["Des tests ADN", "Des prélèvements locaux ou des analyses d’urines", "Des tests salivaires"], "bonne réponse" : 1, "infos complémentaires" : "D’autres examens comme celui des organes génitaux ou des prises de sang permettent aussi de diagnostiquer certaines IST"},
    {"id" : 10, "question" : "Quelle est l’efficacité de la méthode du retrait ?", "réponses" : ["Très efficace à 100%", "Elle est efficace 1 fois sur 2", "Elle est efficace 3 fois sur 4"], "bonne réponse" : 2, "infos complémentaires" : "C’est une méthode très déconseillée car elle ne protège aucun des deux partenaires"},
    {"id" : 11, "question" : "La pilule me fera-t-elle prendre du poids ? ", "réponses" : ["Oui, ça dépend de ton poids avant la première prise", "Oui : certaines d’entres elles créent une rétention d’eau", "Non, c’est une idée reçue"], "bonne réponse" : 1, "infos complémentaires" : "La prise de poids est un effet secondaire chez certaines femmes, mais pas pour la majorité"},
    {"id" : 12, "question" : "Si le préservatif rompt, qu’est-ce que je risque ? ", "réponses" : ["Forcément une grossesse", "La possible transmission d’une IST", "Rien tant que mon partenaire n’a pas éjaculé"], "bonne réponse" : 1, "infos complémentaires" : "La grossesse n’est qu’un risque même dans cette situation, tout comme les IST"},
    {"id" : 13, "question" : "Est-ce que la contraception peut diminuer ma capacité à avoir des enfants à long terme? ", "réponses" : ["Oui", "Non","J'aime pas les enfants"], "bonne réponse" : 1, "infos complémentaires" : "Le but de la contraception est d’être réversible"},
    {"id" : 14, "question" : "Est-ce qu’il existe un âge minimum pour prendre une contraception ? ", "réponses" : ["Oui", "Non","42"], "bonne réponse" : 1, "infos complémentaires" : "La contraception se prend en général aux moment où l’on souhaite commencer à avoir des relations sexuelle, il est conseillé d’en parler à quelqu’un de confiance comme à ses parents, des amis proches ou encore un professionnel"},
    {"id" : 15, "question" : "Quelles contre-indications à la prise de la pilule existe-il ? ", "réponses" : ["Le tabac", "Le café", "L’hémophilie"], "bonne réponse" : 0, "infos complémentaires" : "L’âge et des problèmes de santé peuvent aussi être des raisons de ne pas prendre la pilule"},
    {"id" : 16, "question" : "Qu’est-ce que le VIH ?", "réponses" : ["C’est le Virus Intermédiaire Hallucinatoir", "C’est le Virus de l'Immunodéficience Humaine", "C’est le Virus de l’Immunodéficience Héréditaire"], "bonne réponse" : 1, "infos complémentaires" : "Il s’attaque au système immunitaire qui défend notre organisme contre les infections, rendant le corps vulnérable aux infections. Il peut se transmettre au cours de relations sexuelles, par le sang, ou encore de la mère à son enfant (durant la grossesse ou l’allaitement)"},
    {"id" : 17, "question" : "Qu’est-ce que Le SIDA ? ", "réponses" : ["C’est le Syndrome de l’Insuffisance Dissociative Acquise", "C’est la Sérologie Innée du Derme Acquis", "C’est le Syndrome de l’Immuno Déficience Acquise"], "bonne réponse" : 2, "infos complémentaires" : "C’est la stade avancé de la maladie, et la destruction graduelle du système immunitaire due au VIH. L’immunité du corps diminue et des maladies plus graves peuvengt alors se développer. On dit qu’une personne a le SIDA lorsqu’elle a une ou plusieurs maladies de ce type. "},
    {"id" : 18, "question" : "Combien de temps après les rapports non protégés dois-je attendre pour détecter le VIH ?", "réponses" : ["1 semaine", "1 mois", "3 mois"], "bonne réponse" : 2, "infos complémentaires" : "Cependant, pour obtenir un résultat convaincant à 95% il est possible de  faire le dépistage six semaines après le rapport, il arrive simplement qu’il faille attendre jusqu’à trois mois pour que le nombre de virus soit suffisamment élevé dans le sang pour être détecté. "},
    {"id" : 19, "question" : "Comment se protéger des IST ?", "réponses" : ["Se laver le sexe 3 fois par jour, comme pour les dents", "Utiliser un préservatif", "Ne pas utiliser le chemin vers le côté obscur"], "bonne réponse" : 1, "infos complémentaires" : "Mais bien sûr, il existe un tas d’autres protections que les préservatifs, qu’ils soient féminins ou masculins !"}
]

var buttonA = document.getElementById("reponseA");
var buttonB = document.getElementById("reponseB");
var buttonC = document.getElementById("reponseC");
var infos=document.getElementById("Infos");

var suivant = document.getElementById("suivant");

var questionsDejaPosées=[];
var Score=0;
randomSelectQuestion()

function chargerQuestion() {
    document.getElementById("question").innerHTML = json[questionEnCours].question;
    buttonA.innerHTML = json[questionEnCours].réponses[0];
    buttonB.innerHTML = json[questionEnCours].réponses[1];
    buttonC.innerHTML = json[questionEnCours].réponses[2];
    
}

function repondre(reponse) {
    buttonA.disabled = true;
    buttonB.disabled = true;
    buttonC.disabled = true;

    if(json[questionEnCours]["infos complémentaires"]!=undefined) {
    infos.innerHTML=json[questionEnCours]["infos complémentaires"];
    }
    if(json[questionEnCours]["bonne réponse"]==0){
        buttonA.className="BonneReponse"
    }
    if(json[questionEnCours]["bonne réponse"]==1){
        buttonB.className="BonneReponse"
    }
    if(json[questionEnCours]["bonne réponse"]==2){
        buttonC.className="BonneReponse"
    }

    answer=document.getElementById("isGood");
    if(reponse === json[questionEnCours]["bonne réponse"]) {
        answer.innerHTML="Bonne réponse !";
        Score++;
        if(questionsDejaPosées.length === json.length) {
            answer.innerHTML="Bonne réponse !<br>Vous avez terminé le jeu ! <br> Votre score est de "+Score+"/"+json.length;

        }
        else {
        suivant.hidden = false;
        }
    }
    else {
        answer.innerHTML="Mauvaise réponse !";
        
        if(questionsDejaPosées.length === json.length) {
            answer.innerHTML="Mauvaise réponse!<br>Vous avez terminé le jeu ! <br> Votre score est de "+Score+"/"+json.length;
            
        }
        else {
        suivant.hidden = false;
        }        
    }

}
function randomSelectQuestion(){

    //selection aléatoire de la prochaine question
    questionEnCours = Math.floor(Math.random() * json.length);
    //si la question a déjà été posée, on en sélectionne une autre
    if(questionsDejaPosées.includes(questionEnCours)) {
        randomSelectQuestion();
    }
    //sinon on ajoute la question à la liste des questions posées
    else {
        questionsDejaPosées.push(questionEnCours);
    }
    //si il n'y a plus de questions à poser, on réinitialise la liste des questions posées
    };

function suivantClick() {
    infos.innerHTML="";
    buttonA.className="reponse"
    buttonB.className="reponse"
    buttonC.className="reponse"

    suivant.hidden = true;
    buttonA.disabled = false;
    buttonB.disabled = false;
    buttonC.disabled = false;
    answer=document.getElementById("isGood");
    answer.innerHTML="";
    randomSelectQuestion();
    chargerQuestion();
}

chargerQuestion();