// Korzystając z API localStorage, stwórz kolejną warstwę abstrakcji, która pozwoli
// pracować z tym interfejsem w taki sposób, aby możliwe było tworzenie nazywanych baz
// danych. Dane powinny być zapisywane poprzez ich konwersję na JSON, a odczytywane
// poprzez parsowanie. Przykładowe użycie takiej bazy danych może wyglądać
// następująco: http://pastebin.com/6nntRLRn

(function() {


if(typeof Storage !== undefined) {


    function LocalDB(dbname) {
        this.name = dbname;
        window.localStorage[this.name] = this.name;
    }

    LocalDB.prototype.save = function(key, value) {
        var keyName = this.name + "." + key;
        this[keyName] = JSON.stringify(value);
        window.localStorage.setItem(keyName, JSON.stringify(value));
    };

    LocalDB.prototype.get = function(key) {
        var keyName = this.name + "." + key;
        var readKey = JSON.parse(this[keyName]);
        var keyValue = window.localStorage.getItem(keyName);
        var parsed = JSON.parse(keyValue);
        console.log(parsed);
    };

} else {
    supportOutput.innerHTML = "Twoja przeglądarka nie wspiera Web Storage!";
    supportOutput.classList.add("alert-danger");
}


// ############################################ PRZYKLAD UZYCIA
// Tworzona jest nowa instancja,
// w której należy zapamiętać nazwę "DB1"
var DB1 = new LocalDB("DB1");

// Jakiś obiekt do zapisania
var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
};

// Na prototypie LocalDB znajdować się
// musi metoda save, która przyjmuje
// parę klucz-wartość, a wartość powinna
// być przed zapisaniem przepuszczona
// przez JSON.stringify
DB1.save("janek", janek);

// Prototyp LocalDB powinien również
// posiadać metodę get, która odczyta
// podany klucz, przepuszczając wartość
// przez JSON.parse
DB1.get("janek");

// Porada. Aby móżna było tworzyć bazy danych
// o różnych nazwach, przy zapisywaniu poszczególnych
// danych, do klucza dodawaj nazwę bazy danych,
// np. "DB1.janek"
// 

})();