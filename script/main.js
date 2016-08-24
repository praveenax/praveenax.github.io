$(document).ready(function () {

    $.get("SlideBox.html", function (data) {
        $("#slider-container").append(data);
    });
    $.get("SlideT1.html", function (data) {

        $("#slider-data").html(data);
    });

    $("#addSlide").click(function () {
        $.get("SlideBox.html", function (data) {
            $("#slider-container").append(data);
        });

        $.get("SlideT2.html", function (data) {

            $("#slider-data").html(data);
        });

    });

    $(".closeSlide").click(function () {
        $(this).css("display", "none");

    });

});