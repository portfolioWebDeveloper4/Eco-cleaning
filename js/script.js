$(document).ready(function () {
   // gulp ===================================================
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
   // gulp ===================================================





   // burger =================================================
   const body = document.querySelector('body');
   const burger = document.querySelectorAll('.header__burger');
   const menu = document.querySelectorAll('.menu');
   const menuLink = document.querySelectorAll('.menu__link');

   for (i = 0; i < burger.length; i++) {
      burger[i].onclick = function() {
         for (i = 0; i < menu.length; i++) {
            menu[i].classList.toggle('active');
         };
         body.classList.toggle('lock');
      };
   };

   for (i = 0; i < menuLink.length; i++) {
      menuLink[i].onclick = function() {
         for (i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
         };
         body.classList.remove('lock');
      };
   };
   // burger =================================================





   // slider =================================================
   let position = 0;
   let slideToShow = 2;
   const slideToScroll = 1;

   if ($(window).width() < 767){
      slideToShow = 1;

      $('#wrapper').removeClass();
   }
   //
   const viewport = $('.carousel__viewport');
   const track = $('.carousel__track');
   const item = $('.carousel__item');
   const buttonPrev = $('.carousel__button--prev');
   const buttonNext = $('.carousel__button--next');
   //
   const itemsCount = item.length;
   const itemWidth = viewport.width() / slideToShow;
   const movePosition = slideToScroll * itemWidth



   item.each(function (index, item) {
      $(item).css({
         minWidth: itemWidth,
      })
   });

   buttonPrev.click(function () {
      const itemsLeft = Math.abs(position) / itemWidth;

      position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

      setPosition();
      checkButtons();
   });

   buttonNext.click(function () {
      const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

      position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

      setPosition();
      checkButtons();
   });



   const setPosition = () => {
      track.css({
         transform: `translateX(${position}px)`
      });
   };

   const checkButtons = () => {
      buttonPrev.prop('disabled', position === 0);
      buttonNext.prop(
         'disabled',
         position <= -(itemsCount - slideToShow) * itemWidth
      );
   };



   checkButtons();
   // slider =================================================





   // autoReloadSite =========================================
   window.addEventListener('resize', function () { 
      "use strict";
      window.location.reload(); 
   });
   // autoReloadSite =========================================
});