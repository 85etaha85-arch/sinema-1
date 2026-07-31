// NO runs away
let yesScale = 1;

function rand(min = 20, max = 200) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dodge() {
  const noBtn = document.getElementById('noBtn');
  noBtn.style.position = 'absolute';
  noBtn.style.left = rand() + 'px';
  noBtn.style.top = rand() + 'px';
  
  yesScale += 0.07;
  document.getElementById('yesBtn').style.transform = `scale(${yesScale})`;
}

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.querySelector('.title');

noBtn.addEventListener('mouseenter', dodge);

yesBtn.onclick = () => {
  title.textContent = 'Yippeee!';
  if (typeof rainHearts === 'function') {
    rainHearts();
  }
};