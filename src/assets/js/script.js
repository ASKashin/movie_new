(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {

    $('.slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow:'<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
      nextArrow:'<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
    });

  });
})(jQuery); // End of use strict
