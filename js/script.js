function initSlider(sliderSelector, dotsSelector) {
  let index = 0;

  const slides = document.querySelector(sliderSelector);
  const dots = document.querySelectorAll(dotsSelector);
  const totalSlides = dots.length;

  function showSlide(n) {
    index = n;
    const nextIndex = (n + 1) % totalSlides;

    slides.style.transform = `translateX(-${n * 100}%)`;

    dots.forEach(dot => {
      dot.classList.remove('active', 'active-next');
    });

    if(dots[n].classList[1] !== "dot-one"){
       dots[n].classList.add('active');
       dots[nextIndex].classList.add('active-next')

       if(index + 1 == totalSlides){
        dots[nextIndex].classList.remove('active-next');
       }
       
    } else {
        dots[n].classList.add('active');
    }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  showSlide(0);
}

initSlider('.slides_one', '.dots-one .dot');
initSlider('.slides_two', '.dots-two .dot');

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});