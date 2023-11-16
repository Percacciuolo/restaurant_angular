$(document).ready(() => {
    
    if ($('#service_for_news').length) {
        console.log('Start JS Slickjs example');

        $('.carousel-servizi-3').slick({ 
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/images/back.png'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='../assets/images/next.png'>",
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots:true,
                        prevArrow: false,
                        nextArrow: false                        
                    }
                },
                
                {
                  breakpoint: 700,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots:true,
                        prevArrow: false,
                        nextArrow: false                           
                  }
                }
            ]
        });
    }
    
});