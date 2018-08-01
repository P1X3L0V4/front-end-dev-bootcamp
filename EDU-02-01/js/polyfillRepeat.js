// “hej ”.repeat(3) // zwraca “hej hej hej ”
// Utwórz polyfill dla metody repeat.
// Sprawdź czy taka metoda już w przeglądarce została zaimplementowana, a jeśli nie,
// to dopisz własną funkcję, która będzie mogła być na dowolnym stringu wywołana
// w podany wyżej sposób.
// Podpowiedź: rozszerzaj prototyp konstruktora String


if (!String.prototype.repeat) { // Czy istnieje metoda repeat i jeśli nie to

    String.prototype.repeatt = function(count) { // Stwórz polyfill dla metody repeat
        var string = String(this);
        var counter = 1;
        while(counter < count) {
            string = string + String(this);
            counter++;
        }
        return string;
    }
}

console.log("hej ".repeat(3));
console.log("hej ".repeatt(3)); // Aby przetestować należy wykomentować if

