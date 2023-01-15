


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

