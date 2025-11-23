//total and items list
const labels = document.querySelectorAll("label");
const totalCost = document.querySelectorAll(".total-cost");
const itemsCount = document.getElementById("itemCount");
const itemsNameBox = document.getElementById("items-name-box");
const totalBox = document.getElementById("total-box");

const itemData = Array.from(labels).map(label => {
  const name = label.querySelector(".item-name")?.textContent.trim();
  const priceText = label.querySelector(".item-price")?.textContent.trim();
  const price = parseInt(priceText.replace(/[^0-9]/g, ""));
  return { name, price };
});

function updateContent() {
  let total = 0;
  let count = 0;
  let selectedItems = "";
  let selectedTotal = "";

  labels.forEach((label, index) => {
    if (label.classList.contains("selected")) {
      count++;
      total += itemData[index].price;
      selectedItems += `<p class="mb-2">${itemData[index].name}</p>`;
      selectedTotal += `<p class="mb-2">Rs. ${itemData[index].price}</p>`;
    }
  });

  itemsNameBox.innerHTML = selectedItems || "<p>No items selected</p>";
  totalBox.innerHTML = selectedTotal || "<p>Rs. 0</p>";


  totalCost.forEach(el => {
    el.textContent = `Rs. ${total.toLocaleString()}`;
  });

  itemsCount.textContent = `${count} item${count !== 1 ? "s" : ""}`;
}

labels.forEach(label => {
  label.addEventListener("click", () => {
    label.classList.toggle("selected");
    updateContent();
  });
});

updateContent();

//Preference
const userPreference = "I do not want any garlic and mushroom as I am allergic to both, and avoid peanuts, soy, and onions as well.";

const preview = document.getElementById("preview");
const fullContent = document.getElementById("fullContent");
const btn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");
const redLine = document.getElementById("redLine");

fullContent.textContent = userPreference;

preview.textContent =
  userPreference.length > 60
    ? userPreference.substring(0, 60) + "..."
    : userPreference;
  
let isOpen = false;

btn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    fullContent.style.maxHeight = fullContent.scrollHeight + "px";
    preview.classList.add("hidden");

    icon.src = "images/Minus.png";

    redLine.classList.remove("w-12");
    redLine.classList.add("w-24");
  } else {
    fullContent.style.maxHeight = "0px";
    preview.classList.remove("hidden");

    icon.src = "images/plus.png";

    redLine.classList.remove("w-24");
    redLine.classList.add("w-12");
  }
});

  
// Remove meals buttons
const removeButtons = document.querySelectorAll(".remove-meal");

removeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        itemsNameBox.innerHTML = "<p>No items selected</p>";
        totalBox.innerHTML = "<p>Rs. 0</p>";
        itemsCount.textContent = "0 items";

        totalCost.forEach(el => {
            el.textContent = "Rs. 0";
        });

        labels.forEach(label => label.classList.remove("selected"));
    });
});
