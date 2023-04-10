function WhenLoaded() {

///quotes-section
const quotes = document.querySelectorAll('.quotes__item');
for (let item of quotes)
{
  item.addEventListener('click', () => {
    let active = document.querySelectorAll('.quotes__quote_active');
    if (active)
    {
      for (let item of active)
        item.classList.remove('quotes__quote_active');
    }
    item.firstElementChild.classList.toggle('quotes__quote_active');
  });
}
///product-page
let largeImg = document.getElementById('largeImg');
let gls = document.querySelectorAll('.gl');
//gl.preventDefault;
console.log('a');
for (let gl of gls)
{
  gl.addEventListener('click', (e) => {
  let target = e.target;

  //while (target != this) {

    // if (target.nodeName == 'A') {
      showThumbnail(target.src, target.alt);
     // break;
    //}

  //   target = target.parentNode;
  // }

});}

function showThumbnail(src, alt) {
  largeImg.src = src;
  largeImg.alt = alt;
}

// var imgs = thumbs.getElementsByTagName('img');
// for (var i = 0; i < imgs.length; i++) {
//   var url = imgs[i].parentNode.href;
//   var img = document.createElement('img');
//   img.src = url;
// }
    const burger = document.querySelector(".menu-burger");
    const menu = document.querySelector(".menu__list");
    function showMenu() {
        burger.classList.toggle("menu-burger_active");
        menu.classList.toggle("menu__list");
        menu.classList.toggle("menu__list-burger");
    }
    burger.addEventListener('click', showMenu);


    const swiperIntro = new Swiper('.list__swiper-container', {
      slidesPerView: 2,
  spaceBetween: 10,
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        767: {
          slidesPerView: 3,
          spaceBetween: 20
        },}
  });
}

document.addEventListener("DOMContentLoaded", WhenLoaded);