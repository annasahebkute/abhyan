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
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {    
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

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

// SIGNUP

phoneCheckT();
emailCheckT();

function phoneCheckT() {
  if (document.getElementById('phoneCheck').checked) {
      document.getElementById('phoneCheckfield').style.display = 'block';
      document.getElementById('emailCheckfield').style.display = 'none';

      document.getElementById('phoneCheckfieldin').style.display = 'block';
      document.getElementById('emailCheckfieldin').style.display = 'none';
  }
}

function emailCheckT() {
  if (document.getElementById('emailCheck').checked) {
      document.getElementById('emailCheckfield').style.display = 'block';
      document.getElementById('phoneCheckfield').style.display = 'none';

      document.getElementById('phoneCheckfieldin').style.display = 'none';
      document.getElementById('emailCheckfieldin').style.display = 'block';
  }
}


