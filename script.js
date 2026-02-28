const generateBtn = document.getElementById("btn");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const includeNumbers = document.getElementById("numbers");
const includeUppercase = document.getElementById("UppercaseLetters");
const includeLowercase = document.getElementById("LowercaseLetters");
const includeSymbols = document.getElementById("Symbols");

// Character sets
const numbers = "0123456789";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

// Generate button click
generateBtn.addEventListener("click", function () {
    let characters = "";

    if (includeNumbers.checked) characters += numbers;
    if (includeUppercase.checked) characters += uppercase;
    if (includeLowercase.checked) characters += lowercase;
    if (includeSymbols.checked) characters += symbols;

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    const passwordLength = 8;
    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }

    passwordInput.value = generatedPassword;
});


togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈"; // change icon
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
    }
});