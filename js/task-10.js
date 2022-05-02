
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    // .padStart(0, 0)
    }`;
};


const inputEl = document.querySelector(`input`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxesEl = document.querySelector(`#boxes`);
let amount = 0;


createBtn.addEventListener(`click`, onCreateBtn);
destroyBtn.addEventListener(`click`, destroyBoxes);
inputEl.addEventListener(`click`, onCurrentAmount);

function onCurrentAmount(event) {
  amount = Number(event.currentTarget.value);
  console.log(amount);
}

function onCreateBtn() {
  createBoxes(amount);
}

function createBoxes(amount) {
  const markup = new Array(amount);

  for (let i = 0; i < markup.length; i += 1) {
    markup[i] = `<div style = "background-color: ${getRandomHexColor()};
    width:${30 + i * 10}px;
    height:${30 + i * 10}px;
    margin-top:${10}px;
    "></div>`;
  }
  boxes.innerHTML = markup.join(``);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
// document.getElementsById('#controls')[0].style.display = "flex";

// createBtn.addEventListener(`click`, () => createBoxes(inputEl));
// function createBoxes(inputEl) {
//   let boxSize = 30;
//   for (let i = 0; i <= inputEl; i++) {
//     const randomColor = getRandomHexColor();
//     const createDiv = document.createElement(`div`);

//     createDiv.style.width = `${boxSize}px`;
    
//     createDiv.style.height = `${boxSize}px`;

//     createDiv.style.backgroundColor = randomColor;

//     boxesEl.append(createDiv);

//     boxsize += 10;
    

//   };
//   let boxSize = 30;
// for (let i = 0; i < amount; i += 1) {
// 		markup.push(
// 			`<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
// 		);
// 		boxSize += 10;
// 	}
// }