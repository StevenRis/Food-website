import tabs from './modules/tabs';
import cards from './modules/cards';
import timer from './modules/timer';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import { showModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
  const modalTimerId = setTimeout(
    () => showModal('.modal', modalTimerId),
    50000
  );

  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active'
  );
  cards();
  timer('.timer', '2022-03-31');
  modal('[data-modal]', '.modal', modalTimerId);
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
  calc();

  // console.log(document.documentElement.clientHeight);
  // console.log(window.pageYOffset);

  // getResource('http://localhost:3000/menu')
  // .then((data) => createCard(data));

  // function createCard(data) {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     const element = document.createElement('div');

  //     element.classList.add('menu__item');

  //     element.innerHTML = `
  //     <img src=${img} alt=${altimg} />
  //     <h3 class="menu__item-subtitle">${title}</h3>
  //     <div class="menu__item-descr">${descr}</div>
  //     <div class="menu__item-divider"></div>
  //     <div class="menu__item-price">
  //       <div class="menu__item-cost">Цена:</div>
  //       <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //     </div>
  //     `;

  //     document.querySelector('.menu .container').append(element);
  //   });
  // }

  // // first card
  // new MenuCard(
  //   'img/tabs/vegy.jpg',
  //   'vegy',
  //   'Меню "Фитнес"',
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше    свежих овощей и фруктов. Продукт активных и здоровых людей. Это    абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   9,
  //   '.menu .container'
  //   // 'menu__item',
  //   // 'big'
  // ).render();

  // // second card
  // new MenuCard(
  //   'img/tabs/elite.jpg',
  //   'elite',
  //   'Меню “Премиум”',
  //   'В меню “Премиум” мы используем не только красивый дизайн упаковки,  но и качественное исполнение блюд. Красная рыба, морепродукты,  фрукты - ресторанное меню без похода в ресторан!',
  //   20,
  //   '.menu .container',
  //   'menu__item'
  // ).render();

  // // third card
  // new MenuCard(
  //   'img/tabs/post.jpg',
  //   'post',
  //   'Меню "Постное"',
  //   'Меню “Постное” - это тщательный подбор ингредиентов: полное  отсутствие продуктов животного происхождения, молоко из миндаля,  овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  //   16,
  //   '.menu .container',
  //   'menu__item'
  // ).render();

  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => (item.style.display = 'none'));

  //   slides[slideIndex - 1].style.display = 'block';

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  // prev.addEventListener('click', function () {
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', function () {
  //   plusSlides(1);
  // });
  //
  //
  //
});
