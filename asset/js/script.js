const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 1,
    },
    2560: {
      slidesPerView: 1,
    },
  },
});
var swiper_a = new Swiper(".boxSwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
var swiper_a = new Swiper(".box-1Swiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper_a = new Swiper(".box-2Swiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//

let _list1 = document.getElementById("list1");
// console.log(_list1);
let _sec1js = document.querySelector(".sec-1-js");
// console.log(_sec1js);
let _sec1jsbox1 = document.querySelector(".sec-1-js-box1");

let _sec1jsbox1close = document.getElementById("sec-1-js-box1-close");

_list1.addEventListener("click", function () {
  _sec1js.style.transform = "translateX(0px)";
  _sec1js.style.animationName = "sec1js";
});
_sec1jsbox1close.addEventListener("click", function () {
  _sec1js.style.transform = "translateX(120%)";
  _sec1js.style.animationName = "sec1jsB";
});

let _search = document.getElementById("search1");
// console.log(_search);
let _sec2jsbox2close = document.getElementById("sec-2-js-box2-close");
// console.log(_sec2jsbox2close);

let _sec2js = document.querySelector(".sec-2-js");
_search.addEventListener("click", function () {
  _sec2js.style.transform = "translateX(0px)";
  _sec2js.style.animationName = "sec2js";
});
_sec2jsbox2close.addEventListener("click", function () {
  _sec2js.style.transform = "translateX(120%)";
  _sec2js.style.animationName = "sec2jsB";
});

let _darkMode = document.querySelectorAll(".darkMode");
let _textcol = document.querySelectorAll(".text-col");
// console.log(_darkMode);
document.getElementById("sun").addEventListener("click", function () {
  _darkMode.forEach(function (val) {
    val.classList.toggle("bgDarkNight");
  });
  _textcol.forEach(function (val) {
    val.classList.toggle("text-black");
  });
});
document.getElementById("moon").addEventListener("click", function () {
  _darkMode.forEach(function (val) {
    val.classList.toggle("bgDarkNight");
  });
  _textcol.forEach(function (val) {
    val.classList.toggle("text-black");
  });
});
// menu mobile
// let flag = 1;
// let _c1 = document.querySelector(".c1");
// let _m = document.getElementById("menuMobile");
// let _h = _m.clientHeight;
// // console.log(_h);
// _m.style.height = 0 + "px";

// // console.log(_m.style.height);

// document.getElementById("menuHam").addEventListener("click", function () {
//   if (flag % 2) {
//     _m.style.height = _h + "px";
//   } else {
//     _m.style.height = 0 + "px";
//   }
//   flag++;
// });

let _m = document.getElementById("menuMobile");
console.log(_m);
let _menu = document.getElementById("menuHam");
console.log(_menu);
let _closeMenu = document.getElementById("closeMenu");
console.log(_closeMenu);

_menu.addEventListener("click", function () {
  _m.style.transform = "translateX(0%)";
});
_closeMenu.addEventListener("click", function () {
  _m.style.transform = "translateX(-120%)";
});

// menu mobile

window.addEventListener("scroll", function () {
  let _fix = document.querySelector(".fix");
  if (document.documentElement.scrollTop > 50) {
    _fix.classList.add("head", "container-fluid");
  } else {
    _fix.classList.remove("head");
  }
});
