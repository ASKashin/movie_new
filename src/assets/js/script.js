(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {
    const options = {
      infinite: true,
      slidesToScroll: 1,
      prevArrow: '<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
      nextArrow: '<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
    }
    $('.slider').slick({
      ...options,
      slidesToShow: 5,
    });
    $('.slider2').slick({
      ...options,
      slidesToShow: 8,
    });

  });
})(jQuery); // End of use strict
