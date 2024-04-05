// Function to change the favicon
function changeFavicon(src) {
  var link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
      document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

// Example: Blinking effect
var originalFavicon = 'favicon.ico';
var blinkingFavicon = 'blinking-favicon.ico';
var isBlinking = false;

function startBlinking() {
  isBlinking = true;
  setInterval(function() {
      if (isBlinking) {
          changeFavicon(blinkingFavicon);
          setTimeout(function() {
              changeFavicon(originalFavicon);
          }, 500);
      }
  }, 1000);
}

// To start blinking
startBlinking();

// To stop blinking after 10 seconds (for example)
setTimeout(function() {
  isBlinking = false;
}, 10000);


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


/*============== DEALS ==============*/
// JavaScript to handle clicking on the image to show popup text
document.querySelector('.deal_image').addEventListener('click', function() {
  var popupText = this.parentElement.querySelector('.popup_text');
  popupText.style.visibility = 'visible';
  popupText.style.opacity = 1;
});

// JavaScript to handle clicking outside the image to hide popup text
document.addEventListener('click', function(event) {
  var popupText = document.querySelector('.popup_text');
  if (!event.target.closest('.image_wrapper')) {
      popupText.style.visibility = 'hidden';
      popupText.style.opacity = 0;
  }
});


// Get the PNG image element
const formImage = document.querySelector('.form_image');

// Add hover effect
formImage.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

formImage.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Add popup effect
formImage.addEventListener('mouseenter', function() {
    const popup = document.createElement('div');
    popup.textContent = this.alt;
    popup.classList.add('popup');
    document.body.appendChild(popup);
    
    const rect = this.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    
    const left = rect.left + rect.width / 2 - popupRect.width / 2;
    const top = rect.bottom;
    
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
});

formImage.addEventListener('mouseleave', function() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
});



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







