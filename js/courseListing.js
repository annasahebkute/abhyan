
var bannerwithinner = window.screen.height / 2 + 'px'
document.getElementById('_bannerwithinner').style.setProperty('height', bannerwithinner);

// header scrooling 
const hederBar = document.getElementById('_hederBar')
const onScroll = () => {
  const scroll = document.documentElement.scrollTop
  if (scroll > 0) {
    hederBar.classList.add("scrolled");
  } else {
    hederBar.classList.remove("scrolled")
  }
}
window.addEventListener('scroll', onScroll)

var abfilterfixedCount = window.screen.height / 2;
var bannerHieght = document.getElementById('_bannerwithinner').offsetHeight - 100;
var allCoursesSection = document.getElementById('_allCoursesSection').offsetHeight -400; 
console.log(bannerHieght);
const abfilterfixed = document.getElementById('_abfilterfixed')
const onScrollFixed = () => {
  const scroll = document.documentElement.scrollTop

  
  if (scroll > bannerHieght) {
    abfilterfixed.classList.add("abfilterfixedCount");
  }else{
    abfilterfixed.classList.remove("abfilterfixedCount");
  }

  if(scroll > allCoursesSection){
    abfilterfixed.classList.remove("abfilterfixedCount");
  } 
}

window.addEventListener('scroll', onScrollFixed)

function accountMenuMobile(){
  const navMenu = document.getElementById('_navMenu')
  if (navMenu.style.display === "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
}

//filter
function filterMenuMobile(){
  const filterMenu = document.getElementById('_abfilterfixed');
  if (filterMenu.style.display === "none") {
    filterMenu.style.display = "block";
  } else {
    filterMenu.style.display = "none";
  }
}

// Slider auto
Slider();
function Slider() {
  const carouselSlides = document.querySelectorAll('.slideFull');
  const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  const dotsSlide = document.querySelector('.dots-container');
  let currentSlide = 0;
  const activeDot = function (slideAut) {
      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      document.querySelector(`.dot[data-slide="${slideAut}"]`).classList.add('active');
  };
  activeDot(currentSlide);

  const changeSlide = function (slides) {
      carouselSlides.forEach((slideAut, index) => (slideAut.style.transform = `translateX(${100 * (index - slides)}%)`));
  };
  changeSlide(currentSlide);

  btnNext.addEventListener('click', function () {
      currentSlide++; 
      if (carouselSlides.length - 1 < currentSlide) {
          currentSlide = 0;
      };
      changeSlide(currentSlide);
      activeDot(currentSlide);
});
  btnPrev.addEventListener('click', function () {
      currentSlide--;
      if (0 >= currentSlide) {
          currentSlide = 0;
      }; 
      changeSlide(currentSlide);
      activeDot(currentSlide);
  });
  dotsSlide.addEventListener('click', function (e) {
      if (e.target.classList.contains('dot')) {
          const slideAut = e.target.dataset.slideAut;
          changeSlide(slideAut);
          activeDot(slideAut);
      }
  });
  setInterval(function () {
   currentSlide++; 
      if (carouselSlides.length - 1 < currentSlide) {
          currentSlide = 0;
      };
      changeSlide(currentSlide);
      activeDot(currentSlide);
  }, 5000);
};
