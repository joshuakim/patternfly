// PatternFly Namespace
var PatternFly = PatternFly || {};

$(document).ready(function() {
  // Call sidebar() on ready if .sidebar-pf exists
  if ($('.sidebar-pf').length > 0) {
    sidebar();
  }
});

$(window).resize(function() {
  // Call sidebar() on resize if .sidebar-pf exists
  if ($('.sidebar-pf').length > 0) {
    sidebar();
  }
});

// PatternFly Sidebar 
// Set height of sidebar-pf to height of viewport minus height of navbar-pf if not mobile
function sidebar() {
  var viewportHeight = $(window).height();
  var navbarpfHeight = $('.navbar-pf').outerHeight();
  var colHeight = 0;
  if ( $('.navbar-pf .navbar-toggle').is(':hidden')) {
    colHeight = viewportHeight - navbarpfHeight;
  }
  $('.sidebar-pf').parent('.row').children('[class*="col-"]').css({ "min-height":colHeight});
}

// Util: PatternFly Popovers
// Add data-close="true" to insert close X icon
(function($) {
  PatternFly.popovers = function( selector ) {
    var allpopovers = $(selector);
    
    // Initialize
    allpopovers.popover();
    
    // Add close icons
    allpopovers.filter('[data-close=true]').each(function(index, element) {
      var $this = $(element),
        title = $this.attr('data-original-title') + '<button type="button" class="close" aria-hidden="true"><span class="pficon pficon-close"></span></button>';

      $this.attr('data-original-title', title);
    });
    
    // Bind Close Icon to Toggle Dispaly
    allpopovers.on('click', function(e) {
      var $this = $(this);
        $title = $this.next('.popover').find('.popover-title');
      
      // Only if data-close is true add class "x" to title for right padding
      $title.find('.close').parent('.popover-title').addClass('closable');
      
      // Bind x icon to close popover
      $title.find('.close').on('click', function() {
        $this.popover('toggle');
      });
      
      // Prevent href="#" page scroll to top
      e.preventDefault();
    });
  };
})(jQuery);