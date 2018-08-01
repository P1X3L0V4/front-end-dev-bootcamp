//Do przygotowanego pod adresem http://pastebin.com/hUK5tnh3 kodu dodaj konstruktor
//(klasę) o nazwie Toggler. Przy tworzeniu nowych jej instancji z użyciem słowa kluczowego
//new (jak możesz zobaczyć w przygotowanym kodzie) przekazywać będziemy selektor. Za
//jego pomocą należy znaleźć na stronie odpowiedni element (skorzystaj z metody
//document.querySelector) i zapisać go w nowo stworzonym obiekcie. Następnie dodaj 3
// metody. Pierwsza z nich o nazwie getElem powinna po prostu zwrócić znaleziony
// wcześniej element. Metoda show i hide powinny kolejno pokazywać i ukrywać element.
// Jeśli wszystko wykonasz poprawnie, kod który został już napisany powinien działać bez
// żadnych modyfikacji. Zauważ, że do elementu o identyfikatorze button zostało przypisane
// zdarzenie kliknięcia. Taki element musisz wstawić na stronę, podobnie jak i element,
// którego selektor zostanie przekazany przy tworzeniu nowego obiektu klasy Toggler.

function Toggler(selector) {

    var element = document.querySelector(selector);

    return {
        element: element,
        getElem: function() {
            return this.element;
        },
        show: function(){
            this.element.style.display = "inline-block";
        },
        hide: function(){
            this.element.style.display = "none";
        },
    }

}


var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
}, false);