// banner width
var bannerWidth = window.screen.height + 'px'
document.getElementById('_bannerwith').style.setProperty('height', bannerWidth);

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

// slider
// const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.querySelectorAll(".slide-arrow-prev");
const nextButton = document.querySelectorAll(".slide-arrow-next");


function nextBtn(){
    const slideWidth = slide.clientWidth;
    nextButton[0].nextElementSibling.scrollLeft += slideWidth;
    var nextButtonnar = nextButton.nextElementSibling
    console.log(nextButton[0].nextElementSibling)
};

function prevBtn(){   
    const slideWidth = slide.clientWidth;
    prevButton[0].previousElementSibling.scrollLeft -= slideWidth;
    console.log(prevButton[0].previousElementSibling)
};



// slider TESTIMONIALS
const slidesContainerts = document.getElementById("slides-containerts");
const slidets = document.querySelector(".slide");
const prevButtonts = document.getElementById("slide-arrow-prevts");
const nextButtonts = document.getElementById("slide-arrow-nextts");

nextButtonts.addEventListener("click", () => {
  const slideWidthts = slide.clientWidth;
  slidesContainerts.scrollLeft += slideWidthts;
});

prevButtonts.addEventListener("click", () => {    
  const slideWidthts = slidets.clientWidth;
  slidesContainerts.scrollLeft -= slideWidthts;
});

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

//   btnNext.addEventListener('click', function () {
//       currentSlide++; 
//       if (carouselSlides.length - 1 < currentSlide) {
//           currentSlide = 0;
//       };
//       changeSlide(currentSlide);
//       activeDot(currentSlide);
// });
  // btnPrev.addEventListener('click', function () {
  //     currentSlide--;
  //     if (0 >= currentSlide) {
  //         currentSlide = 0;
  //     }; 
  //     changeSlide(currentSlide);
  //     activeDot(currentSlide);
  // });
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
  }, 4000);
};


//Login page
function closeBt() {
  var closebtn = document.getElementById("_loginPupPup");
  var loginPupPupBg = document.getElementById("_loginPupPupBg");
  if (closebtn.style.display === "block") {
    closebtn.style.display = "none";
    loginPupPupBg.style.display = "none";
  } else {
    closebtn.style.display = "block";
    loginPupPupBg.style.display = "block";
  }
}
// SIGNUP
function closeBt() {
  var closebtn = document.getElementById("_loginPupPup");
  var loginPupPupBg = document.getElementById("_loginPupPupBg");
  if (closebtn.style.display === "block") {
    closebtn.style.display = "none";
    loginPupPupBg.style.display = "none";
  } else {
    closebtn.style.display = "block";
    loginPupPupBg.style.display = "block";
  }
}
// SIGNIN
var signup = document.getElementById("_signup");
var signin = document.getElementById("_signin");
var btnSignup = document.getElementById("_btnSignup");
var btnSignin = document.getElementById("_btnSignin");

function signinTab() {
  if (signup.style.display === "none") {
    signin.style.display = "block";
    signup.style.display = "none";
    btnSignup.classList.remove('ab-active');
    btnSignin.classList.add('ab-active');
    // this.target.classList.remove('ab-active');
  } 
  if (signup.style.display === "block") {
    signin.style.display = "block";
    signup.style.display = "none";
    btnSignup.classList.remove('ab-active');
    btnSignin.classList.add('ab-active');
    // this.target.classList.remove('ab-active');
  } 

    

}
// SIGNUP
function signUPTab() {
  if (signup.style.display === "none") {
    signup.style.display = "block";
    signin.style.display = "none";
    btnSignup.classList.add('ab-active');
    btnSignin.classList.remove('ab-active');
  }
  if (signup.style.display === "block") {
    signup.style.display = "block";
    signin.style.display = "none";
    btnSignup.classList.add('ab-active');
    btnSignin.classList.remove('ab-active');
  }

}

// SIGNUP redio btn
phoneCheckT();
emailCheckT();
function phoneCheckT() {
  if (document.getElementById('phoneCheck').checked) {
      document.getElementById('phoneCheckfield').style.display = 'block';
      document.getElementById('emailCheckfield').style.display = 'none';

  }
}
function emailCheckT() {
  if (document.getElementById('emailCheck').checked) {
      document.getElementById('emailCheckfield').style.display = 'block';
      document.getElementById('phoneCheckfield').style.display = 'none';
  }
}
function phoneCheckTin() {
  if (document.getElementById('phoneCheckin').checked) {
      document.getElementById('phoneCheckfieldin').style.display = 'block';
      document.getElementById('emailCheckfieldin').style.display = 'none';
  }
}
function emailCheckTin() {
  if (document.getElementById('emailCheckin').checked) {
      document.getElementById('phoneCheckfieldin').style.display = 'none';
      document.getElementById('emailCheckfieldin').style.display = 'block';
  }
}

// tab

var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки

window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}
document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}
function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}
function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


