// Podaj przykłady selektorów, które pozwolą znaleźć na stronie następujące elementy:
// Wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”.
var test = $("div.grid.grid-12");
// Wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”
$(".nav a[href^='http']");
// Wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked)
$("input:radio:not(:checked), input:checkbox:not(:checked)");
// Wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem “text”
$("div#text p:empty:first");
// Wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>
$(".pagination-item:not('span')");

console.log(test);