
// task 1

const red = document.querySelector(".color-red");
const white = document.querySelector(".color-white");
const green = document.querySelector(".color-green");

function redBg() {
    document.body.style.backgroundColor = "red"
}

red.addEventListener("click" , redBg)


function whiteBg() {
    document.body.style.backgroundColor = "whitesmoke"
}

white.addEventListener("click" , whiteBg)

function greenBg() {
    document.body.style.backgroundColor = "limegreen"
}

green.addEventListener("click" , greenBg)



// task 2

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
    output.textContent = input.value.trim() === '' ? 'незнайомець' : input.value;
});

    


// task 3

const inputVal = document.getElementById('validation-input');
const requiredLength = Number(inputVal.dataset.length);

inputVal.addEventListener('blur', () => {
    if (inputVal.value.length === requiredLength) {
        inputVal.classList.add('valid');
        inputVal.classList.remove('invalid');
    } else {
        inputVal.classList.add('invalid');
        inputVal.classList.remove('valid');
    }
});


// task 4

const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
});