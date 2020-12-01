const main = document.querySelector('main')
let html = '';

for (let i = 10; i <= 100; i+=10 ) {
    html += `<div>${i}</div>`;
    console.log(html)
}

main.innerHTML = html;