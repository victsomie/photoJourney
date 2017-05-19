// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('stick_y');
    } else {
        $('.main_h').removeClass('stick_y');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
        
          $('.main_h div>a').removeClass('logoOut'); // === Modified by victor. Removes the logo ===
    } else {
        $('.main_h').addClass('open-nav');
        
         $('.main_h div>a').addClass('logoOut'); // === Modified by victor. Removes the logo ===
    }
});

$('.main_h li a').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
        
        $('.main_h div>a').removeClass('logoOut'); // === Modified by victor. Adds backthe logo ===
    }
    
    if($('.main_h div>a').hasClass('logoOut')){
        
    }
});

// ===== VICTORS MODIFICATION =============



// navigation scroll lijepo radi materem
//$('nav a').click(function(event) {
$('a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 1500);
    event.preventDefault();
});
