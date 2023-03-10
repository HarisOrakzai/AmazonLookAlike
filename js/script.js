$( document ).ready(function() {

        $("#slider").owlCarousel({
          items: 1,
          loop: true,
          smartSpeed: 800,
          autoplay: true,
        });

        $('#items-slider').owlCarousel({
          margin: 14,
          autoWidth:true,  
          nav: true,
          dots: false,
          navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
        });

        $('.form-control, f.a-search').click(function(){
          $('.search-wrap').toggle();
        });

        $("#example").eocjsNewsticker({
          divider:'::',
          type:'static',
        });

         $('.my-listslider').listslider({
          left_label: '<<',
          right_label: '>>'
        });

        $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y < 100) {
            $('.rayban-img, .crt').fadeOut();
          } else {
            $('.rayban-img, .crt').fadeIn();
          }
        });

});
// var current_star_statusses = [];

// star_elements = $('.fa-star').parent();

// star_elements.find(".fa-star").each(function(i, elem) {
//   current_star_statusses.push($(elem).hasClass('yellow'));
// });

// star_elements.find(".fa-star").mouseenter(changeRatingStars);
// star_elements.find(".fa-star").mouseleave(resetRatingStars);

// /**
//  * Changes the rating star colors when hovering over it.
//  */
// function changeRatingStars() {
//   // Current star hovered
//   var star = $(this);

//   // Removes all colors first from all stars
//   $('.fa-star').removeClass('gray').removeClass('yellow');

//   // Makes the current hovered star yellow
//   star.addClass('yellow');

//   // Makes the previous stars yellow and the next stars gray
//   star.parent().prevAll().children('.fa-star').addClass('yellow');
//   star.parent().nextAll().children('.fa-star').addClass('gray');
// }

// /**
//  * Resets the rating star colors when not hovered anymore.
//  */
// function resetRatingStars() {
//   star_elements.each(function(i, elem) {
//     $(elem).removeClass('yellow').removeClass('gray').addClass(current_star_statusses[i] ? 'yellow' : 'gray');
//   });
// }