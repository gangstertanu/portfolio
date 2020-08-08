// window.onload = function() {
//     $(".loader").hide();
// }

$(document).ready(function() {
    $(".f-item-1").hover(function() {
        $('.menu').css("background-color", "#546E7A");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    // f-item-2
    $(".f-item-2").hover(function() {
        $('.menu').css("background-color", "#FF8A65");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    // f-item-3
    $(".f-item-3").hover(function() {
        $('.menu').css("background-color", "#9575CD");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    // f-item-4
    $(".f-item-4").hover(function() {
        $('.menu').css("background-color", "#B0BEC5");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    // f-item-5
    $(".f-item-5").hover(function() {
        $('.menu').css("background-color", "#171515");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    $(".f-item-5").hover(function() {
        $('.menu').css("color", "#fff");
    }, function() {
        $('.menu').css("color", "#000");
    });
    $(".f-item-6").hover(function() {
        $('.menu').css("background-color", "#0077B7");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    $(".f-item-7").hover(function() {
        $('.menu').css("background-color", "#DD5040");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    $(".f-item-8").hover(function() {
        $('.menu').css("background-color", "#3A559F");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
    $(".f-item-9").hover(function() {
        $('.menu').css("background-color", "#C02C76");
    }, function() {
        $('.menu').css("background-color", "rgba(0, 0, 0, 0.07)");
    });
});





$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});