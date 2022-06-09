window.onscroll = function () {
  myScroll();
};

const nav = document.querySelector("#navbar");
const sticky = nav.offsetTop;

function myScroll() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const nextImageDelay = 4000;
let currentImgCounter = 0;
const slideImages = document.querySelectorAll(".slideshow");

const nextImage = () => {
  slideImages[currentImgCounter].style.opacity = 0;
  currentImgCounter = (currentImgCounter + 1) % slideImages.length;
  slideImages[currentImgCounter].style.opacity = 1;
};

slideImages[currentImgCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

console.log("hello fellow friend, add me on github!");
