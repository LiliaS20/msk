

  $(document).ready(function () {

    console.log('YEP');

    function forRes() {
      var wWindow = $(window).width();
      console.log(wWindow);

      if (wWindow < 768) {

        $('.header-logo__burger').on('click', function () {

          $('.header').toggleClass('burger-opened');

          $('.header-nav, .header-social').fadeToggle(300);

        });

      } else {

        $(window).scroll(scrollArrow);

        function scrollArrow() {
          var scrolled = $(window).scrollTop();

          if (scrolled > 130){

            $('.one-trouble').removeClass('active');
            $('.double-trouble').addClass('active');
            $('.header-logo__burger').addClass('active');

            $('.header-logo__burger').on('click', function () {

                $('.one-trouble').toggleClass('move-left');
                $('.header').toggleClass('burger-opened');
            });



          } else {

            $('.one-trouble').addClass('active');
            $('.double-trouble').removeClass('active');
            $('.header-logo__burger').removeClass('active');

            $('.one-trouble').removeClass('move-left');

          }
        }
      }
    }

    forRes();




  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
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



  var form = document.getElementsByClassName("form");
  var butform = document.getElementsByClassName("but-form");
  var close = document.getElementsByClassName("close");

  butform.onclick = function (){
    form.style.display = "none";
  }

  close.onclick = function (){
    form.style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == form) {
      modal.style.display = "none"
    }
  }



