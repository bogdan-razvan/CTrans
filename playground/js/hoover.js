$(document).ready(init);

function init() {
    $(".grid-item").hover(function() {
        $(this).css("background-color", "red");
        $(this).css("color", "white");
    }, function() {
        $(this).css("background-color", "white");
        $(this).css("color", "black");
        $(this).css("border", "white");
    });
}