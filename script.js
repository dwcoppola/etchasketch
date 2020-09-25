var screen = document.getElementById("screen");
var size = 16;
var red = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
for (i=0;i<(size**2);i++) {
  screen.setAttribute('style','grid-template-columns: repeat(' + size + ', 1fr); grid-gap: 1px;')
  cell = document.createElement('div');
  cell.setAttribute('class','cell');
  cell.setAttribute('onmouseover',`{this.style.background = 'rgb(0,0,0)'}`);
  screen.appendChild(cell);
};
function clearBoard() {
  var screen = document.getElementById("screen");
  while (screen.firstChild) {
    screen.removeChild(screen.firstChild);
  };
  var size = prompt('How many squares would you like each side of the grid to be (up to 150)?',16);
  if (Number(size) > 150) {
    size = 150;
  };
  if (Number(size) < 1) {
    size = 1;
  };
  if (size.includes('.') === true) {
    size = Math.round(size);
  };
  if (isNaN(Number(size)) === true) {
    size = 16;
  };
  for (i=0;i<(size**2);i++) {
    screen.setAttribute('style','grid-template-columns: repeat(' + size + ', 1fr); grid-gap: 1px;')
    cell = document.createElement('div');
    cell.setAttribute('class','cell');
    cell.setAttribute('onmouseover',`{this.style.background = 'rgb(0,0,0)'}`);
    screen.appendChild(cell);
  };
};
function randomColorPen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `setColor(); {this.style.background = newColor}`);
  };
};
function setColor() {
  newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + 
  Math.floor(Math.random() * 256) + ',' + 
  Math.floor(Math.random() * 256) + ')';
};
function blackPen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = 'rgb(0,0,0)'}`);
  };
};
function redPen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = 'red'}`);
  };
};
function greenPen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = 'green'}`);
  };
};
function bluePen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = 'blue'}`);
  };
};
function purplePen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = 'purple'}`);
  };
};
function orangePen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = 'orange'}`);
  };
};
function yellowPen() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = 'yellow'}`);
  };
};
function eraser() {
  for (i=0;i<screen.childElementCount;i++) {
  cell = document.getElementsByClassName('cell');
  cell[i].setAttribute('onmouseover', `{this.style.background = '#c5bbbb'}`);
  };
};
function gridOn() {
  screen.style.gridGap = "1px";
};
function gridOff() {
  screen.style.gridGap = "0px";
};
