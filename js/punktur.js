$(document).ready(function() {

    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href') ).offset().top -1
        }, 100);
    });

    // Subtle fade-in animation for the below-mentioned elements
    ScrollReveal().reveal('.main_image', {delay: 300});
    ScrollReveal().reveal('.secondary_image', {delay: 500, duration: 1400});
    ScrollReveal().reveal('.competence_card', {delay: 500, duration: 700});
    ScrollReveal().reveal('.warum_advantage.adv_one', {delay: 500, duration: 300});
    ScrollReveal().reveal('.warum_advantage.adv_two', {delay: 500, duration: 800});
    ScrollReveal().reveal('.warum_advantage.adv_three', {delay: 500, duration: 1300});
    ScrollReveal().reveal('.warum_advantage.adv_four', {delay: 500, duration: 1900});
    ScrollReveal().reveal('.warum_advantage.adv_five', {delay: 500, duration: 2500});
    ScrollReveal().reveal('.branch', {delay: 500, duration: 600});
    ScrollReveal().reveal('.partner_image_holder', {delay: 500, duration: 400});
    ScrollReveal().reveal('.punktur_form', {delay: 600, duration: 800});


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