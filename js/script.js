window.addEventListener('DOMContentLoaded', function() {

  // $('.header-burger__header').click(function() {
  //     $('.header-burger__header').toggleClass('open-menu');
  //     $('.header-nav').toggleClass('open-menu');
  // });

  document.querySelector('.header-burger__header').addEventListener('click', function() {
    document.querySelector('.header-nav').classList.toggle('open-menu'),
    document.querySelector('.header-burger__header').classList.toggle('open-menu')
  })

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  document.querySelectorAll('.work__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.slider').forEach(function(tabContent) {
        tabContent.classList.remove('slider--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('slider--active')
    })
  })

  $(function() {
    $( "#accordion").accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
    });
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };

  } );

})
