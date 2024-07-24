


var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);


$(document).ready(function(){
  $('.sidenav').sidenav();
});

document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o carousel do Materialize
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
     
      indicators: false,
      padding: -250,
      opacity: false,
  });

  // Obtém a instância do carousel
  var carouselInstance = M.Carousel.getInstance(document.querySelector('.carousel'));

  // Configura as setas personalizadas
  document.querySelector('.carousel-prev').addEventListener('click', function() {
      carouselInstance.prev();
  });

  document.querySelector('.carousel-next').addEventListener('click', function() {
      carouselInstance.next();
  });
});

  // Inicializa o Slick Slider
  $('.slides').slick({
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: $('.slick-prev2'),
      nextArrow: $('.slick-next2'),
      responsive: [
      //   {
      //     breakpoint: 1000,
      //     settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: true
      //     }
      // },
       
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1.5,
                infinite: true,
                dots: false,
                centerMode: true,
            }
          },
          {
            breakpoint: 930,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                centerMode: true,
            }
          },
          {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                centerMode: true,
            }
          },
          {
            breakpoint: 3000,
            settings: {
                slidesToShow:4,
                slidesToScroll:4,
                infinite: true,
                dots: false,
                centerMode: true,
            }
          },
        //   {
        //     breakpoint: 767,
        //     settings: {
        //       centerMode: true,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: false,
        //         dots: false
        //     }
        // },

          
      //     {
      //       breakpoint: 767,
      //       settings: {
      //           slidesToShow: 1,
      //           slidesToScroll: 1,
      //           infinite: true,
      //           dots: false
      //       }
      //   },
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 4,
      //         infinite: true,
      //         dots: false
      //     }
      // },
    
      ]
  });

