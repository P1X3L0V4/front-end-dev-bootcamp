//Stwórz aplikację, która zawierać będzie prosty formularz z wyłącznie jednym polem
//<input>, a także przyciskiem <button>. Napisz kod tak, aby po wpisaniu informacji do pola
//i po wciśnięciu przycisku, wstawić wpisane informacje do nowego elementu <li>, a ten
//zostanie wpisane np. jakieś imię, pojawi się ono na stronie. Dodatkowo możesz (nie
//musisz) zadbać o to, by jeśli nic nie zostało wpisane do pola, nie wstawiać na stronę
//pustego elementu <li>.

//$(document).ready(function() {
    var textToAdd = "";
    var ulList = "<span>Lista:</span></br><ul>";
    var end = "</ul>";
    
    $("form").on("submit", function(e) {
        e.preventDefault();
        if($("#text").val() != '') {
            textToAdd = "<li>" + $("#text").val() + "</li>";
            ulList += textToAdd;
            $("#lista").html(ulList + end);
            $("#text").val("");
        }

    });

//});