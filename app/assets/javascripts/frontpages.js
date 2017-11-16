document.addEventListener('turbolinks:load', function () {
  var menu_btn = document.querySelector('.nav-menu-responsive-icon');
  var exit_btn = document.querySelector('.nav-link-responsive-exit');
  var menu = document.querySelector('.nav-list-navbar-responsive');
  // var main_slider_txt = document.querySelector('.principal-home-slider-txt').offsetTop;

  if (menu_btn) {
    menu_btn.addEventListener('click', function () {
      menu.classList.toggle('nav-list-navbar-responsive-active');
    });
  }

  if(exit_btn) {
    exit_btn.addEventListener('click', function () {
      menu.classList.remove('nav-list-navbar-responsive-active');
    });
  }

  var principal_btn = document.querySelector('.principal-home-link-btn');
  var elementPosition;
  if (principal_btn) {
    principal_btn.addEventListener('click', function (el) {
      el.preventDefault();
      el.stopPropagation();
      elementPosition = document.querySelector('.first-block-homepage').offsetTop;
      elementPosition = elementPosition - 100;
      scrollTo(document.body, elementPosition, 200);
    });
  }
});
