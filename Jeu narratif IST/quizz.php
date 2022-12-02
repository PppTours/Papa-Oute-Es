<!DOCTYPE html>
<html lang="fr">
    <head>
        <title></title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="main_css.css">
        <?php include("menu.html"); ?>
    </head>
    <body>
        </div>
        <br>
        <div id="BlocQuestion">
            <div id="question">

            </div>
            <div id="BlocReponse">
            <button id="reponseA" class="reponse" onclick="repondre(0)"></button>
            <button id="reponseB" class="reponse" onclick="repondre(1)"></button>
            <button id="reponseC" class="reponse" onclick="repondre(2)"></button>*
</div>
            <br>
            <p id="isGood"></p>
            <p id="Infos"></p>
            <button hidden id="suivant" class="suivant" onclick="suivantClick()">Suivant</button>
        </div>
    </body>
</html>

<script src="questions.js"></script>

