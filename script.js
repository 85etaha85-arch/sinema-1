// Pencereler
const letterWindow = document.getElementById("letter-window");
const gameWindow = document.getElementById("game-window");
const loveWindow = document.getElementById("love-window");
const thanksWindow = document.getElementById("thanks-window");

// Ok Atma Oyunu Elementleri
const bowArrowContainer = document.querySelector(".bow-arrow-container");
const arrow = document.getElementById("arrow");
const targetHeart = document.getElementById("target-heart");

// Butonlar
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

// Zarf tıklandığında oyun penceresini göster
document.getElementById("envelope-img").addEventListener("click", () => {
  letterWindow.style.display = "none";
  gameWindow.style.display = "block";
});

// Ok Atma Mekaniği
let isAiming = false;
let startX;

bowArrowContainer.addEventListener("mousedown", (e) => {
  isAiming = true;
  startX = e.clientX;
});

document.addEventListener("mouseup", (e) => {
  if (isAiming) {
    isAiming = false;
    const endX = e.clientX;
    const distance = startX - endX; // Oku fırlatma hızı
    if (distance > 50) { // Belirli bir mesafeden fazla çekildiyse
      fireArrow(distance);
    }
  }
});

function fireArrow(distance) {
  arrow.style.transition = "top 0.5s ease-out";
  arrow.style.top = "-150px"; // Oku yukarı fırlat

  setTimeout(() => {
    // Ok hedefe çarptı mı? (Basit kontrol)
    const targetRect = targetHeart.getBoundingClientRect();
    const arrowRect = arrow.getBoundingClientRect();

    if (arrowRect.top <= targetRect.bottom) {
      showHearts();
      setTimeout(() => {
        gameWindow.style.display = "none";
        loveWindow.style.display = "block";
      }, 1000);
    } else {
      // Iska geçtiyse oku geri getir
      arrow.style.transition = "none";
      arrow.style.top = "15px";
    }
  }, 500);
}

function showHearts() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = targetHeart.offsetLeft + Math.random() * 40 - 20 + "px";
    heart.style.top = targetHeart.offsetTop + "px";
    document.querySelector("#game-window .content").appendChild(heart);
  }
}

// "NO" butonu kaçıyor
noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * 200) - 100;
  const randomY = Math.floor(Math.random() * 150) - 75;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// "YES" butonu tıklandığında son mesaj
yesBtn.addEventListener("click", () => {
  loveWindow.style.display = "none";
  thanksWindow.style.display = "block";
});