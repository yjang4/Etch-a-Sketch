
const container = document.getElementById("container");
const ROWS = 16;
const COLS = 16;
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.id = `${c + 1}`;
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(ROWS, COLS);

for(i = 0; i < ROWS * COLS; i ++) {
    let isMouseHover = false
    let test = document.getElementById(`${i + 1}`);
    test.addEventListener("mouseleave", function (event) {
    isMouseHover = false;
    event.target.textContent = "mouse out";
    console.log(isMouseHover);
    }, false);
    test.addEventListener("mouseover", function (event) {
    isMouseHover = true
    event.target.textContent = "mouse in"
    console.log(isMouseHover)
    }, false);
}


