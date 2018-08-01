//Napisz polyfill dla funkcji fetch (nie będziemy się tutaj trzymać dokładnie tego,
//w jaki sposób ona działa, stworzysz jedynie prostą jej wersję). Wykorzystaj obiekt
// XMLHttpRequest w ten sposób, aby docelowo korzystanie z funkcji fetch wyglądało
// następująco:
// fetch("url", function(data) {
// console.log("Sukces");
// console.log(data);
// }, function(err) {
// console.log("Wystąpił błąd!");
// console.log(err);
// });
// a zatem jako pierwszy argument przekazujemy adres URL (wyślij pod niego zapytanie
// GET), jako drugi funkcję, którą należy wykonać jeśli wszystko się powiedzie (przekaż jej
// pobrane dane), a jako trzeci funkcję, która wykona się na wypadek błędu (przekaż jej
// obiekt z błędem lub komunikat tekstowy). W nowoczesnych przeglądarkach istnieje już
// funkcja fetch, a zatem aby jej nie nadpisywać, możesz nadać jej inną nazwę. Jako adres
// URL, z którego pobierane bedą dane, możesz wykorzytać https://
// jsonplaceholder.typicode.com/users


function fetch(url, sucess, error) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function(e){
        if(this.readyState === 4 && this.status === 200) {
            return (sucess)(e);
        }
        else {
            return (error)(e);
        }
    }

    xhr.send(null);

}


// Wykorzystanie
fetch("https://jsonplaceholder.typicode.com/users", function(data) {
    console.log("Sukces");
    console.log(data);
}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});