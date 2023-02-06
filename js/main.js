// Start Custom Gear Settings
let btnGear = document.querySelector(".toggle-setting .fa-gear");
let settingsBox = document.querySelector(".setting-box");

btnGear.addEventListener("click", (eo) => {
  settingsBox.classList.toggle("open");
  btnGear.classList.toggle("spin");
});
// Reset Button
document.querySelector(".reset-op").addEventListener("click", (eo) => {
  localStorage.clear();
  window.location.reload();
});
//-------------------------------------------
// Make Function Handle With Active Class
function handleActive(e) {
  // Remove Active From All Chlidern
  e.target.parentElement.querySelectorAll(".active").forEach((item) => {
    item.classList.remove("active");
  });
  // Add Active Class
  e.target.classList.add("active");
}
// -------------------------------------------
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
    handleActive(eo);
  });
});

// -------------------------------------------
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
    handleActive(eo);
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
img1 = `url(images/1.jpg)`;
img2 = `url(images/2.jpg)`;
img3 = `url(images/3.jpg)`;
img4 = `url(images/4.jpg)`;
let arrImages = [img1, img2, img3, img4];

function selectImage() {
  if (bgSelectAuto) {
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
// Add Scroll To Top
let scrollToTop = document.querySelector(".scroll");
window.addEventListener("scroll", (eo) => {
  window.scrollY >= 500
    ? scrollToTop.classList.add("show")
    : scrollToTop.classList.remove("show");

  //---- Old code
  // if (window.scrollY >= 500) {
  //   scrollToTop.classList.add("show");
  // } else {
  //   scrollToTop.classList.remove("show");
  // }
});
scrollToTop.onclick = (eo) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}; /////////////////////////////////////////////////////////
// Function Manage If Condition
function manageIf(name, number) {
  let windowheight = window.innerHeight;
  let revealTop = name.getBoundingClientRect().top;
  let revealPoint = number;

  return revealTop < windowheight - revealPoint;
}
// Function Manage Animation
function manageAnimation(name1, num) {
  if (manageIf(name1, num)) {
    name1.classList.add("animation-title", "name-delay");
  }
}
// 1- Animation Title
let mainTitleAbout = document.querySelector("#about .main-title");
let mainTitleGa = document.querySelector("#gallery .main-title");
let mainTitleFeatures = document.querySelector("#features .main-title");
let mainTitletesti = document.querySelector("#testimonials .main-title");
let mainTitleContact = document.querySelector("#contact .main-title");

// 2- Animation About Section Two Img
let imgBox = document.querySelector(".image-about");
let paragraph = document.querySelector(".image-about p");

// 3- Animation Features Section
let middleFeat = document.querySelector(".middle-feat");

// 4- Animation Testimonials Section
let testBox = document.querySelectorAll(".test-box");

window.addEventListener("scroll", (eo) => {
  // 1- Animation Title
  manageAnimation(mainTitleAbout, 350);
  manageAnimation(mainTitleGa, 350);
  manageAnimation(mainTitleFeatures, 350);
  manageAnimation(mainTitletesti, 350);
  manageAnimation(mainTitleContact, 350);

  // 2- Animation About Section Two Img
  if (manageIf(paragraph, 150)) {
    imgBox.classList.add("image-width");
    paragraph.classList.add("op");
    paragraph.style.color = "var(--main-color)";
  }

  // 3- Animation Features Section
  if (manageIf(middleFeat, 400)) {
    middleFeat.style.boxShadow = "1px 1px 20px 6px #00000020";
    middleFeat.style.transform = "translateY(5px) scale(0.9)";
  }

  // 4- Animation Testimonials Section
  if (manageIf(testBox[0], 150)) {
    testBox.forEach((item) => {
      item.classList.add("show-testi-box");
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
//-------------------------------------------
// Start Gallery Img PopUp
let imagePop = document.querySelectorAll(".gallery-box img");

imagePop.forEach((item) => {
  item.addEventListener("click", (eo) => {
    // Create Overlay Element
    let overlay = document.createElement("div");
    overlay.setAttribute("class", "popup");
    document.body.appendChild(overlay);

    // Create Popup Box
    let popBox = document.createElement("div");
    popBox.className = "popup-box";

    // Create Image
    let popImage = document.createElement("img");
    popImage.src = item.src;
    // Add Image To PopUp Box
    popBox.appendChild(popImage);

    // Add PopBox To Body
    document.body.appendChild(popBox);

    if (item.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(item.alt);
      imgHeading.appendChild(imgText);
      // Append The Heading To Popup Box
      popBox.prepend(imgHeading);

      // Create Close Span
      let closeBtn = document.createElement("i");
      closeBtn.className = "fa-solid fa-xmark";
      popBox.prepend(closeBtn);
    }
  });
});
// Close The Popup
document.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-solid fa-xmark") {
    // Remove Popup
    eo.target.parentElement.remove();

    // Remove Overlay
    document.querySelector(".popup").remove();
  } else if (eo.target.className == "popup") {
    document.querySelector(".popup").remove();
    document.querySelector(".popup-box").remove();
  }
});
//-------------------------------------------
// Add Paragraph To Footer
let footer = document.querySelector("footer");
let year = new Date();
footer.innerHTML = `<p>CopyRights © ${year.getFullYear()}</p>`;
//-------------------------------------------
// Add Toggle Menu
let menuBar = document.querySelector(".icon-menu");
let linksList = document.querySelector(".header-list");
menuBar.addEventListener("click", (eo) => {
  linksList.classList.toggle("open-list");
  menuBar.classList.toggle("style-close");
});
//-------------------------------------------
// Make toggle Menu Responsive
let menuLinks = document.querySelectorAll("header li a");

menuLinks.forEach((item) => {
  item.addEventListener("click", (eo) => {
    eo.target.parentElement.parentElement.classList.remove("open-list");
    menuBar.classList.remove("style-close");
  });
});
