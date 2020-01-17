$(window).on('load', () => {
  $('.hero-text').addClass('animate');
});

$(document).ready(() => {
  const controller = new ScrollMagic.Controller();

  controller.scrollTo((target) => {
    TweenMax.to(window, 0.5, {
      scrollTo: {
        y: target,
        autoKill: true, // Allow scroll position to change outside itself
      },
      ease: Cubic.easeInOut,
    });
  });

  const navScene = new ScrollMagic.Scene({
    triggerElement: '.scroll-anchor',
    triggerHook: 0,
  })
    .setClassToggle('.navbar', 'scrolled')
    .addTo(controller);

  $(document).on('click', 'a[href^=\\#]', function (e) {
    const id = $(this).attr('href');

    if ($(id).length > 0) {
      e.preventDefault();

      controller.scrollTo(id);

      if (window.history && window.history.pushState) {
        history.pushState('', document.title, id);
      }
    }
  });
});
