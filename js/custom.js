
$(document).ready(function() {

// Wow //
    new WOW().init();


//  Sticky  //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });


//  Toggle-ber //
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('selected-active');
    });


//  Accordion //
    $(document).ready(function () {
        $('.accordion a').click(function () {
            $(this).toggleClass('active');
            $(this).next('.content').slideToggle(400);
        });
    });


//  Home  //
    $('.Performance-gallery').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        dots: true,
        autoplayTimeout: 5000,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 5,
                nav: false
            },
            1000: {
                items: 7,
                nav: true,
                loop: false
            }
        }

    })

// Product page  //
    $('.product-gallery').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }

    })


//  Search-bar-top  //

    $(document).ready(function () {
        $("#ser-input").focus(function () {
            $('.search-full-view').addClass("search-normal-screen");
        });
        $("#search-close").click(function () {
            $('.search-full-view').removeClass("search-normal-screen");
        });
    });


//  plus minus  //

    // $(document).ready(function () {
    //     $('.count').prop('disabled', true);
    //     $(document).on('click', '.plus', function () {
    //         $('.count').val(parseInt($('.count').val()) + 1);
    //     });
    //     $(document).on('click', '.minus', function () {
    //         $('.count').val(parseInt($('.count').val()) - 1);
    //         if ($('.count').val() == 0) {
    //             $('.count').val(1);
    //         }
    //     });
    //
    //     $('.count1').prop('disabled', true);
    //     $(document).on('click', '.plus1', function () {
    //         $('.count1').val(parseInt($('.count1').val()) + 1);
    //     });
    //     $(document).on('click', '.minus1', function () {
    //         $('.count1').val(parseInt($('.count1').val()) - 1);
    //         if ($('.count1').val() == 0) {
    //             $('.count1').val(1);
    //         }
    //     });
    //
    // });


});

