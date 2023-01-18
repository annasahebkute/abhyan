


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

// slider TESTIMONIALS
function nextBtn(e){
    e.target.nextElementSibling.scrollLeft += e.target.parentElement.clientWidth;
};

function prevBtn(e){   
    e.target.previousElementSibling.scrollLeft -= e.target.parentElement.clientWidth;
};

// tab

var tab; 
var tabContent; 

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


function showtab(tabs)
{
	var tab=tabs;
	switch(tab) //this switch case replaces the tabContent
    {
      case "tab-1":
        document.getElementById('tab-container').innerHTML = document.getElementById("tab-1").innerHTML;
        break;
      case "tab-2":
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-2").innerHTML;
        break;
      case "tab-3":
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-3").innerHTML;
        break;
      default:
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-1").innerHTML;
        break;
    }
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


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
phoneCheckTin();
emailCheckTin();
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


//vedio page
function vediobt() {
  var closebtn = document.getElementById("_videoPupPup");
  var videoItem = document.getElementById("_videoItem")
  var loginPupPupBg = document.getElementById("_videoPupPupBg");
  if (closebtn.style.display === "block") {
    closebtn.style.display = "none";
    loginPupPupBg.style.display = "none";
    videoItem.pause();
  } else {
    closebtn.style.display = "block";
    loginPupPupBg.style.display = "block";
    videoItem.play();
  }
}


//Course trainer & createors popup
function coursetrainer() {
  var courseTrainer = document.getElementById("_courseTrainer");
  var loginPupPupBg = document.getElementById("_loginPupPupBg");
  if (courseTrainer.style.display === "block") {
    courseTrainer.style.display = "none";
    loginPupPupBg.style.display = "none";
  } else {
    courseTrainer.style.display = "block";
    loginPupPupBg.style.display = "block";
  }
}