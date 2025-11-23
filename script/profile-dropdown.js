const profileBtn = document.getElementById("img-profile");
const profileDropdown = document.getElementById("profile");

profileBtn.addEventListener("click", () => {
    profileDropdown.classList.toggle("hidden");
});

document.addEventListener("click", function(event) {
    if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.classList.add("hidden");
    }
});
