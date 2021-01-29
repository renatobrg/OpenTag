
$('#down').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.a-open').offset().top
    }, 1000)
})

$('#slick-home').slick({
    autoplay: true,
    pauseOnHover: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./imgs/prev.png" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./imgs/next.png" /></button>'
})


var menuMob = document.getElementById('menu-mob')
var btnHamburger = document.getElementById('btn-toggle')

btnHamburger.addEventListener('click', function () {
    if (menuMob.classList.contains('hide')) {
        menuMob.classList.remove('fade-out')
        menuMob.classList.remove('hide')
        menuMob.classList.add('fade-in')
        menuMob.classList.add('show')
        btnHamburger.classList.remove('open')
        btnHamburger.classList.add('close')
        btnHamburger.classList.add('fixed')
    } else {
        menuMob.classList.remove('fade-in')
        menuMob.classList.remove('show')
        menuMob.classList.add('fade-out')
        menuMob.classList.add('hide')
        btnHamburger.classList.add('open')
        btnHamburger.classList.remove('close')
        btnHamburger.classList.remove('fixed')
    }
})


var header = document.querySelector('.central-header')
if ( document.documentElement.scrollTop >= 10 ) {
    header.classList.add( 'scrolled' )
} else {
    header.classList.remove( 'scrolled' )
}

window.addEventListener( 'scroll', function() {
    if ( document.documentElement.scrollTop >= 10 ) {
        header.classList.add( 'scrolled' )
    } else {
        header.classList.remove( 'scrolled' )
    }
})


lightbox.option({
    'wrapAround': false,
    'albumLabel': "Imagem %1 de %2"
})