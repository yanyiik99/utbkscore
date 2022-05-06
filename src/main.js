AOS.init();

// Function nambah angka
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerHTML = '0';

  const updateCounter = () => {
    const target = counter.getAttribute('data-target');

    const a = +counter.innerHTML;

    const nambah = target / 400;
    // console.log(nambah);

    if (a < target) {
      counter.innerHTML = `${Math.ceil(a + nambah)}`;
    }
    setTimeout(updateCounter, 1);
  };

  updateCounter();
});

// Navbar Transparant
let nav = document.querySelector('nav');

$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
