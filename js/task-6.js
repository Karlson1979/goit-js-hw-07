function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector('#controls');
    const input = controls.querySelector('input');
    const createButton = controls.querySelector('[data-create]');
    const destroyButton = controls.querySelector('[data-destroy]');
    const boxes = document.querySelector('#boxes');


createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); 
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop=`10px`;
    box.style.marginLeft=`${30 + i * 10}px`;

    fragment.appendChild(box);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}