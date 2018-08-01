//Stwórz aplikację, która pozwoli po kliknięciu wybranego przycisku, np. “Załaduj”, pobrać
//AJAXem dane typu JSON i wyświetlić je na stronie. Adres, pod który wyślesz zapytanie z
//użyciem jQuery to https://jsonplaceholder.typicode.com/users
//Otrzymane dane wyświetl na stronie w formie nieuporządkowanej listy <ul>, a każdego
//użytkownika w tagu <li>. Z podanych danych wyłuskaj name, username, email oraz
//phone. Sformatuj je według własnego uznania.

$(document).ready(function() {
var lista = $("#lista ul");
var users = "";

$("#load-btn").on("click", function() {
    console.log("Klik!");

    $.ajax({
          url: "https://jsonplaceholder.typicode.com/users",
          method: "GET",
          //dataType: "text",

          success: function(data, status, jqXHR) {
              //console.log("Żądanie zakończone sukcesem");
              $.each(data, function(index) {
                users += "<i class='fa fa-user' aria-hidden='true'></i>";
                users += "<li>" + data[index].name + "</li>";
                users += "<li>" + data[index].username + "</li>";
                users += "<li>" + data[index].email + "</li>";
                users += "<li>" + data[index].phone + "</li><br />";
                lista.html(users);
              });

          },
          error: function(jqXHR, status, errorThrown) { 
              //console.log("Wystąpił błąd");
          },
          complete: function(jqXHR, status) {
              //console.log("Żądanie zakończone");
          }
    });
        
});

});