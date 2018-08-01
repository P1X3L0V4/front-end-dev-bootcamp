// Stwórz odtwarzacz filmów, który udostępni podstawowe funkcjonalności. Będą to
// możliwość odtwarzania, pauzowania, wyświetlania paska postępu (który umożliwi
// również przewijanie). Wyświetl również czas trwania całego filmu, a także aktualny
// czas postępu. Porada: aby ułatwić sobie życie, jako pasek postępu wykorzystać
// możesz element <input> o type range: bit.ly/input-range

(function() {

    // Controls
    var video = $("video").get(0);
    var playpause = $("#playpause");
    var mute = $("#mute");

    // Indicators
    var time = $("#time");
    var progressbar = $("#progressbar");
    var valueStep = 0;

    // Play & puase
    playpause.on("click", function(){
        if (video.paused) {
            video.play();
            playpause.html("<i class='fa fa-pause' aria-hidden='true'></i>");
        }
        else { 
            video.pause();
            playpause.html("<i class='fa fa-play' aria-hidden='true'></i>");
            
        }
    })

    // Mute & unmute
    mute.on("click", function(){
        if($("video").prop("muted")){
            $("video").prop("muted", false);
            mute.html("<i class='fa fa-volume-up' aria-hidden='true'></i>");
        }
        else {
            $("video").prop("muted", true);
            mute.html("<i class='fa fa-volume-off' aria-hidden='true'></i>");
        }
    })

    // Time format
    function formatTime(seconds) {
        var seconds = Math.round(seconds),
            minutes = Math.floor(seconds / 60),
            remainingSeconds = seconds - minutes * 60;

        if(remainingSeconds == 0)
            remainingSeconds = "00";
        else if(remainingSeconds < 10)
            remainingSeconds = "0" + remainingSeconds;

        return minutes + ":" + remainingSeconds;
    }

    // Time show duration on load
    video.oncanplaythrough = function () {
        var curtime = formatTime(video.currentTime);
        var duration = formatTime(video.duration);
        time.html(curtime + " / " + duration);
    };

    // Time update
    video.ontimeupdate = function () {
        var curtime = formatTime(video.currentTime);
        var duration = formatTime(video.duration);
        time.html(curtime + " / " + duration);

        // Progress bar playing
        var currentProgress = (Math.round(video.currentTime) / Math.round(video.duration)) * 100;
        progressbar.val(currentProgress);
    };

    // Rewind
    progressbar.on("input change", function() {
        var clickedPos = progressbar.val();
        video.currentTime = clickedPos;
    });


})();