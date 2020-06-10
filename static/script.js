// Select color input
const table = document.querySelector('.pixelCanvas')

const koninginnencel = document.querySelector('.koninginnencel')
const broed = document.querySelector('.broed')
const nectar = document.querySelector('.nectar')
const honing = document.querySelector('.honing')
const stuifmeel = document.querySelector('.stuifmeel')

let currentColor = null

function koninginnencelColor() {
    currentColor = '#02055A'
}

function broedColor() {
    currentColor = '#7D0303'
}

function nectarColor() {
    currentColor = '#EC7474'
}

function honingColor() {
    currentColor = '#F07C00'
}

function stuifmeelColor() {
    currentColor = '#FACA61'
}

koninginnencel.addEventListener('click', koninginnencelColor)
broed.addEventListener('click', broedColor)
nectar.addEventListener('click', nectarColor)
honing.addEventListener('click', honingColor)
stuifmeel.addEventListener('click', stuifmeelColor)

//Creating grid
const height = 11;
const width = 7;
makeGrid(height, width);

function makeGrid(height, width) {
    for (let i = 0; i <= height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j <= width; j++) {
            let cell = row.insertCell(j);

            cell.addEventListener('click', (e) => {
                console.log(e);
                cell.style.backgroundColor = currentColor;
                console.log(currentColor)
            })
        }
    }
}