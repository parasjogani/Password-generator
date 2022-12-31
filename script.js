const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetter = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~!@#$%^&*"

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Copy password
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;
    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy")
    textarea.remove();
    
    document.getElementById("success").style.display = "block"
    setTimeout(() => {
        document.getElementById("success").style.display = "none"
    }, 2000)
        
})

// Generate random password

generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    let password = ""
    for (let i = 0; i < length; i++) {
         const x = generatePassword()       
         password += x
    }
    resultEl.innerText = password
})

function generatePassword() {
    checkedLetter = []

    if (uppercaseEl.checked) {
        checkedLetter.push(randomFunc.upper()) 
    }

    if (lowercaseEl.checked) {
        checkedLetter.push(randomFunc.lower())
    }

    if (numbersEl.checked) {
        checkedLetter.push(randomFunc.number())
    }

    if (symbolsEl.checked) {
        checkedLetter.push(randomFunc.symbol())
    }

    return checkedLetter[Math.floor(Math.random() * checkedLetter.length)]
}

// Functions to generate random letter

function getRandomLower() {
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
}

function getRandomUpper() {
    return upperLetter[Math.floor(Math.random() * upperLetter.length)]

}

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]

}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]

}