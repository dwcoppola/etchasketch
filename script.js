class EtchASketch {
    constructor() {
        this.screen = document.getElementById("screen");
        this.penColor = 'black';
    }

    buildBoard = (size) => {
        
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }

        for (let i = 0; i < (size**2); i++) {
            let cell = document.createElement('div');
            this.screen.setAttribute('style','grid-template-columns: repeat(' + size + ', 1fr); grid-gap: 1px;')
            cell.setAttribute('class','cell');
            cell.setAttribute('onmouseover',`{this.style.background = 'rgb(0,0,0)'}`);
            cell.setAttribute('id', i);
            this.screen.appendChild(cell);
        }
    }
        
    clearBoard = () => {
        
        let answer = prompt('How many squares would you like each side of the grid to be? (2 is the minimum, 50 is the maximum)', 16);
        
        if (Number(answer) > 100) {
            etchasketch.buildBoard(100);
        } else if (Number(answer) <= 1) {
            etchasketch.buildBoard(2);
        } else if (answer.includes('.') === true) {
            etchasketch.buildBoard(Math.round(answer));
        } else if (isNaN(Number(answer)) === true) {
            etchasketch.buildBoard(16);
        } else if (answer === 16) {
            etchasketch.buildBoard(16);
        } else {
            etchasketch.buildBoard(answer);
        }

        resetPreview();

    }

    changePenColor = (color) => {
        const cells = document.getElementsByClassName('cell');  
        if (color === 'magic') {
            for (let cell of cells) {
                cell.setAttribute('onmouseover', `etchasketch.changeCellColor(${cell.id})`);
            }               
        } else {   
            for (let cell of cells) {
                cell.setAttribute('onmouseover', `this.style.background = "${color}"`);
            }
        }         
    }
    
    changeCellColor = (id) => {
        const cell = document.getElementById(id);
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        cell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`);
    }

    gridOn = () => {
        this.screen.style.gridGap = "1px";
    }
    
    gridOff = () => {
        this.screen.style.gridGap = "0px";
    }

}

const etchasketch = new EtchASketch();
etchasketch.buildBoard(16);

function establishPreviewBG() {
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    const preview = document.querySelector('#preview');
    preview.setAttribute('style', `background-color: rgb(${red.value}, ${green.value}, ${blue.value})`);
    etchasketch.changePenColor(`rgb(${red.value}, ${green.value}, ${blue.value})`);
}

function resetPreview() {
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    red.value = 0;
    green.value = 0;
    blue.value = 0;
    establishPreviewBG();
}

establishPreviewBG();
