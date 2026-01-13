/* Photo Slider */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2500);

function changeWish(){
  // Hide birthday content
  document.getElementById("mainContent").style.display = "none";

  // Show special message
  document.getElementById("specialMessage").style.display = "flex";
}

/* Memory Gallery */
const memoryPhotos = [
  "img/im1.jpeg",
  "img/im2.jpeg",
  "img/im3.jpeg",
  "img/im4.jpeg",
  "img/im5.jpeg",
  "img/im6.jpeg",
  "img/im7.jpeg"
];

let memIndex = 0;

function showMemory(){
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("memorySection").style.display = "block";
}

function nextMemory(){
  memIndex = (memIndex + 1) % memoryPhotos.length;
  document.getElementById("memoryImg").src = memoryPhotos[memIndex];
}
function exitMemory(){
  // Memory hide
  document.getElementById("memorySection").style.display = "none";

  // Birthday page show
  document.getElementById("mainContent").style.display = "block";
}
function backFromMessage(){
  // Hide special message
  document.getElementById("specialMessage").style.display = "none";

  // Show birthday page again
  document.getElementById("mainContent").style.display = "block";
}
/* Floating Hearts */
function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 600);
/* Swipe Support for Memory Images */
let startX = 0;

const memoryImage = document.getElementById("memoryImg");

memoryImage.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

memoryImage.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if(startX - endX > 50){
    nextMemory();   // swipe left
  }
  if(endX - startX > 50){
    prevMemory();   // swipe right
  }
});

function prevMemory(){
  memIndex = (memIndex - 1 + memoryPhotos.length) % memoryPhotos.length;
  memoryImage.src = memoryPhotos[memIndex];
}

