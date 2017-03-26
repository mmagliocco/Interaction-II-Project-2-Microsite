$(document).ready(function () {

    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(3000)
            .next()
            .fadeIn(3000)
            .end()
            .appendTo('#slideshow');
    }, 5000);


    $("#slideshow").css({
        height: $("#slideshow img").height()
    })

    $(window).resize(function () {
        $("#slideshow").css({
            height: $("#slideshow img").height()
        })
    })

});