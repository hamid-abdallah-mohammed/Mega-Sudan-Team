// START SLICK ANIMATION
$('.team_slider_animation').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 250,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

/*-------- START SROLLREVEAL ANIMATION  --------*/
// Hero Section
ScrollReveal().reveal(".banner-content-wrapper", {
    reset: true,
    distance: '150px',
    duration: 1000,
    origin: "top",
    interval: 200
});


ScrollReveal().reveal(".team-area-scroll", {
    reset: true,
    distance: '120px',
    duration: 1000,
    origin: "right",
    interval: 300
});

ScrollReveal().reveal(".our-services-area-scroll", {
    reset: true,
    distance: '120px',
    duration: 1000,
    origin: "left",
    interval: 350
});

ScrollReveal().reveal(".block-left-anim", {
    reset: true,
    distance: '150px',
    duration: 1000,
    origin: "left",
    interval: 350
});

ScrollReveal().reveal(".block-right-anim", {
    reset: true,
    distance: '150px',
    duration: 1000,
    origin: "right",
    interval: 350
});

// CONTACT FORM SECTION SCROLL  ANIMATION

ScrollReveal().reveal(".contact-anim-scroll1", {
    reset: true,
    distance: '150px',
    duration: 1000,
    origin: "left",
    interval: 350
});

ScrollReveal().reveal(".contact-anim-scroll2", {
    reset: true,
    distance: '150px',
    duration: 1000,
    origin: "right",
    interval: 350
});