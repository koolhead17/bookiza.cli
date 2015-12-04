var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined'; 
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera;
var isIE = /*@cc_on!@*/false || !!document.documentMode; 

var header = document.getElementsByTagName("header")[0];

if (isFirefox) {
  window.onscroll = function() {
    if (document.documentElement.scrollTop > 80 && !header.classList.contains("nav")) {
      header.classList.add("nav");
    } else if (document.documentElement.scrollTop <= 80) {
      header.classList.remove("nav");
    }
  };   
} else if (isIE) {
  window.onscroll = function() {
    if (window.pagYOffset > 80 && !header.classList.contains("nav")) {
      header.classList.add("nav");
    } else if (window.pagYOffset <= 80) {
      header.classList.remove("nav");
    }
  };   
} else {
  window.onscroll = function() {
    if (document.body.scrollTop > 80 && !header.classList.contains("nav")) {
      header.classList.add("nav");
    } else if (document.body.scrollTop <= 80) {
      header.classList.remove("nav");
    }
  };   
}