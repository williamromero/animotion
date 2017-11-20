document.addEventListener('turbolinks:load', function () {
  var submen = document.querySelector('.dynamic-sidebar-list');
  var subsidebar = document.querySelector('.subsidebar');
  var subsidebar_open = document.querySelector('.subsidebar-opened');
  var subsidebar_link = document.querySelector('.sub-nav-link');
  var cnt = 0;

  if (submen) {
    submen.addEventListener('click', function (e) {
      e.preventDefault();
      subsidebar.classList.add('subsidebar-opened');
      cnt++;
      if (cnt >= 2) {
        subsidebar.classList.remove('subsidebar-opened');
        cnt = 0;
      }
    });
  }

  // if (subsidebar_link) {
  //   subsidebar_link.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     cnt = 1;
  //     console.log('click');
  //     subsidebar.classList.add('subsidebar-opened');
  //   });
  // }

});
