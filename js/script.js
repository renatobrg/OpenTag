
$('#down').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.a-open').offset().top
    }, 1000)
})

$('#slick-home').slick({
    autoplay: true,
    pauseOnHover: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../imgs/prev.png" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../imgs/next.png" /></button>'
})

lightbox.option({
    'wrapAround': false,
    'albumLabel': "Imagem %1 de %2"
})