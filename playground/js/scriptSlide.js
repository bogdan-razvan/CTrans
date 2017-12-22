$(document).ready(init);

function init() {
    carousel();

}

var myIndex = 0;
$("button.black").hover(() => {
    $(this).css("opacity", "0.5");
    $(this).css("cursor", "pointer");
}, () => {
    $(this).css("opacity", "0.5");
});

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

$(".black").click(function() {
    console.log("am apasat butonul");
});



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}