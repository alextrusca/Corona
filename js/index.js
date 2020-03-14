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


// $( document ).ready(function() {
//
// });




