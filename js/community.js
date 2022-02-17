$(() => {
  $("#fullpage").fullpage({
    autoScrolling: true,
    sectionsColor: ["#f2f2f2"],
    navigation: true,
    normalScrollElements: ".main__home__board",
    afterRender: function () {
      $("html").animate({ opacity: 1 }, 1000);
    },
  });
});
