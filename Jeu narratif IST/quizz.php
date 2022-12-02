<!DOCTYPE html>
<html lang="fr">
    <head>
        <title></title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="main_css.css">
        <?php include("menu.html"); ?>
    </head>
    <body>
        <input hidden id="data" value="test">
        </div>
        <br>
        <div id="BlocQuestion">
            <div id="Thème">
                <p>
                    Thème du jour
                </p>
            </div>
            <div id="question">

            </div>
            <button id="reponseA" class="reponse" onclick="repondre(0)"></button>
            <button id="reponseB" class="reponse" onclick="repondre(1)"></button>
            <button id="reponseC" class="reponse" onclick="repondre(2)"></button>
            <br>
            <p id="isGood"></p>
            <button hidden id="suivant" class="suivant" onclick="suivantClick()">Suivant</button>
        </div>
    </body>
</html>

<script src="questions.js"></script>