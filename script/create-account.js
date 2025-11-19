//for eye thing
function togglePassword(fieldId, iconId) {
    const input = document.getElementById(fieldId);
    const icon = document.getElementById(iconId);

    if (input.type === "password") {
        input.type = "text";
        icon.textContent = "visibility"; // open eye
    } else {
        input.type = "password";
        icon.textContent = "visibility_off"; // crossed eye
    }
}

document.getElementById("togglePassword").onclick = () => 
    togglePassword("password", "togglePassword");

document.getElementById("toggleConfirmPassword").onclick = () => 
    togglePassword("confirmPassword", "toggleConfirmPassword");


// form thing
    const phone = document.getElementById("phone-number");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("passwordError");
    const btn = document.getElementById("continueBtn");
    const phoneError = document.getElementById("phoneError");
    const passwordStrengthError = document.getElementById("passwordStrengthError");
    const passwordError = document.getElementById("passwordError");


    btn.addEventListener("click", function(e){
        if (password.value === confirmPassword.value && password.value !== ""){
            message.classList.add("hidden");
        }else{
            message.classList.remove("hidden");
        }
    });

    phone.addEventListener("input", () => {
        phone.value = phone.value.replace(/[^0-9]/g, "");
    })

btn.addEventListener("click", function (e) {
    e.preventDefault();

    let valid = true;

    // 1. PHONE REQUIRED + LENGTH 10
    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone number is required";
        phoneError.classList.remove("hidden");
        phone.classList.add("border-[#D00416]");
        valid = false;
    } else if (!/^\d{10}$/.test(phone.value.trim())) {
        phoneError.textContent = "Phone number must be exactly 10 digits";
        phoneError.classList.remove("hidden");
        phone.classList.add("border-[#D00416]");
        valid = false;
    } else {
        phoneError.classList.add("hidden");
        phone.classList.remove("border-[#D00416]");
    }


    // 2. PASSWORD REQUIRED + STRONG CHECK
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (password.value.trim() === "") {
        passwordStrengthError.textContent = "Password is required";
        passwordStrengthError.classList.remove("hidden");
        password.classList.add("border-[#D00416]");
        valid = false;
    }
    else if (!strongPassword.test(password.value)) {
        passwordStrengthError.textContent = 
            "Password must be 8+ chars with uppercase, lowercase, number & symbol.";
        passwordStrengthError.classList.remove("hidden");
        password.classList.add("border-[#D00416]");
        valid = false;
    }   
    else {
        passwordStrengthError.classList.add("hidden");
        password.classList.remove("border-[#D00416]");
    }

    // 3. CONFIRM PASSWORD 
    if (confirmPassword.value.trim() === "") {
        passwordError.textContent = "Please confirm your password";
        passwordError.classList.remove("hidden");
        confirmPassword.classList.add("border-[#D00416]");
        valid = false;
    }
    else if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Passwords do not match";
        passwordError.classList.remove("hidden");
        confirmPassword.classList.add("border-[#D00416]");
        valid = false;
    }
    else {
        passwordError.classList.add("hidden");
        confirmPassword.classList.remove("border-[#D00416]");
        window.location.href = "./verify-phone-number.html";
    }
});