$(".service").owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,

});
$(".team").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
            loop: false,
        },
    },
});
$(".work").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
            loop: false,
        },
    },
});
$(".customer").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
            
        },
    },
});