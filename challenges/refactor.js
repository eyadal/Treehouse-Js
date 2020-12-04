let html = '';
let randomRGB;
const rgbColor = () =>  Math.floor(Math.random() * 256);

function getRandomColor(num) {
    randomRGB = `rgb( ${rgbColor()}, ${rgbColor()}, ${rgbColor()} )`;
    html += `<div style="background-color: ${randomRGB}">${num}</div>`;
    document.querySelector('main').innerHTML = html;
}


for (let i = 1; i <= 10; i++ ) {
    getRandomColor(i)
}

