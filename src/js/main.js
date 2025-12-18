import '../sass/style.scss';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

var swiper = new Swiper(".mySwiper", 
  {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      speed: 800,

      loop: true,

      autoplay: {
    delay: 3000, // 3 секунды между слайдами
    disableOnInteraction: false, // продолжать после взаимодействия пользователя
  }
    });