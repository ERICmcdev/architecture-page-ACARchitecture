var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuItems = document.querySelectorAll('.nav a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
  console.log(item)
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 80;
  scrollToPosition(to);
}

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
  window.scroll({
    top: to,
    behavior: "smooth",
  })
  // smoothScrollTo(0, to);
}


