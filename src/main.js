

  $(document).ready(function () {

    var wWindow = $(window).width();

    if (wWindow < 768) {

      $('.header-logo__burger').on('click', function () {

        $('.header').toggleClass('burger-opened');

        $('.header-nav, .header-social').fadeToggle(300);

      });

    } else {


      $(window).scroll(scrollArrow);

      function scrollArrow() {

        var scrolled = $(window).scrollTop();

        if (scrolled > 110){

          // console.log(scrolled);

          $('.one-trouble').removeClass('active');
          $('.double-trouble').addClass('active');
          // $('.three-trouble').addClass('active');

          $('.header-logo__burger').addClass('active');

          $('.header-logo__burger.active').on('click', function () {

            console.log(scrolled + 'da');

            $('.one-trouble').toggleClass('move-left');

            $( '.one-trouble a' ).on("click", function(){
              $('.one-trouble').removeClass('move-left');
            });

            $('.header').toggleClass('burger-opened');

          });

          $('main').on('click', function () {

            console.log(scrolled + 'net');

            $('.one-trouble').removeClass('move-left');

            $('.header').removeClass('burger-opened');

          });

        } else{

          $('.one-trouble').addClass('active');

          $('.double-trouble').removeClass('active');

          $('.three-trouble').removeClass('active');

          $('.header-logo__burger').removeClass('active');

          $('.one-trouble').removeClass('move-left');

          $('.header').removeClass('burger-opened');
        }
      }

      /*

      var scrolled = $(window).scrollTop();

      if (scrolled > 110){

        console.log(scrolled);

        $('.one-trouble').removeClass('active');
        $('.double-trouble').addClass('active');
        $('.three-trouble').addClass('active');

        $('.header-logo__burger').addClass('active');

        $('.header-logo__burger').on('click', function () {

          $('.one-trouble').toggleClass('move-left');

          $('.header').toggleClass('burger-opened');

        });

        $('main').on('click', function () {

          $('.one-trouble').removeClass('move-left');

          $('.header').removeClass('burger-opened');

        });

      } else {

        $('.one-trouble').addClass('active');

        $('.double-trouble').removeClass('active');

        $('.three-trouble').removeClass('active');

        $('.header-logo__burger').removeClass('active');

        $('.one-trouble').removeClass('move-left');

        $('.header').removeClass('burger-opened');
      }

      */

    }


    //POPUP MENU OFF

    //SLIDER ON

    $('.def-slider').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots: false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });

    //SLIDER OFF

    //SLIDER POPUP CREATURE ON

    $('.def-slider .blue-but button').on('click', function () {

      var lila = $(this).closest('.item').find('.items_for-popup').html();

      $('.p-slider').html(lila);

      var $owl = $('.p-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
      });

      $owl.trigger('refresh.owl.carousel');


      $('.slider-popup').fadeIn('slow', function() {


      });

    });

    //SLIDER POPUP CREATURE OFF

    //SLIDER popup ON

    $('.slider-popup__back').on('click', function(){

      // $('.p-slider').html('');

      $('.p-slider').trigger('destroy.owl.carousel').removeClass('owl-loaded');
      $('.p-slider').find('.owl-stage-outer').children().unwrap();

      $('.slider-popup').fadeOut('slow', function() {


      });

    });

    //SLIDER popup OFF

  //  POPUP ON

    $('.creature__cards button, .ads button, .bitrix button, .about button').on('click', function () {

      $('#myform').fadeToggle();

    });

    $('#myform span.close').on('click', function () {


      $('#myform').fadeToggle();

    });

  //  POPUP OFF

  //  SCROLL ON

    $('.link-scroll').on('click', function (e) {

      e.preventDefault();
      var aid = $(this).attr("href");
      $('html,body').animate({scrollTop: $(aid).offset().top - 135},'slow');

    });

  //  SCROLL OFF

  });