/* =========================
   PHOTO SLIDER
========================= */
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 2500);


/* =========================
   SPECIAL MESSAGE
========================= */
function changeWish() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("specialMessage").style.display = "flex";
}

function backFromMessage() {
  document.getElementById("specialMessage").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}


/* =========================
   MEMORY GALLERY + MUSIC
========================= */
const memoryPhotos = [
  "im1.jpeg",
  "im2.jpeg",
  "im3.jpeg",
  "im4.jpeg",
  "im5.jpeg",
  "im6.jpeg",
  "im7.jpeg",
  "im8.jpeg",
  "im9.jpeg",
  "im10.jpeg"
];

let memIndex = 0;
const memoryImage = document.getElementById("memoryImg");
const bgMusic = document.getElementById("bgMusic");

function showMemory() {
  // Start song ONLY here
  bgMusic.volume = 0.5;
  bgMusic.play().catch(() => {});

  document.getElementById("mainContent").style.display = "none";
  document.getElementById("memorySection").style.display = "block";
}

function nextMemory() {
  memIndex = (memIndex + 1) % memoryPhotos.length;
  memoryImage.src = memoryPhotos[memIndex];
}

function prevMemory() {
  memIndex = (memIndex - 1 + memoryPhotos.length) % memoryPhotos.length;
  memoryImage.src = memoryPhotos[memIndex];
}

function exitMemory() {
  // Stop song when exiting memory
  bgMusic.pause();
  bgMusic.currentTime = 0;

  document.getElementById("memorySection").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}


/* =========================
   SWIPE SUPPORT (MOBILE)
========================= */
let startX = 0;

memoryImage.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

memoryImage.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextMemory();   // swipe left
  if (endX - startX > 50) prevMemory();   // swipe right
});


/* =========================
   VIDEO SECTION
========================= */
function showVideo(){
  bgMusic.pause();
  bgMusic.currentTime = 0;

  document.getElementById("mainContent").style.display = "none";
  document.getElementById("videoSection").style.display = "flex";
}

function backFromVideo(){
  document.getElementById("videoSection").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}


/* =========================
   FLOATING HEARTS
========================= */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 600);
