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