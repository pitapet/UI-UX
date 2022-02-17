$(document).ready(function () {
  $("#fullpage").fullpage({
    navigation: true,
    slidesNavigation: true,
    continuousVertical: true,
    loopHorizontal: false,
    afterRender: function () {
      $("html").animate({ opacity: 1 }, 500);
    },
  });
});
