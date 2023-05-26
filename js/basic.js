// slide 넘기는 약속
$(function () {
    $('.main_slide').slick({
        arrows: false,
        // 버튼없애기
        autoplay: true,
        // 자동
        pauseOnHover: false,
        // 마우스 올리면
        pauseOnFocus: false,
        // 클릭했을때 멈추는거

    });


    // mian_visual 화살표← →
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    // $(function () {
    // $('.to_top_banner .btn').on('click', function () {
    //     $('.to_top_banner').toggleClass('on')
    // });

    $(function () {
        $('.to_top_banner').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });


    // 2
    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.md_offers .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    });
    $('.md_offers .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });



    // $(window).on('scroll', function () {
    //     let sct = $(window).scrollTop();

    //     if (sct > 1000) {
    //         $('.to_top_banner').css({ position: 'absolute' });
    //     } else {
    //         $('.to_top_banner').css({ position: 'fixed' });
    //     }
    // })





});

