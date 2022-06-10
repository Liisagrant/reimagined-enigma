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

console.log("hello fellow friend, add me on github!");
