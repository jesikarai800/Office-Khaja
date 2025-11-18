const container = document.getElementById("menu-container");
const scrollAmount = 480;

document.getElementById("scroll-left").addEventListener("click", ()=>{
  container.scrollBy({left: -scrollAmount, behavior:"smooth"});
});

document.getElementById("scroll-right").addEventListener("click", () =>{
  container.scrollBy({left: scrollAmount, behavior:"smooth"});
});
