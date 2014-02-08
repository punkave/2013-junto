ScheduleAccordion = function(){
  var scheduleTitle = $('.schedule-title');
  $('.schedule-content').hide();

  scheduleTitle.click(function(){
    $(this).next('.schedule-content').slideToggle();
  });
};

MagicScroll = function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top-150
            }, 500, 'linear');
            return false;
        }
    }
  });
};

FixedNav = function() {
  $(window).scroll(function () {
      if ($(window).scrollTop() > 440) {
        $('nav').addClass('fixed').removeClass('floated');
      }
      else {
        $('nav').addClass('floated').removeClass('fixed');
      };
  });
};

MovingTriangle = function() {
  $(window).scroll(function () {
    var personOffset = $('#persons').offset().top - $(window).scrollTop();
    if (personOffset > 100 && personOffset < -120) {
      $('nav .pointer').css('left', '500px');
    };
  });
};




$(document).ready(function(){
  window.scheduleAccordion = new ScheduleAccordion();
  window.magicScroll = new MagicScroll();
  window.fixedNav = new FixedNav();
  window.movingTriangle = new MovingTriangle();
});
