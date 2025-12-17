import '../sass/style.scss';


document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelector('.carousel-slides');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  const slideCount = document.querySelectorAll('.carousel-slide').length;
  let currentIndex = 0;

  // Функция переключения слайда
  function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Обработчики кнопок
  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Автопрокрутка (опционально)
  setInterval(() => goToSlide(currentIndex + 1), 5000);

  // Старт
  goToSlide(0);
});