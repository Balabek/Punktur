$(document).ready(function() {

    // Subtle fade-in animation for the below-mentioned elements
    // ScrollReveal().reveal('.about_image_holder', {delay: 300});
    // ScrollReveal().reveal('.dorado', {delay: 500, duration: 1400});


    // Close the collapse navbar after a menu link is clicked and bring back the brightness
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.animated-icon1').toggleClass('open');
        $('.punktur_header_area').toggleClass('dimmer');
    });

    if ((screen.width > 991)) {
        $('.navbar-nav>li>a').on('click', function(){
            $('.punktur_header_area').removeClass('dimmer');
        });
    }

    $('.navbar-toggler').on('click', function(){
        $('.punktur_header_area').toggleClass('dimmer');
    });

    // Fancy animation for hamburger menu
    $('.punktur_nav_toggler').on('click', function(){
        $('.animated-icon1').toggleClass('open');
    });

});