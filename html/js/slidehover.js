//슬라이드
// let currSlide = 1;
// showSlide(currSlide);
//
// function button_click(num) {
//   showSlide((currSlide += num));
// }
//
// function showSlide(num) {
//   const slides = document.querySelectorAll(".slide");
//   if (num > slides.length) {
//     currSlide = 1;
//   }
//   if (num < 1) {
//     currSlide = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[currSlide - 1].style.display = "block";
//
// }


// let currSlide2 = 1;
// showSlide2(currSlide2);
//
// function button_click2(num2) {
//   showSlide((currSlide2 += num2));
// }
// function showSlide2(num) {
//   const slides2 = document.querySelectorAll(".sl2");
//   if (num > slides2.length) {
//     currSlide2 = 1;
//   }
//   if (num < 1) {
//     currSlide2 = slides2.length;
//   }
//   for (let i = 0; i < slides2.length; i++) {
//     slides2[i].style.display = "none";
//   }
//   slides2[currSlide2 - 1].style.display = "block";
// }



//클릭시 자동스크롤
  Query(document).ready(function($) {

    $(".scroll").click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
    });
  });

  Query(document).ready(function($) {

    $(".scroll2").click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
    });
  });

  Query(document).ready(function($) {

    $(".scroll3").click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
    });
  });

  Query(document).ready(function($) {

    $(".scroll4").click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
    });
  });
  $(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
