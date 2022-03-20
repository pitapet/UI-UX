$(() => {
  $("#fullpage").fullpage({
    normalScrollElements: ".list",
    afterRender: function () {
      $("html").animate({ opacity: 1 }, 500);
    },
  });
});
