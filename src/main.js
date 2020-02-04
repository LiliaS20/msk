$(document).ready(function () {

  var wWindow = $(window).width();

  if (wWindow < 768) {

    $('.header-logo__burger').on('click', function () {

      $('.header').toggleClass('burger-opened');

      $('.header-nav, .header-nav nav.menu__item .menu__item-double, .header-social').fadeToggle(300);
      // $('.header-nav, .menu__item-double, .header-social').fadeToggle(300);

    });

    $('.header a, .header-social').on('click', function () {

      $('.header-nav, .header-nav nav.menu__item .menu__item-double, .header-social').fadeOut();

      $('.header').removeClass('burger-opened');

    });

  } else {

    $('.header-logo__burger').on('click', function () {

      if ($(this).hasClass('active')) {

        console.log('dadada');

        $('.header').toggleClass('burger-opened');

        $('.menu__item-double').fadeToggle(300);

      }
    });

    $('.header a, .header-social').on('click', function () {

      $('.menu__item-double').fadeOut();

      $('.header').removeClass('burger-opened');

    });

    $('main').on('click', function () {

      console.log('net');

      $('.header').removeClass('burger-opened');
      $('.menu__item-double').fadeOut();

    });

    $(window).scroll(scrollArrow);

    function scrollArrow() {

      var scrolled = $(window).scrollTop();

      if (scrolled > 210) {

        $('.header-logo__burger').addClass('active');

      } else {

        $('.header-logo__burger').removeClass('active');
      }
    }
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

  $('.creature__cards button, .ads button, .bitrix button, .about button').on('click', function (e) {
    event.preventDefault(e);
    var titleAtr = $(this).closest('.title-input').find('h2, h3').text();
    console.log(titleAtr);
    $(".form_title").val(titleAtr);
    $('#myform').fadeToggle();

  });

  $('#myform span.close, #myform .form__back').on('click', function () {


    $('#myform').fadeToggle();
    $('.form-cont__out').fadeOut('300', function() {
      $('.form-cont__popup').fadeIn();
    });

  });

  //  POPUP OFF

  //  SCROLL ON

  if (wWindow < 768) {

    $('.link-scroll').on('click', function (e) {

      e.preventDefault();
      var aid = $(this).attr("href");
      $('html,body').animate({scrollTop: $(aid).offset().top - 90}, 'slow');

    });

  } else {

    $('.link-scroll').on('click', function (e) {

      e.preventDefault();
      var aid = $(this).attr("href");
      $('html,body').animate({scrollTop: $(aid).offset().top - 135}, 'slow');

    });

  }

  //  SCROLL OFF

  //  POPUP FORM ON

  $('form').on('submit', function (e) {
    e.preventDefault();
    var data = new FormData();
    data.append('action', 'form_action');
    var dataSend = this.querySelectorAll('[data-send]');

    for (var i = 0; i < dataSend.length; i++) {
      var text, checked;
      data.append(dataSend[i].getAttribute('data-send'), dataSend[i].value);
      console.log(dataSend[i].value);
      dataSend[i].value = '';

    }

    $.ajax({
      url: ajax_params.ajax_url,
      type: 'POST',
      data: data,
      processData: false,
      contentType: false,
      success: function (res) {

        $('.form-cont__popup').fadeOut('slow', function() {
          $('.form-cont__out').fadeIn();

        });
      }
    });

  });

  // POPUP FORM OFF

  // MASK INPUT TEL ON

  $("#phone").mask("+7(999)999-99-99");

  // MASK INPUT TEL OFF

});