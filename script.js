const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const question = document.getElementById("question");
const catImg = document.getElementById("cat-img");

// "HAYIR" butonundan kaçma fonksiyonu
function dodgeButton() {
  // Pencere / alan sınırları içerisinde rastgele X ve Y koordinatları
  const maxX = 180;
  const maxY = 150;

  const randomX = Math.floor(Math.random() * maxX) - (maxX / 2);
  const randomY = Math.floor(Math.random() * maxY) - (maxY / 2);

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Fare üstüne geldiğinde veya dokunulduğunda kaç
noBtn.addEventListener("mouseover", dodgeButton);
noBtn.addEventListener("touchstart", dodgeButton);

// "EVET" butonuna tıklandığında gerçekleşecekler
// "EVET" butonuna tıklandığında gerçekleşecekler
yesBtn.addEventListener("click", () => {
  // Yazıyı güncelliyoruz (HTML etiketleri kullanarak)
  question.innerHTML = `hehehe biliyodum kabul edeceğiniii YAŞASSIIIN 🥳🥳<br><span style="font-size: 13px; color: #888; font-weight: normal; margin-top: 8px; display: block;">(kesinlikle zorla evete basmadın/span>`;

  // İstersen mutlu bir kedi/gif görseliyle değiştirebilirsin:
  catImg.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";

  // Butonları gizle
  document.querySelector(".btn-group").style.display = "none";
});