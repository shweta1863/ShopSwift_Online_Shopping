/*============== SHOW MENU ==============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*============== MENU SHOW ==============*/
/*Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

/*============== HIDE SHOW ==============*/
/*Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

/*============== IMAGE GALLERY ==============*/
document.addEventListener('DOMContentLoaded', function () {
  // Your code here
  function imgGallery() {
    const mainImg = document.querySelector('.details_img');
    const smallImg = document.querySelectorAll('.details_small-img');
  
    smallImg.forEach((img) => {
      img.addEventListener('click', function () {
        mainImg.src = this.src;
      });
    });
  }
  
  imgGallery();
});



/*============== SWIPER CATEGORIES ==============*/
document.addEventListener("DOMContentLoaded", function () {
  // Your Swiper initialization code here
  var swiperCategories = new Swiper(".categories_container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });

});


/*============== SWIPER PRODUCTS ==============*/
/*============== PRODUCTS TAB ==============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove 'active-tab' class from all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    // Add 'active-tab' class to the target tab content
    target.classList.add('active-tab');

    // Remove 'active-tab' class from all tabs
    tabs.forEach((t) => {
      t.classList.remove('active-tab');
    });

    // Add 'active-tab' class to the clicked tab
    tab.classList.add('active-tab');
  });
});







