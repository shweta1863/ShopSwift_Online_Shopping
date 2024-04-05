
const myslide = document.querySelectorAll('.myslides'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    slidefun(counter);
}
function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
    let i;
    for(i = 0;i<myslide.length;i++) {
        myslide[i].style.display = "none";
    }
    for(i = 0;i<dot.length;i++) {
        dot[i].classList.remove('active');
    }
    if(n > myslide.length) {
        counter = 1;
    }
    if(n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}  


const slides = document.querySelectorAll('.myslides');
let slideIndex = 0;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Move to the next slide
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide if at the end
    }
    
    slides[slideIndex].style.display = "block";
}

showSlides();

setInterval(showSlides, 2000);


//  second

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 1000); // Change image every 1 second






