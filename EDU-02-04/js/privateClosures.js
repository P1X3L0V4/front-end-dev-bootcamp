//Dokończ pisanie przygotowanego pod adresem http://pastebin.com/aNKyCt3N kodu tak,
// aby nie generował błędów. Stwórz metody get oraz set nie korzystając z prototypów.
// Istotą działania funkcji createData jest zwrócenie obiektu, który zawierał będzie
// metody get oraz set. Metoda get powinna przyjmować klucz, np. “name” oraz zwracać
// wartość np. data[“name”], natomiast metoda set powinna przyjmować klucz i wartość,
// sprawdzać czy oba te parametry zostały podane, a następnie powinna ustawiać np.
// data[“name”] = “Janek”.

function createData(obj) {
    var data = obj;

    return {
        get: function (key) {
            return data[key];
        },
        set: function (key, value) {
            if(key != undefined && value != undefined) {
                return data[key] = value;
            }
            else {
                console.log("Nie podano jednej lub dwóch wartości");
            }
        }
    }
}

var data = createData({});
data.set("name", "Janek");
console.log( data.get("name") );