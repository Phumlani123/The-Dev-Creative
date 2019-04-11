$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid fixed-top');
        } else {
            $('.navbar').removeClass('solid fixed-top');
        }
    });
});



baguetteBox.run('.compact-gallery', {animation:'slideIn'});