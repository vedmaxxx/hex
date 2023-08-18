// TODO
// сделать галерею примеров зарандомленного hex-а
// сделать переключение черного/белого шрифта в зависимости от hex-a на всех элементах
// сделать адаптивность

// Получаем элементы DOM-дерева
let btn = document.querySelector('.btn__click');
let body = document.getElementsByTagName('body')[0];
const hexNumbers = ['1', '2', '3', '4', '5', '6',
    '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
];

document.addEventListener('DOMContentLoaded', refreshPageColor);
btn.addEventListener('click', refreshPageColor);

function refreshPageColor() {
    let hex = getRandomHex();
    document.querySelector('.hex').innerHTML = hex;
    body.style.background = hex;
}

function getRandomHex () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        let rndmIndex = Math.floor(Math.random() * hexNumbers.length);
        hex += hexNumbers[rndmIndex];
    }
    return hex;
}


