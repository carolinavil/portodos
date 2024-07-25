
AOS.init();

$(document).ready(function() {
  $(window).on('scroll', function() {
      if ($(this).scrollTop() > 50) {
          $('.menu-desktop').addClass('active');
      } else {
          $('.menu-desktop').removeClass('active');
      }
  });
});
var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);


$(document).ready(function(){
  $('.sidenav').sidenav();
});

document.addEventListener('DOMContentLoaded', function() {
  // Função para inicializar o carousel
  function initializeCarousel(padding) {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      indicators: false,
      padding: padding,
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
  }

  // Função para verificar o tamanho da tela e atualizar o padding
  function updateCarouselPadding() {

    if (window.innerWidth < 1000){
      var padding = -300
    }
    else{
      var padding = 200
    }
   
    initializeCarousel(padding);
  }

  // Atualiza o padding na carga inicial
  updateCarouselPadding();

  // Atualiza o padding sempre que a janela é redimensionada
  window.addEventListener('resize', updateCarouselPadding);
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

