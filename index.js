const generateBtn = document.getElementById("generate-btn")
const password1 = document.getElementById('pw-1')
const password2 = document.getElementById('pw-2')
const password3 = document.getElementById('pw-3')
const password4 = document.getElementById('pw-4')
const characterStr = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%?"

function randomChar() {
    return Math.floor(Math.random() * 67)
}

function generatePassword() {
    let passwordStr = ""
    for (let i = 1; i < 16; i ++) {
        passwordStr += characterStr[randomChar()]
    }
    return passwordStr
}

generateBtn.addEventListener("click", function() {
    password1.textContent = generatePassword()
    password2.textContent = generatePassword()
    password3.textContent = generatePassword()
    password4.textContent = generatePassword()
})