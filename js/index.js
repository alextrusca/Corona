var listBtn = document.querySelector('.change');
var menu = document.querySelector('.menu');
var img = document.querySelector('.mobile__menu img');
var count = 0;

listBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    menu.classList.toggle('active');
    if(count === 1) {
        img.src = './images/list.png';
        count = 0;
    } else {
        img.src = './images/close.png';
        count = 1;
    }
});

var links = document.querySelectorAll('.menu ul li a');

links.forEach(function (link){
    link.addEventListener('click', function () {
        menu.classList.remove('active');

    });
});


$( document ).ready(function() {
    $("a[href$='#home']").click(function() {
        $('html,body').animate({
                scrollTop: $("#home").offset().top},
            'slow');
    });

    $("a[href$='#about']").click(function() {
        $('html,body').animate({
                scrollTop: $("#about").offset().top},
            'slow');
    });

    $("a[href$='#contact']").click(function() {
        $('html,body').animate({
                scrollTop: $("#contact").offset().top},
            'slow');
    });

    $("a[href$='#action']").click(function() {
        $('html,body').animate({
                scrollTop: $("#action").offset().top},
            'slow');
    });

});




