const size = prompt('Enter grid size') || 50;
let color = 'black';
let isMouseDown = false;

function createCanva(size) {
  const container = document.querySelector('#container');
  document.getElementById('current').style.backgroundColor = color;
  for (let i = 0; i < size; i++) {
    const div = document.createElement('div');
    div.classList.add('flex-grid');
    for(let j = 0; j < size; j++) {
      const innerDiv = document.createElement('div');
      innerDiv.classList.add('col');
      innerDiv.addEventListener('mouseover', () => {
        if (isMouseDown) {
          innerDiv.style.background = color;
        }
      });
      innerDiv.addEventListener('click', () => {
        innerDiv.style.background = color;
      });
      div.appendChild(innerDiv);
    }
    container.appendChild(div);
  }
}

const whiteBth = document.querySelector('#white');
const blackBth = document.querySelector('#black');
const grayBth = document.querySelector('#gray');
const redBth = document.querySelector('#red');
const greenBth = document.querySelector('#green');
const blueBth = document.querySelector('#blue');
const yellowBth = document.querySelector('#yellow');

whiteBth.addEventListener('click', () => {
  color = 'white';
  document.getElementById('current').style.backgroundColor = 'white';
});
blackBth.addEventListener('click', () => {
  color = 'black';
  document.getElementById('current').style.backgroundColor = 'black';
});
grayBth.addEventListener('click', () => {
  color = 'gray';
  document.getElementById('current').style.backgroundColor = 'gray';
});
redBth.addEventListener('click', () => {
  color = 'red';
  document.getElementById('current').style.backgroundColor = 'red';
});
greenBth.addEventListener('click', () => {
  color = 'green';
  document.getElementById('current').style.backgroundColor = 'green';
});
blueBth.addEventListener('click', () => {
  color = 'blue';
  document.getElementById('current').style.backgroundColor = 'blue';
});
yellowBth.addEventListener('click', () => {
  color = 'yellow';
  document.getElementById('current').style.backgroundColor = 'yellow';
});
document.body.onmousedown = function() { 
  isMouseDown = true;
}
document.body.onmouseup = function() {
  isMouseDown = false;
}

createCanva(size);