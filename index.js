let btn = document.getElementById('btn');
let body = document.getElementsByTagName('body')[0];
console.log(body);
const hexNumbers = ['1', '2', '3', '4', '5', '6',
    '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
];

function getRandomHex () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        let rndmIndex = Math.floor(Math.random() * hexNumbers.length);
        hex += hexNumbers[rndmIndex];
    }
    return hex;
}

console.log(getRandomHex());

function refreshPageColor() {
    let hex = getRandomHex();
    document.querySelector('.hex').innerHTML = hex;
    body.style.background = hex;
    console.log(body.style.background);
}

btn.addEventListener('click', refreshPageColor);