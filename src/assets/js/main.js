$(document).ready(function () {
  // Inicializar eventos de navegación y scroll
  initializeNavigation();
  initializeScrollSpy();

  // Inicializar MixItUp (si es usado para portafolios)
  initializeMixItUp();

  // Inicializar Datepicker (si el elemento existe)
  initializeDatepicker();
});

function initializeNavigation() {
  // Manejar clics en enlaces de navegación
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    const targetId = this.hash;

    if (!targetId) return; // Si no hay hash, salir

    const $target = $(targetId);
    if ($target.length) {
      $('html, body')
        .stop()
        .animate(
          { scrollTop: $target.offset().top + 2 },
          500,
          'swing',
          function () {
            window.location.hash = targetId; // Actualizar hash en la URL
          }
        );
      setActiveNavLink($(this)); // Actualizar clase activa
    }
  });
}

function initializeScrollSpy() {
  $(document).on('scroll', function () {
    const scrollPosition = $(document).scrollTop();

    // Verificar posición y activar enlace correspondiente
    $('.nav li a').each(function () {
      const $currentLink = $(this);
      const targetId = $currentLink.attr('href');
      const $targetElement = $(targetId);

      if (
        $targetElement.length &&
        $targetElement.position().top <= scrollPosition &&
        $targetElement.position().top + $targetElement.height() > scrollPosition
      ) {
        setActiveNavLink($currentLink);
      } else {
        $currentLink.removeClass('navactive');
      }
    });
  });
}

function setActiveNavLink($link) {
  // Quitar clase activa de todos los enlaces
  $('.nav li a').removeClass('navactive');
  // Agregar clase activa al enlace actual
  $link.addClass('navactive');
}

function initializeMixItUp() {
  if ($.fn.mixitup) {
    $('#portfolio').mixitup({
      targetSelector: '.item',
      transitionSpeed: 350,
    });
  } else {
    console.warn('MixItUp no está cargado.');
  }
}

function initializeDatepicker() {
  if ($.fn.datepicker) {
    $('#datepicker').datepicker();
  } else {
    console.warn('Datepicker no está cargado.');
  }
}
