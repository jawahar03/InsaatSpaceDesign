let scrollPosition = 0;

function openContactPopup(event) {
event.preventDefault();

// Store the current scroll position
scrollPosition = window.scrollY;

document.body.classList.add("active-popup");

// Scroll to the contact popup
const contactPopup = document.querySelector('.contact-popup');
contactPopup.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeContactPopup() {
document.body.classList.remove("active-popup");

// Restore the scroll position
window.scrollTo(0, scrollPosition);
}

var count = document.getElementsByClassName("count");
var inc = [];

function incrementFunc() {
  for (var i = 0; i < count.length; i++) {
    inc.push(1);
    if (inc[i] < count[i].getAttribute("max-data")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}

function handleScroll() {
  var timer;

  function checkVisibility() {
    var topElement = main.offsetTop;
    var btmElement = main.offsetTop + main.clientHeight;
    var topScreen = window.pageYOffset;
    var btmScreen = window.pageYOffset + window.innerHeight;

    if (btmScreen > topElement && topScreen < btmElement) {
      incrementFunc();
    } else {
      clearInterval(timer);
    }
  }

  window.addEventListener("scroll", function () {
    clearInterval(timer);
    timer = setInterval(checkVisibility, 100);
  });
}

var main = document.getElementById("counter");
handleScroll();


window.addEventListener('scroll', revealOnScroll);
      
function revealOnScroll() {
  var revealElement = document.querySelector('.this');
  var revealPosition = revealElement.offsetTop - window.innerHeight + 100;

  if (window.scrollY > revealPosition) {
    revealElement.classList.add('reveal');
  }
}

// js for what is session 
document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper('.ses', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      915: {
        slidesPerView: 5,
        centeredSlides: false,
        spaceBetween: 16
      }
    }
  });
});
// js for  what we do in insaat 1st slide
document.addEventListener("DOMContentLoaded", function () {
  var swiper1 = new Swiper('.firstone', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
          el: '.swiper-pagination-1',
          clickable: true,
      },
      breakpoints: {
          915: {
              slidesPerView: 5,
              centeredSlides: false,
              spaceBetween: 16
          }
      }
  });

  // js for what we do in insaat auto-swipe feature
  const startAutoSwipeElement1 = document.getElementById('startAutoSwipe');

  const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Start auto-sliding after a 5-second delay
              setTimeout(() => {
                  swiper1.autoplay.start();
              }, 4000);

              // Stop observing once it starts
              observer1.disconnect();
          }
      });
  }, { threshold: 0.5 });

  observer1.observe(startAutoSwipeElement1);
});

// js for what we do in insaat 2nd slide
document.addEventListener("DOMContentLoaded", function () {
  var swiper2 = new Swiper('.secondone', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
          el: '.swiper-pagination-2',
          clickable: true,
      },
      breakpoints: {
          915: {
              slidesPerView: 5,
              centeredSlides: false,
              spaceBetween: 16
          }
      }
  });

  // js for what we do in insaat auto-swipe feature
  const startAutoSwipeElement2 = document.getElementById('startAutoSwipe1');

  const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Start auto-sliding after a 5-second delay
              setTimeout(() => {
                  swiper2.autoplay.start();
              }, 4000);

              // Stop observing once it starts
              observer2.disconnect();
          }
      });
  }, { threshold: 0.5 });

  observer2.observe(startAutoSwipeElement2);
});

// js for what we do in insaat 3rd slide
document.addEventListener("DOMContentLoaded", function () {
  var swiper3 = new Swiper('.thirdone', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
          el: '.swiper-pagination-3',
          clickable: true,
      },
      breakpoints: {
          915: {
              slidesPerView: 5,
              centeredSlides: false,
              spaceBetween: 16
          }
      }
  });

  // js for what we do in insaat auto-swipe feature
  const startAutoSwipeElement3 = document.getElementById('startAutoSwipe2');

  const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Start auto-sliding after a 5-second delay
              setTimeout(() => {
                  swiper3.autoplay.start();
              }, 4000);

              // Stop observing once it starts
              observer3.disconnect();
          }
      });
  }, { threshold: 0.5 });

  observer3.observe(startAutoSwipeElement3);
});

// js for what we do in insaat 3rd slide
document.addEventListener("DOMContentLoaded", function () {
  var swiper3 = new Swiper('.fourthone', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
          el: '.swiper-pagination-3',
          clickable: true,
      },
      breakpoints: {
          915: {
              slidesPerView: 5,
              centeredSlides: false,
              spaceBetween: 16
          }
      }
  });

  // js for what we do in insaat auto-swipe feature
  const startAutoSwipeElement3 = document.getElementById('startAutoSwipe3');

  const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Start auto-sliding after a 5-second delay
              setTimeout(() => {
                  swiper3.autoplay.start();
              }, 4000);

              // Stop observing once it starts
              observer3.disconnect();
          }
      });
  }, { threshold: 0.5 });

  observer3.observe(startAutoSwipeElement3);
});