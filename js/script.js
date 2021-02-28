AOS.init();

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

$({ Counter: 0 }).animate({
    Counter: $('.number1').text()
    }, {
    duration: 2000,
    easing: 'swing',
    step: function() {
        $('.number1').text(Math.ceil(this.Counter));
    }
});

$({ Counter: 0 }).animate({
    Counter: $('.number2').text()
    }, {
    duration: 2000,
    easing: 'swing',
    step: function() {
        $('.number2').text(Math.ceil(this.Counter));
    }
});

$({ Counter: 0 }).animate({
    Counter: $('.number3').text()
    }, {
    duration: 2000,
    easing: 'swing',
    step: function() {
        $('.number3').text(Math.ceil(this.Counter));
    }
});

$({ Counter: 0 }).animate({
    Counter: $('.number4').text()
    }, {
    duration: 2000,
    easing: 'swing',
    step: function() {
        $('.number4').text(Math.ceil(this.Counter));
    }
});


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