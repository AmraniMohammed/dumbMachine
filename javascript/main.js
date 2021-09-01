$(document).ready(function() {

    function dispaly(music) {
        $("#display")[0].innerText = music;
    }

    $('.drum-pad').each(function( index ) {
        $( this ).click(function (e) {
            const src = "#" + e.target.dataset.element;
            const audio = $(src)[0];
            dispaly(audio.innerText);
            audio.play();
        });
      })
    $(document).keypress(function (e) {
        var key = e.key.toUpperCase();
        var musicKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        $.each(musicKeys, function(index, value) {
            if(value == key) {
                const src = "#" + key;
                const audio = $(src)[0];
                dispaly(audio.innerText);
                audio.play();
                return;
            }
        })
    });  

})