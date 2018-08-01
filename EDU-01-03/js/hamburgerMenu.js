//Stwórz kontener z przykładową nawigacją, który domyślnie nie będzie widoczny. Może on
//znajdować się na samej górze strony lub w sidebarze. Następnie umieść na stronie
//przycisk typu “hamburger menu”, po kliknięciu którego wysunie się wcześniej ukryte
//menu. Animacja, jaką zastosujesz, zależy od Ciebie. Ponowne kliknięcie przycisku powinno
//chować nawigację.

$(function(){
    $("#hamburger-icon").on("click", function() {
        $(".menu").toggle();
    });
});