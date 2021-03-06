$(document).ready(function () {
    var pageId = $('body').attr('id')

    $('.chat-icon').on('click', function () {
        // set auto focus to inputbox
        autoFocusInput()
    })
    function autoFocusInput() {
        setTimeout(function () {
            $("input[name='input-box']").focus()
        }, 2000)
    }
    // set auto focus to inputbox
    autoFocusInput()

    /* on click possible action list item: scroll to initial possition 
    Note: this page applicable to page-8
    */
    if (pageId == 'page-8') {
        $('.offcanvas-body').animate(
            {
                scrollTop: $('.scroll-top').offset().top - 90
            },
            1000
        )
    }

    //replace close icon on
    $('.js-close-button').mouseenter(function () {
        $(this).find('img').attr('src', 'assets/img/ionic-ios-close-black.svg')

        // .attr('src', '../../assets/img/ionic-ios-close-black.svg')
    })

    $('.js-close-button').mouseleave(function () {
        $(this).find('img').attr('src', 'assets/img/ionic-ios-close.svg')
    })

    // Replace mic icon on hover effect
    $('.mic-icon').mouseenter(function () {
        $(this)
            .find('img')
            .attr('src', 'assets/img/microphone-alt-solid-black.svg')
    })

    $('.mic-icon').mouseleave(function () {
        $(this).find('img').attr('src', 'assets/img/microphone-alt-solid.svg')
    })
})
