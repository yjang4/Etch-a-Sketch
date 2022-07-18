
const container = document.getElementById("container");
let rowsNum = 16;
let colsNum = 16;
container.style.setProperty('--length', `${800 / colsNum}px`);
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.className = 'grid';
    cell.id = `${c + 1}`;
    //let height = 300 / COLS;
    //cell.style.height = `${height}px`;
    container.appendChild(cell).className = "grid-item";
  };
};
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
function setGridEventListener() {
  for(i = 0; i < rowsNum * colsNum; i ++) {
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
}
makeRows(rowsNum, colsNum);
setGridEventListener();

const settingButton = document.getElementById("setting-button");
settingButton.addEventListener("click", function (event) {
  let input = prompt("Enter the grid size (1 ~ 100)", "16");
  if(input <= 100 && input > 0) {
    removeAllChildNodes(container);
    rowsNum = input;
    colsNum = input;
    container.style.setProperty('--length', `${800 / colsNum}px`);
    makeRows(rowsNum, colsNum);
    setGridEventListener();
  }
});


