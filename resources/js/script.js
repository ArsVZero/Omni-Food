$(document).ready(function () {

    // The Sticky Navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50%'
    })

    // Scroll on Buttons
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    // Navigation Scroll
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    // Animation on Scroll
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    // Mobile Nav Icon
    $('.js--nav-icon').click(function () {
        $('.js--main-nav').slideToggle(200);
        if ($('.js--nav-icon i').hasClass('ion-md-menu')) {
            $('.js--nav-icon i').addClass('ion-md-close');
            $('.js--nav-icon i').removeClass('ion-md-menu');
        } else {
            $('.js--nav-icon i').addClass('ion-md-menu');
            $('.js--nav-icon i').removeClass('ion-md-close');
        }
    });

    $(window).bind('resize', function (e) {
        this.location.reload(false);
    });
});