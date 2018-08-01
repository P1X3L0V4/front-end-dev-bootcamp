// Link do mapy z położeniem użytkownika
// Wykorzystaj API Geolokalizacji, by stworzyć odnośnik do map Bing, który otworzy mapę z
// aktualnym położeniem użytkownika. Stwórz na stronie internetowej przycisk, po kliknięciu
// którego pobrane zostanie położenie odwiedzającego. Z uzyskanych danych wyłuskaj
// latitude i longitude, a następnie wstaw je odpowiednio w następujący URL:
// http://bing.com/maps/default.aspx?cp=LAT~LON uzyskując w ten sposób np.
// http://bing.com/maps/default.aspx?cp=52.162050~21.071350
// Na koniec, wyświetl użytkownikowi link, po kliknięciu którego zostanie przeniesiony pod
// wcześniej skonstruowany adres.

$("#button").on("click", function(){

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var adress ="<i class='fa fa-street-view' aria-hidden='true'></i> <a href='http://bing.com/maps/default.aspx?cp=" + lat + "~" + lon + "' target='_blank'>POKAŻ MAPĘ</a>";
        $("#maplink").animate({opacity: 1}, 2000).html(adress);
      });
    }

})
