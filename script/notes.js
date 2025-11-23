//   // STEP1
//   const vegOptions = document.querySelectorAll("#veg-options .option");
//   const mealOptions = document.querySelectorAll("#meal-options .meal");
//   const selectedType = document.getElementById("selectedType");
//   const selectedMeal = document.getElementById("selectedMeal");
//   const selectedPeople = document.getElementById("selectedPeople");
//   const countDisplay = document.getElementById("peopleCount");
//   const plus = document.getElementById("plus");
//   const minus = document.getElementById("minus");

//   let count = 1;

//   // Function to show element if hidden
//   function showElement(el) {
//     el.classList.remove("hidden");
//     el.classList.add("inline-block");
//   }

//     // Handle Veg/Non-Veg selection
//     vegOptions.forEach((opt) => { // the outer loop is to add a click listener to each meal item
//         opt.addEventListener("click", () => {
//             vegOptions.forEach((o) => o.classList.remove("bg-black","border-black", "text-white")); // inner loop is to remove "active" styles from all meals items before applying it to the clicked one
//             opt.classList.add("bg-black", "border-black", "text-white");
//             selectedType.textContent = opt.innerText.trim();
//             showElement(selectedType);
//         });
//     });
                                                                                                                                     
//     // Handle Meal selection
//     mealOptions.forEach((meal) => {
//         meal.addEventListener("click", () => {
//         mealOptions.forEach((m) => m.classList.remove("bg-black","border-black", "text-white"));
//         meal.classList.add("bg-black", "border-black","text-white");
//         selectedMeal.textContent = meal.innerText.trim();
//         showElement(selectedMeal);
//         });
//     });

//     // Handle People count
//     plus.addEventListener("click", () => {
//         count++;
//         countDisplay.textContent = count;
//         selectedPeople.textContent = `${count} ${count > 1 ? "Servings" : "Serving"}`;  //used ternary operator
//         showElement(selectedPeople);
//     });

//     minus.addEventListener("click", () => {
//         if (count > 1) {
//         count--;
//         countDisplay.textContent = count;
//         selectedPeople.textContent = `${count} ${count > 1 ? "Servings" : "Serving"}`;
//         showElement(selectedPeople);
//         }
//     });



//     // STEP2
//     const stepLinks = document.querySelectorAll(".step-link, .mobile-step-link");
//     const sections = document.querySelectorAll(".step-section");
//     const progressLine = document.getElementById("progress-line");

//     // buttons
//     const nextButtons = document.querySelectorAll(".next-button");
//     const backButtons = document.querySelectorAll(".back-button");

//     let currentStep = 1; //current step

//     //updating the progress line                                                      
//     function updateProgress(step) { 
//         const allLinks = Array.from(stepLinks);
//         const currentLink = allLinks[step - 1];

//         const parentRect = stepLinks[0].parentElement.parentElement.getBoundingClientRect();
//         const currentRect = currentLink.getBoundingClientRect();
//         const width = currentRect.right - parentRect.left;

//         progressLine.style.width = `${width}px`;
//     }                
    
//     function showStep(step) {
//         if (step <= 1) step = 1;
//         if (step > stepLinks.length) step = stepLinks.length;

//         currentStep = step;

//         // Update step links color
//         stepLinks.forEach(l => l.classList.remove("text-[#363636]"));
//         stepLinks[step - 1].classList.add("text-[#363636]");

//         // Animate progress line
//         updateProgress(step);

//         // Show step content
//         sections.forEach(sec => sec.classList.add("hidden")); // hides all the sections
//         const activeSection = document.getElementById(`step${step}`); // finds the section that matches the current step number
//         if (activeSection) activeSection.classList.remove("hidden"); // removes the hidden class from that section 
//     }

//     // Step link click
//     stepLinks.forEach(link => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault(); // stops the reload or scroll to the top
//             const step = parseInt(link.dataset.step);  // gets the dataset step such as (data-step = "1")
//             showStep(step);
//         });
//     });

//     // Next button click (all buttons)
//     nextButtons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             if (currentStep < stepLinks.length) {
//                 showStep(currentStep + 1);
//             }
//         });
//     });

//     // Back button click (all buttons)
//     backButtons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             if (currentStep > 1) {
//                 showStep(currentStep - 1);
//             }
//         });
//     });

//     // Initialize progress on load
//     window.addEventListener("load", () => showStep(1));


// // step2 selection process
// const checkboxes = document.querySelectorAll('#step2 input[type="checkbox"]');
// const addedItemsContainer = document.getElementById('addedItems');
// const addedItemsSection = document.getElementById('addedItemsSection');

// // item count elements (left + right)
// const itemCount = document.getElementById('itemCount');
// const rightItemCount = document.getElementById('right-itemCount');

// // function to update count text
// function updateItemCount() {
//   const count = document.querySelectorAll('#step2 input[type="checkbox"]:checked').length;
//   const text1 = `${count} item${count !== 1 ? 's' : ''} selected`; // used ternary operator

//     const text2 = `${count} item${count !== 1 ? 's' : ''}`;


//   if (itemCount) itemCount.textContent = text1;
//   if (rightItemCount) rightItemCount.textContent = text2;

//   // show/hide right section
//   if (count > 0) {
//     addedItemsSection.classList.remove('hidden');
//   } else {
//     addedItemsSection.classList.add('hidden');
//   }
// }

// // main logic
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     // clear current right-side items
//     addedItemsContainer.innerHTML = '';

//     // loop through all checkboxes and rebuild right-side items
//     checkboxes.forEach(cb => {
//       if (cb.checked) {
//         const label = cb.closest('label');
//         const imgSrc = label.querySelector('img')?.src || '';
//         const name = label.querySelector('.text-xl.font-bold p')?.textContent || label.querySelector('p').textContent;
//         const kcal = label.querySelector('.text-sm.font-medium.pr-2')?.textContent || '';
//         const weight = label.querySelector('.text-sm.font-medium.px-2')?.textContent || '';

//         const itemDiv = document.createElement('div');
//         itemDiv.className = "flex items-start space-x-4 border-t-2 border-[#00000033] pt-3 relative";

//         // build inner HTML
//         itemDiv.innerHTML = `
//           <img src="${imgSrc}" class="h-[64px] w-[64px] object-contain rounded" />
//           <div class="space-y-3">
//             <p class="font-semibold text-md">${name}</p>
//             <div class="flex text-[#6A6A6A] items-center text-sm font-medium">
//                 <p class="pr-2">${kcal}</p>
//                 <div class="h-2 border-l border-gray-400 font-medium"></div>
//                 <p class="px-2">${weight}</p>
//             </div>
//           </div>
//           <button class="absolute top-1 right-1 text-[#363636] hover:bg-[#0000001A] font-normal text-4xl md:px-2 rounded">&times;</button>
//         `;

//         // remove item when "x" clicked
//         const removeBtn = itemDiv.querySelector('button');
//         removeBtn.addEventListener('click', () => {
//           // uncheck the corresponding checkbox
//           cb.checked = false;
//           // remove this item from the right side
//           itemDiv.remove();
//           // call updateItemCount to refresh both counters and visibility
//           updateItemCount();
//         });

//         addedItemsContainer.appendChild(itemDiv);
//       }
//     });

//     // finally, update the counts and visibility
//     updateItemCount();
//   });
// });

// // initialize once at load
// updateItemCount();



// // PREFERENCES
// const notesInput = document.getElementById('notes');          // the textarea in Step 3
// const preferencesBox = document.getElementById('preferences'); // right box section
// const preferenceText = document.getElementById('preferenceText'); // text display area

// // Listen for typing in the Step 3 textarea
// notesInput.addEventListener('input', () => {
//     const text = notesInput.value.trim();

//     if (text !== "") {
//         // show and update the right box preference text
//         preferencesBox.classList.remove('hidden');  // it removes the hidden class
//         preferenceText.textContent = text; // updates the text inside the box with what the user have typed
//     } else {
//         // hide if empty 
//         preferencesBox.classList.add('hidden'); //it adds the hidden class back
//         preferenceText.textContent = ""; // clears the text inside
//     }
// });


// // MOBILE STEPS and Progress Bars
// const mobileSteps = document.querySelectorAll('#mobile-steps .mobile-step-link');
// const mobileProgressLine = document.getElementById('mobile-progress-line');

// mobileSteps.forEach(btn => {
//   btn.addEventListener('click', () => {
//     mobileSteps.forEach(b => {
//       b.textContent = b.dataset.step;
//       b.classList.remove('text-[#363636]');
//     });

//     btn.textContent = `${btn.dataset.step}. ${btn.dataset.label}`;
//     btn.classList.add('text-[#363636]');

//     const firstRect = mobileSteps[0].getBoundingClientRect();
//     const currentRect = btn.getBoundingClientRect();
//     const width = currentRect.right - firstRect.left;
//     mobileProgressLine.style.width = `${width}px`;  // sets the width on the progress line so it visually reaches the click steps
//   });
// });

// mobileSteps[0].click();  // automatically clicks the first step when the page loads



//-------------------------------------------
//------------ My Meal Details --------------
//-------------------------------------------

const labels = document.querySelectorAll("label");
const totalCost = document.getElementById("total-cost");
const itemsCount = document.getElementById("itemCount");
const itemsNameBox = document.getElementById("items-name-box");
const totalBox = document.getElementById("total-box");

const itemData = Array.from(labels).map(label => {
  const name = label.querySelector(".item-name")?.textContent.trim();
  const pricewithtest = label.querySelector(".item-price")?.textContent.trim();
  const price = parseInt(pricewithtest.replace(/[^0-9]/g, ""));
  return {name, price};
});

// updateContent() -->
//   --> checks which labels are selected
//   --> counts how many are selected
//   --> adds their total price
//   --> builds HTML showing the selected items names and price
//   --> stores the result inside variables

function updateContent(){
  let total = 0;
  let count = 0;
  let selectedItems = "";
  let selectedTotal = "";

  labels.forEach((label, index) => {
    if(label.classList.contains("selected")){
      count++;
      total += itemData[index].price;
      selectedItems += `<p class="mb-2">${itemData[index].name}</p>`;
      selectedTotal += `<p class="mb-2">Rs. ${itemData[index].price}</p>`;
    }
  });
  itemsNameBox.innerHTML = selectedItems || "<p>No items selected</p>";
  totalBox.innerHTML = selectedTotal || "<p>Rs.0</p>";
  totalCost.textContent = `Rs.${total.toLocaleString()}`; // .toLocaleString() --> adds comma to the number
  itemsCount.textContent = `${count} item${count !== 1 ? "s" : ""}`;
}

labels.forEach(label => {
  label.addEventListener("click", () => {
    label.classList.toggle("selected");
    updateContent();
  });
});
updateContent();


const userPreference = "I do not want any garlic and mushroom as I am allergic to both, and avoid peanuts, soy, and onions as well.";

const preview = document.getElementById("preview"); // it holds the preferences
const fullContent = document.getElementById("fullContent");
const btn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");
const redLine = document.getElementById("redLine");

fullContent.textContent = userPreference;

preview.textContent =
  userPreference.length > 60  // 
    ? userPreference.substring(0, 60) + "..." // if else (? : )
    : userPreference;

let isOpen = false; // start as close

btn.addEventListener("click", () =>{
  isOpen = !isOpen;
   if(isOpen){
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