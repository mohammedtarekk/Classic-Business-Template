$(function(){  // Similar to $(document).ready()
    // Adjusting the height of the header
    let navBar = $('.nav-bar'),
        header = $('.header');
    header.height($(window).height());
    $(window).resize(function(){
        header.height($(window).height());
        $('.welcome').css('paddingTop', (header.height() - navBar.height() - $('.welcome').height())/2);
    });

    // Smooth scroll to sections
    $('.nav-bar ul li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    // Adjust welcome section to vertical center
    $('.welcome').css('paddingTop', (header.height() - navBar.height() - $('.welcome').height())/2);
});

// Control active tabs in nav bar
$('.nav-bar ul li a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
});

// our team
$('.member').hover(function(){
    $(this).find('.name').fadeIn();
});

$('.member').mouseleave(function(){
    $(this).find('.name').fadeOut();
});

// tesimonials slider
(function autoSlider(){
    $('.slider .active').each(function(){
        if($(this).is(':last-child')){
            $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass('active');
                $('.slider div').eq(0).addClass('active').fadeIn();
            });
        }

        $(this).delay(3000).fadeOut(1000, function(){
            $(this).removeClass('active').next().addClass('active').fadeIn();
            autoSlider();
        });
    }); 
})();

// Projects
$('.projects ul li button').click(function(){
    $(this).parent().addClass('active-button').siblings().removeClass('active-button');
});

$('.projects .items .row .item').hover(function(){
    $(this).find('.item-details').fadeIn(400);
});

$('.projects .items .row .item').mouseleave(function(){
    $(this).find('.item-details').fadeOut(400);
});

// Trigger MixItUp Shuffle
mixitup($('#Container'));