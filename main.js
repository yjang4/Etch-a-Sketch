
const container = document.getElementById("container");
const ROWS = 20;
const COLS = 20;
container.style.setProperty('--length', `${800 / COLS}px`);
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.id = `${c + 1}`;
    //let height = 300 / COLS;
    //cell.style.height = `${height}px`;
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(ROWS, COLS);

for(i = 0; i < ROWS * COLS; i ++) {
    let isMouseHover = false
    let test = document.getElementById(`${i + 1}`);
    test.addEventListener("mouseleave", function (event) {
    isMouseHover = false;
    }, false);
    test.addEventListener("mouseover", function (event) {
    isMouseHover = true
    test.style.backgroundColor = 'pink';
    }, false);
}

const settingButton = document.getElementById("setting-button");
settingButton.addEventListener("click", function (event) {
  let input = prompt("Enter the grid size", "16");
  
});


