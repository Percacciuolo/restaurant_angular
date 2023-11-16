



$(document).ready(() => {
    if ($('#wrap-navTim').length) {
        
        console.log('Start JS navbar example', $('.under-navbar-items.mobile .under-navbar-item'));
       
        $('.upper-option').on('click', (e)=> {
            $('.upper-option').removeClass('option-active');
            $(e.currentTarget).addClass('option-active');
        });

        $('#mobile-drop-wrapper').on('show.bs.collapse','.dropTim-mobile', function(e) {
            if($(e.currentTarget).hasClass('dropTim-mobile')){
                $('#mobile-drop-wrapper').find('.dropTim-mobile.collapse.show').collapse('hide');
            }
        });

      $('.under-navbar-items.mobile').slick({ 
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots:false,
                        prevArrow: false,
                        nextArrow: false                        
                    }
                }
            ]
        }); 


    }
});
