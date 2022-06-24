
  
  // navigation
  if (config.nav) {
      for (i = 0; i < slides.length; i+=1) {
        $('<li/>').attr( {'class': 'nav-item','id': i}).appendTo('.slide-nav');
      };
    $('.nav-item').first().addClass('item-active');
    switch(config.navStyle) { // navigation style
      case 'square':
          $('.nav-item').addClass('square');
          break;
      case 'rectangle':
          $('.nav-item').addClass('rectangle');
          break;
      default:
          $('.nav-item').addClass('dot');
    };
    function navigation() {
      $('.nav-item').removeClass('item-active');
      $('.nav-item').eq(currentIndex).addClass('item-active');
    };
      $('.nav-item').click(function() {
        clearInterval(autoSlide);
        var navNumb =  $(this).attr('id');
        currentIndex = navNumb;
        navigation();
        setSlides();
    });
  };

  (function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery


  /*FlowType.JS 1.0 Copyright (c) 2013, Simple Focus https://simplefocus.com/ license in the LICENSE.txt file or at http://choosealicense.com/licenses/mit*/
(function($) {
    $.fn.flowtype = function(options) {
 
 // Establish default settings/variables
 // ====================================
       var settings = $.extend({
          maximum : 9999,
          minimum : 1,
          maxFont : 9999,
          minFont : 1,
          fontRatio : 35,
          lineRatio : 1.45
       }, options),
 
 // Do the magic math
 // =================
       changes = function(el) {
          var $el = $(el),
             elw = $el.width(),
             width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
             fontBase = width / settings.fontRatio,
             fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
 
          $el.css({
             'font-size' : fontSize + 'px',
             'line-height' : fontSize * settings.lineRatio + 'px'
          });
       };
 
 // Make the magic visible
 // ======================
       return this.each(function() {
          
       // Context for resize callback
          var that = this;
          
       // Set changes on load
          changes(this);
          
       // Make changes upon resize
          $(window).resize(function(){changes(that);});
       });
    };
 }(jQuery));
 
 $('body').flowtype({
  minimum   : 100,
  maximum   : 1200,
  minFont   : 6,
  maxFont   : 40,
  fontRatio : 30,
  lineRatio : 3
 }); 

 // footer
 /* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}

// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});

// bk to top button
