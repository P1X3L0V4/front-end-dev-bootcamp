//Pamiętasz zadanie z 2 tygodnia pt. “Dziedziczenie z klasy EventEmitter”? Kod, który
//należało poprawić znajduje się pod tym adresem http://pastebin.com/YEBncx0d. Na pewno
//zdążyłeś/aś go już naprawić. Teraz Twoim zadaniem jest przepisanie już działającego kodu,
//który zapisany jest w standardzie ES5 tak, aby korzystał z wszystkich możliwych nowości
//dostępnych w ES6. Skorzystaj zatem z nowego zapisu class czy z template stringów. Kod
//możesz bez obaw testować bezpośrednio np. w najnowszej wersji przeglądarki Chrome
//bez użycia żadnych transpilatorów z ES6 do ES5.


class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(type, fn) {
        if(!type || !fn) return;
        this.events[type] = this.events[type] || [];
        this.events[type].push(fn);
    }
    emit(type, data) {
        let fns = this.events[type];
        if(!fns || !fns.length) return;
        for(var i = 0; i < fns.length; i++) {
            fns[i](data);
        }
    }
}

class Database extends EventEmitter {
    constructor(url) {
        super();
        this.url = url;
    }
    connect() {
        this.emit("connect", this.url);
    }
    disconnect() {
        this.emit("disconnect", this.url);
    }
}

 
// Użycie EventEmittera
var ev = new EventEmitter();
 
ev.on("hello", (message) => console.log("Witaj " + `${message}` + "!"));
ev.on("hello", (message) => console.log("Siema " + `${message}` + "."));
ev.on("goodbye", (message) => console.log("Do widzenia!"));

ev.emit("hello", "Marek");
ev.emit("goodbye");
ev.emit("custom");
 
// Docelowe użycie klasy Database
var db = new Database("db://localhost:3000");

db.on("connect", (url) => console.log("Połączenie z bazą pod adresem " + `${url}` + " zostało ustanowione."));
db.on("disconnect", (url) => console.log("Połączenie z bazą pod adresem " + `${url}` + " zostało zakończone."));
db.connect();
 
// po 5 sekundach rozłączamy się
setTimeout(() => db.disconnect(), 5000);