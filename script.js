document.addEventListener('DOMContentLoaded', function () {
  //navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const collapseNavbar = function () {
    // Ověříme, zda je navigační menu v rozbalovacím režimu
    if (window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(navbarToggler.nextElementSibling, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  navLinks.forEach(function (link) {
    link.addEventListener('click', collapseNavbar);
  });

  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('hide.bs.modal', function () {
      const memory = this.innerHTML;
      this.innerHTML = memory;
    });
  });
});
