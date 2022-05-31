// Change Background Image
{
let land = document.querySelector(".landing");

index = 0;
function randomImage() {
  img1 = `url(/images/1.jpg)`;
  img2 = `url(/images/2.jpg)`;
  img3 = `url(/images/3.jpg)`;
  img4 = `url(/images/4.jpg)`;
  let arrImages = [img1, img2, img3, img4];

  setInterval(() => {
    if (index < arrImages.length) {
      land.style.backgroundImage = arrImages[index];
      land.style.transition = '1.3s'
      index++
    } else {
      index = 0
    }
  }, 4000);
}
randomImage();
}
