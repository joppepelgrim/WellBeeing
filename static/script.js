// Select color input
let color = document.querySelector('.colorPicker')
let table = document.querySelector('.pixelCanvas')
let sizePicker = document.querySelector('.sizePicker')


let height = document.querySelector('.inputHeight').value;
let width = document.querySelector('.inputWidth').value;
makeGrid(height, width);

sizePicker.addEventListener('click', (e) => {

    e.preventDefault();

    let height = document.querySelector('.inputHeight').value;
    let width = document.querySelector('.inputWidth').value;
    table.firstChild.remove();

    makeGrid(height, width);
    //Makes grid
})

//Select size input

//When size is submitted by user call makegrid()

function makeGrid(height, width) {


    for (let i = 0; i <= height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j <= width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', (e) => {
                console.log(e);
                cell.style.backgroundColor = color.value;
            })
        }
    }
}