const readMoreButtons = document.querySelectorAll(".catalog__read-more");
const itemsContainers = document.querySelectorAll(
  ".catalog__items.catalog__items-hidden"
);
// console.log(itemsContainers[1]);

readMoreButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    event.preventDefault();
    itemsContainers[index].classList.toggle("catalog__items-hidden");
  });
});

const close = document.querySelector(".cookies__close");
const submit = document.querySelector(".cookies__btn");

close.addEventListener("click", closeCookie);
submit.addEventListener("click", closeCookie);

function closeCookie() {
  document.querySelector(".cookies").style.display = "none";
}

const contentImgBlock = document.querySelector(".about__img");
const contentImg = contentImgBlock.querySelector("img");
const content = document.querySelector(".about__text");

const maxHeight = contentImg.scrollHeight * 0.85;
const words = content.textContent.split(" ");
let newText = "";

for (const word of words) {
  const testText = newText + " " + word;
  content.textContent = testText;
  if (content.scrollHeight <= maxHeight) {
    newText = testText;
  } else {
    content.textContent = newText + "...";
    break;
  }
}

const contentImgBlock2 = document.querySelector(".description__img");
const contentImg2 = contentImgBlock.querySelector("img");
const content2 = document.querySelector(".description__text");

const maxHeight2 = contentImg.scrollHeight * 0.95;
const words2 = content.textContent.split(" ");
let newText2 = "";

for (const word2 of words2) {
  const testText2 = newText2 + " " + word2;
  content2.textContent = testText2;
  if (content2.scrollHeight <= maxHeight2) {
    newText2 = testText2;
  } else {
    content2.textContent = newText2 + "...";
    break;
  }
}

const menu = document.querySelector(".menu");
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", showBurger);
const body = document.querySelector("body");
function showBurger(event) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

const img = document.querySelector(".menu__mobile-search");
const search = document.querySelector(".menu__search");
img.addEventListener("click", showSearch);
//search.addEventListener('click', showSearch);
// const body = document.querySelector('body');
function showSearch(event) {
  //img.classList.toggle('active');
  search.classList.toggle("active");
}

console.log(window.scrollY);

document.addEventListener("DOMContentLoaded", function sleep() {
  console.log(window.scrollY);
  const arrowUp = document.querySelector(".arrow-up");
  console.log("1233");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      arrowUp.style.opacity = "1";
      arrowUp.style.transition = "1s";
      console.log("1233");
    } else {
      arrowUp.style.transition = "1s";
      arrowUp.style.opacity = "0";
      console.log("0987");
    }
  });
  // setTimeout(sleep, 1000);
});
