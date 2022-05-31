// Custom Gear Settings 
let btnGear = document.querySelector('.toggle-setting .fa-gear')
let settingsBox = document.querySelector('.setting-box') 

btnGear.addEventListener('click', (eo) => {
  settingsBox.classList.toggle('open')
  btnGear.classList.toggle('spin')
})
//-------------------------------------------
// Switch Colors 
const colorsList = document.querySelectorAll('.colors-list li')

// Local Storage Colors
let mainColors = localStorage.getItem('colorLocal')
let activeColor = localStorage.getItem('activeColor')
if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', mainColors)
  // Set Active Class on Local Storage
    // Remove Active From All Chlidern
    document.querySelectorAll('.colors-list li').forEach(e => {
      e.classList.remove('active')
      // Add Active Class
      if (e.dataset.color === mainColors) {
        e.classList.add('active')
      }
    })
}

colorsList.forEach(item => {
  item.addEventListener('click', (eo) => {
    document.documentElement.style.setProperty('--main-color', eo.target.dataset.color)
    // Set Color On Local
    localStorage.setItem('colorLocal', eo.target.dataset.color)

    // Remove Active From All Chlidern
    eo.target.parentElement.querySelectorAll('.active').forEach(e => {
      e.classList.remove('active')
    })
    // Add Active Class
    eo.target.classList.add('active')
  })
});
//-------------------------------------------
// Change Background Image
let landingPage = document.querySelector(".landing");

index = 0;
function selectImage() {
  img1 = `url(/images/1.jpg)`;
  img2 = `url(/images/2.jpg)`;
  img3 = `url(/images/3.jpg)`;
  img4 = `url(/images/4.jpg)`;
  let arrImages = [img1, img2, img3, img4];

  setInterval(() => {
    if (index < arrImages.length) {
      landingPage.style.backgroundImage = arrImages[index];
      landingPage.style.transition = '1.3s'
      index++
    } else {
      index = 0
    }
  }, 10000);
}
selectImage();
//-------------------------------------------
