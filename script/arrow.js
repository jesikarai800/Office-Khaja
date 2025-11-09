const container = document.getElementById("menu-container");
const scrollAmount = 400; // adjust how much to scroll

document.getElementById("scroll-left").addEventListener("click", () => {
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

document.getElementById("scroll-right").addEventListener("click", () => {
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});   
   