

// Grabbing the target elements from the HTML File
//from selectors * 

const list = document.querySelector('.gallery-carousel__img-container--list');
const imgs = Array.from(list.children);
const nextButton = document.querySelector('.gallery-carousel__btn--right');
const prevButton = document.querySelector('.gallery-carousel__btn--left');
const carouselNav = document.querySelector('.gallery-carousel__nav');
const dots = Array.from(carouselNav.children);

// console.log(list);
// console.log(imgs);
// console.log(nextButton);
// console.log(prevButton);
// console.log(carouselNav);

// Getting the width of our images

const imgWidth = imgs[0].getBoundingClientRect().width;
console.log(imgWidth);