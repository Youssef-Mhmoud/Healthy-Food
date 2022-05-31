// Custom Gear Settings 
let btnGear = document.querySelector('.toggle-setting .fa-gear')
let settingsBox = document.querySelector('.setting-box') 
console.log(btnGear);
btnGear.addEventListener('click', (eo) => {
  settingsBox.classList.toggle('open')
  btnGear.classList.toggle('spin')
})
//-------------------------------------------
// Change Background Image
{
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
}
//-------------------------------------------
