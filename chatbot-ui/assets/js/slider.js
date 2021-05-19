$(document).ready(function () {
    var item_length = $('.slick-track> div').length - 1

    $('.your-class').slick({
        infinite: false,
        slidesToScroll: 1,
        dots: true,
        speed: 100,
        slidesToShow: 1,
        fade: true,
        adaptiveHeight: true,
        onAfterChange: function (slide, index) {
            if (item_length == index) {
                alert('Slide 2')
            }
        },
        prevArrow:
            "<button class='btn btn-light btn-lg slick-prev-btn'>skip</button>",
        nextArrow:
            "<button class='btn  btn-light btn-lg slick-next-btn'><span class='slick-next-btn-text'>Next</span><span class='slick-right-icon'><img class='arrow-icon' src='assets/img/others/caret-right-solid.svg'/></span></button>"
    })
    $('#btncheck5,#btncheck51,#btncheck511').click(function () {
        if ($(this).prop('checked') == true) {
            console.log('Checkbox is checked.')
            $('.other-input-div').css('display', 'block')
            $('.slick-prev-btn').css('display', 'none')
        } else if ($(this).prop('checked') == false) {
            console.log('Checkbox is unchecked.')
            $('.other-input-div').css('display', 'none')
            $('.slick-prev-btn').css('display', 'block')
        }
    })
    $('.your-class').on(
        'beforeChange',
        function (event, slick, currentSlide, nextSlide) {
            console.log(nextSlide)
            if (nextSlide >= 1 && nextSlide < 3) {
                $('.other-input-div').css('display', 'none')
                $('.slick-prev-btn').css('display', 'block')
                $('.slick-prev-btn').addClass(
                    'slick-disabled slick-disabled-btn'
                )
                $('.slider-bg').css('display', 'block')
                $('.offcanvas-body').addClass('bg-primary')
                $('.slider-bg-for-4th-slide ').addClass('hide')
                $('.close-icon').removeClass('transparent-icon-bg')
                $('.close-icon')
                    .find('img')
                    .attr('src', 'assets/img/arrow-right.svg')
            }
            if (nextSlide < 1) {
                $('.slick-prev-btn').addClass(
                    'slick-disabled slick-disabled-btn'
                )
            }
            if (nextSlide == 2) {
                $('.slick-next-btn-text').text('Done')
                $('.slick-right-icon')
                    .find('img')
                    .attr('src', 'assets/img/others/check-circle-solid.svg')
                    .removeClass('arrow-icon')
                    .addClass('circle-icon')
            } else {
                $('.slick-next-btn-text').text('Next')
                $('.slick-right-icon')
                    .find('img')
                    .attr('src', 'assets/img/others/caret-right-solid.svg')
                    .addClass('arrow-icon')
                    .removeClass('circle-icon')
            }
            if (nextSlide == 3) {
                $('.slick-prev-btn').css('display', 'none')
                $('.other-input-div').css('display', 'none')
                $('.slick-next-btn').css('display', 'none')
                $('.slider-bg').css('display', 'none')
                $('.offcanvas-body').removeClass('bg-primary')
                $('.slider-bg-for-4th-slide').removeClass('hide')
                $('.close-icon').addClass('transparent-icon-bg')
                $('.close-icon')
                    .find('img')
                    .attr('src', 'assets/img/arrow-right-light.svg')
            }
        }
    )
})

$(document).on('click', '.slick-disabled-btn', function () {
    window.location.replace('page-2.html')
})
