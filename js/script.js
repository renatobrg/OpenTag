
$('#down').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.a-open').offset().top
    }, 1000)
})

$('#slick-home').slick({
    autoplay: true,
    pauseOnHover: true,
    prevArrow: '<button type="button" class="slick-prev">teste</button>',
    nextArrow: '<button type="button" class="slick-next">teste</button>'
})


// var menuHamburger = document.querySelector('.menu-hamburger')
// var navMobLi = document.querySelectorAll('.mob-link')

// MENU HAMBURGER
//   function openCloseMenu() {
//     if (!conteudoMenuMobile.classList.contains('hide')) {
//       conteudoMenuMobile.classList.remove('fade-out')
//       conteudoMenuMobile.classList.add('fade-in')
//       menuHamburger.classList.remove('open')
//       menuHamburger.classList.add('close')
//     } else {
//       conteudoMenuMobile.classList.remove('fade-in')
//       conteudoMenuMobile.classList.add('fade-out')
//       menuHamburger.classList.remove('close')
//       menuHamburger.classList.add('open')
//     }
//   }

//   menuHamburger.addEventListener('click', function() {
//     conteudoMenuMobile.classList.toggle('hide')
//     openCloseMenu()
//   })

//   navMobLi.forEach(link => 
//     link.addEventListener('click', function(){
//       conteudoMenuMobile.classList.toggle('hide')
//       openCloseMenu()
//     })
//   )