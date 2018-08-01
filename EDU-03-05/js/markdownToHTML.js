// Korzystając z File API stwórz konwerter formatu Markdown do formatu HTML. Twoim
// zadaniem jest stworzenie pola <input> o typie file, dzięki któremu użytkownik będzie
// mógł wybrać plik z formatem Markdown (zapisz treść dostępną tutaj do pliku lub
// stwórz własną), który automatycznie zostanie skonwertowany do kodu HTML
// (wykorzystaj do tego celu Showdown.js). Kod HTML, który otrzymasz po użyciu odpowiedniej
// metody z Showdown.js, wstaw w pole podglądu, które utworzysz. Możesz również dodać
// możliwość skopiowania wygenerowanego kodu HTML. Najłatwiej zrobić to wyświetlając
// pole <textarea>, do którego wstawisz owy kod, a następnie wywołasz na nim metodę
// .select()


(function() {

if(!window.FileReader) return;

var fileInp = $("#convert-input");

fileInp.change(function() {
    var files = this.files;
    var file = files[0];
    $("#convert_txtinput").attr("placeholder", file.name);
    reader = new FileReader();
    reader.readAsBinaryString(file);
    
    reader.onload = function(e) {
        var converter = new showdown.Converter();
        var toConvert = reader.result;
        var converted = converter.makeHtml(toConvert);
        $("#view").css("display", "inline-block");
        $("textarea").html(converted);
        $("#select_btn").on("click", function() {
            $("textarea").select();
            document.execCommand("copy");
        })
        $("#convert").animate({ top: "-=100px" }, 800 );
    }
});


})();