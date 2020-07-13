/* JQUERY */

$(function(){
    $('#btn-teste').click(function(){
        $('#txt-teste')
            .fadeOut('slow')
            .fadeIn('slow')

        $('#msg-teste')
            .text('Leia rápido antes que o tempo acabe')
            .css({
                color:'black',
                padding: '15px',
                display:'block', 
                marginBottom:'15px'
            })
            .delay(1500)
            .fadeOut('fast')
    })

    $('#link1').click(function() {
        $('#img1').fadeIn('fast')
        $('#img2').hide()
        $('#img3').hide()
        $('#img4').hide()
        $('#img5').hide()
    })

    $('#link2').click(function() {
        $('#img1').hide()
        $('#img2').fadeIn('fast')
        $('#img3').hide()
        $('#img4').hide()
        $('#img5').hide()
    })

    $('#link3').click(function() {
        $('#img1').hide()
        $('#img2').hide()
        $('#img3').fadeIn('fast')
        $('#img4').hide()
        $('#img5').hide()
    })

    $('#link4').click(function() {
        $('#img1').hide()
        $('#img2').hide()
        $('#img3').hide()
        $('#img4').fadeIn('fast')
        $('#img5').hide()
    })

    $('#link5').click(function() {
        $('#img1').hide()
        $('#img2').hide()
        $('#img3').hide()
        $('#img4').hide()
        $('#img5').fadeIn('fast')
    })
})