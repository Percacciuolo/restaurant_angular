$(document).ready(() => {
    if ($('#slickjs-example').length) {
        console.log('Start JS Slickjs example');

        $('.carousel-slickjs-examples').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });

      /*   $('.your-class').slick({
            infinite: true,
          }); */
    }
});