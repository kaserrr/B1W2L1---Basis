Kas Slis
Software Development
<!DOCTYPE html>
<html lang="nl">
<head>
        <script type="text/javascript">
            window.onload = function(){
                //Deze statement vraagt je voornaam en plaats hem op de site
                var voornaam = prompt("Wat is je voornaam?");
                var usernameElement = document.getElementById("voornaam");
                usernameElement.innerText = voornaam;
                //Deze statement vraagt je achternaam en plaats hem op de site
                var achternaam = prompt("Wat is je achternaam?");
                var usernameElement = document.getElementById("achternaam");
                usernameElement.innerText = achternaam;
                //Deze statement vraagt je leeftijd en plaats hem op de site
                var leeftijd = prompt("Wat is je leeftijd?");
                var usernameElement = document.getElementById("leeftijd");
                usernameElement.innerText = leeftijd;
            }
            
        </script>
    </head>
    <body>
        <p id="voornaam"></p>
        <p id="achternaam"></p>
        <p id="leeftijd"></p>
    </body>
</html>

