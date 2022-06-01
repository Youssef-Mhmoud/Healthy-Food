// Start Custom Gear Settings
let btnGear = document.querySelector(".toggle-setting .fa-gear");
let settingsBox = document.querySelector(".setting-box");

btnGear.addEventListener("click", (eo) => {
  settingsBox.classList.toggle("open");
  btnGear.classList.toggle("spin");
});
//-------------------------------------------
// Start Switch Colors
const colorsList = document.querySelectorAll(".colors-list li");

// Local Storage Colors And Acitve Class
let mainColors = localStorage.getItem("colorLocal");
let activeColor = localStorage.getItem("activeColor");
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  // Set Active Class on Local Storage
  // Remove Active From All Chlidern
  colorsList.forEach((e) => {
    e.classList.remove("active");
    // Add Active Class
    if (e.dataset.color === mainColors) {
      e.classList.add("active");
    }
  });
}
colorsList.forEach((item) => {
  item.addEventListener("click", (eo) => {
    document.documentElement.style.setProperty(
      "--main-color",
      eo.target.dataset.color
    );
    // Set Color On Local
    localStorage.setItem("colorLocal", eo.target.dataset.color);

    // Remove Active From All Chlidern
    eo.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    // Add Active Class
    eo.target.classList.add("active");
  });
});
//-------------------------------------------
// Set Yes Or No Background Auto Selected
let bgSelectAuto = true;
let interval;
// Set Background Local Storage
let bgLocalStorage = localStorage.getItem("bglocal");

if (bgLocalStorage !== null) {
  if (bgLocalStorage === "true") {
    bgSelectAuto = true;
  } else {
    bgSelectAuto = false;
  }
}
//----------------------------------------
// Start Switch Background Auto Select
const bgBtn = document.querySelectorAll(".auto-bg button");
// Local Storage Colors
let activeBg = localStorage.getItem("activeBg");
if (activeBg !== null) {
  // Set Active Class on Local Storage
  // Remove Active From All Chlidern
  bgBtn.forEach((e) => {
    e.classList.remove("active");
    // Add Active Class
    if (e.dataset.bg === activeBg) {
      e.classList.add("active");
    }
  });
}

bgBtn.forEach((item) => {
  item.addEventListener("click", (eo) => {
    localStorage.setItem("activeBg", eo.target.dataset.bg);
    // Remove Active From All Chlidern
    eo.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    // Add Active Class
    eo.target.classList.add("active");
    // Remove Auto Background Selected
    if (eo.target.dataset.bg == "yes") {
      bgSelectAuto = true;
      selectImage();
      localStorage.setItem("bglocal", true);
    } else if (eo.target.dataset.bg == "no") {
      bgSelectAuto = false;
      clearInterval(interval);
      localStorage.setItem("bglocal", false);
    }
  });
});
//-------------------------------------------
// Start Change Background Image
let landingPage = document.querySelector(".landing");

index = 0;
img1 = `url(/images/1.jpg)`;
img2 = `url(/images/2.jpg)`;
img3 = `url(/images/3.jpg)`;
img4 = `url(/images/4.jpg)`;
let arrImages = [img1, img2, img3, img4];

function selectImage() {
  if (bgSelectAuto === true) {
    interval = setInterval(() => {
      if (index < arrImages.length) {
        landingPage.style.backgroundImage = arrImages[index];
        landingPage.style.transition = "1.3s";
        index++;
      } else {
        index = 0;
      }
    }, 10000);
  }
}
selectImage();
//-------------------------------------------
// Start Animation Title
// this.addEventListener('scroll', (eo) => {
//   console.log(this.scrollY);
// })
// 1- Animation About Section One Title
let mainTitleAbout = document.querySelector('#about .main-title')
window.addEventListener('scroll', (eo) => {
  if (window.scrollY >= 450) {
    mainTitleAbout.classList.add('animation-title', 'name-delay')
  }
})
// 2- Animation About Section Two Img
let imgBox = document.querySelector('.image-about')
let paragraph = document.querySelector('.image-about p')

window.addEventListener('scroll', (eo) => {
  if (window.scrollY >= 550) {
    imgBox.classList.add('image-width')
    paragraph.classList.add('op')
    paragraph.style.color = 'var(--main-color)'
  }
})
// Gallery Section
let mainTitleGa = document.querySelector('#gallery .main-title')
window.addEventListener('scroll', (eo) => {
  if (window.scrollY >= 900) {
    mainTitleGa.classList.add('animation-title', 'name-delay')
  }
})
//-------------------------------------------
