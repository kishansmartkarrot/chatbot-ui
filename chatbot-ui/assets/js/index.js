$('.why-important').on('click', function () {
    $('.regular-list').toggleClass('hide animate__animated animate__fadeInLeft')

    $('#why-important').toggleClass('text-special')
})
$(document).ready(function () {
    $('input[name=input-box]').trigger('click')
    $('.js-close-button').mouseenter(function () {
        alert(1)
        $(this).find('img').attr('src', '../img/ionic-ios-close.svg')
    })

    $('.js-close-button').mouseleave(function () {
        alert(1)
        $(this).find('img').attr('src', '../img/ionic-ios-close-black.svg')
    })
    $('.mic-icon').mouseenter(function () {
        $(this)
            .find('img')
            .attr('src', '../../assets/img/microphone-alt-solid-black.svg')
    })

    $('.mic-icon').mouseleave(function () {
        $(this)
            .find('img')
            .attr('src', '../../assets/img/microphone-alt-solid.svg')
    })
})
