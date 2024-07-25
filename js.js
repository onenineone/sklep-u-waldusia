document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname.split("/").pop();
    if (path === '') {
      path = 'index.html';
    }
    var navItems = document.querySelectorAll('.navbar-nav .nav-item');
    navItems.forEach(function(navItem) {
      navItem.classList.remove('active');
    });
    var target = document.querySelector('.navbar-nav .nav-link[href="' + path + '"]');
    if (target) {
      target.parentElement.classList.add('active');
    }
  });


document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1000, 
        wrap: true,
        pause: 'hover'
    });
});

function toggleMenu() {
  const sidenav = document.getElementById('sidenav-1');
  sidenav.classList.toggle('show');
  const burgerIcon = document.querySelector('.burger-menu i');
  burgerIcon.classList.toggle('fa-bars');
  burgerIcon.classList.toggle('fa-times');
}

document.addEventListener('click', function(event) {
  const sidenav = document.getElementById('sidenav-1');
  const burger = document.querySelector('.burger-menu');

  if (!sidenav.contains(event.target) && !burger.contains(event.target)) {
    sidenav.classList.remove('show');
    const burgerIcon = document.querySelector('.burger-menu i');
    burgerIcon.classList.add('fa-bars');
    burgerIcon.classList.remove('fa-times');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var coll = document.querySelectorAll(".collapsible-section .collapsible");
  coll.forEach(function(btn) {
    btn.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;

      if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "18px";
      } else {
        content.style.maxHeight = null;
        content.style.padding = "0 18px";
      }
    });
  });
});