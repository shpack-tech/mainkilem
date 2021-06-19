$(document).ready(function(){
    const promo_screen_slider = new Swiper('.promo_screen_slider', {
        loop : true,
        pagination :{
            el: '.promo_screen_slider_pagination'
        }
    })

    var overlay = $('.overlay'),
        city_popup = $('.popup_city_select')


    $('.main_slider').each(function(){
        var swiper = new Swiper(this, {
        slidesPerView: 1.7,
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: this.parentElement.querySelector('.main_slider_next'),
            prevEl: this.parentElement.querySelector('.main_slider_prev')
        },    
        breakpoints :{
            765 :{
                slidesPerView: 2.5
            },
            1440 :{
                slidesPerView: 4.5

            }
        }
        });
    });
    $('.footer_toggle').unbind().on('touch, click', function(){
        if($(this).find('img').attr('src') === 'img/footerplus.svg'){
        setTimeout(() => {
            $(this).find('img').attr('src', 'img/footerminus.svg')
        }, 100);
            $(this).find('img').css({transform : 'rotate(180deg)'})
            $(this).parent().parent().find('.footer_links_wrap').slideDown()
        } else {
            $(this).parent().parent().find('.footer_links_wrap').slideUp()
            setTimeout(() => {
                $(this).find('img').attr('src', 'img/footerplus.svg')
            }, 100);
            $(this).find('img').css({transform : 'rotate(0)'})

        }
        
    });
    $('.geolocation').on('click', function() {
        callOverlay();
        city_popup.fadeIn('fast');
    });
    $('.city_popup_close').on('click', function() {
        hideOverlay();
        city_popup.fadeOut('fast');
    });

    function callOverlay(){
        overlay.fadeIn();
        $(document.body).css({overflow: 'hidden'})
    }
    function hideOverlay(){
        overlay.fadeOut();
        $(document.body).css({overflow: 'auto'})
    }

    $('.burger').on('click', function(){
        $('.mobile_menu_wrap').animate({width:'toggle'},350);
        $(document.body).css({overflow: 'hidden'})


    })
    $('.close_mobile_menu').on('click', function(){
        $('.mobile_menu_wrap').animate({width:'toggle'},350);
        $(document.body).css({overflow: 'auto'})
    })
    
      $(function(){
        if ($(window).width() > '1024'){
            
        var scrollNow = 0;
        $(window).scroll(function(event){
      
            var scrollNext = $(this).scrollTop();
      
            if (scrollNext > scrollNow){
               $('.header_bot').slideUp('fast');
            }
            else {
                $('.header_bot').slideDown('fast');
            }
      
            scrollNow = scrollNext;  
        });
   
        }
      });
});
