

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
// console.log(imgWidth);

// Arraomgom tje o,ages mext to one another 

// function setImgPosition(img, index) {
//     img.style.left = imgWidth * index + 'px';
// }

const setImgPosition = (img, index) => {
    img.style.left = imgWidth * index + 'px';
};

imgs.forEach(setImgPosition);


/* When we click on the right button, move image to the left*/

nextButton.addEventListener("click", (e) => {
    const currentImg = list.querySelector(".current--img");
    // console.log(currentImg);
    const nextImg = currentImg.nextElementSibling;
    // console.log(nextImg);

    const distToMove = nextImg.style.left;
    // console.log(distToMove);

    //*_*_*_*_*_*_*_*_ Move to the Next Image

    list.style.transform = "translateX(-" + distToMove + ")";

    // Removing the current--img class 

    currentImg.classList.remove('current--img');
    nextImg.classList.add('current--img');

});