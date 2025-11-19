  // MEAL  --> STEP 1
  const vegOptions = document.querySelectorAll("#veg-options .option");
  const mealOptions = document.querySelectorAll("#meal-options .meal");
  const selectedType = document.getElementById("selectedType");
  const selectedMeal = document.getElementById("selectedMeal");
  const selectedPeople = document.getElementById("selectedPeople");
  const countDisplay = document.getElementById("peopleCount");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  let count = 1;

  // Function to show element if hidden
  function showElement(el) {
    el.classList.remove("hidden");
    el.classList.add("inline-block");
  }

    // Handle Veg/Non-Veg selection
    vegOptions.forEach((opt) => { 
        opt.addEventListener("click", () => {
            vegOptions.forEach((o) => o.classList.remove("bg-black","border-black", "text-white")); 
            opt.classList.add("bg-black", "border-black", "text-white");
            selectedType.textContent = opt.innerText.trim();
            showElement(selectedType);
        });
    });
                                                                                                                                     
    // Handle Meal selection
    mealOptions.forEach((meal) => {
        meal.addEventListener("click", () => {
        mealOptions.forEach((m) => m.classList.remove("bg-black","border-black", "text-white"));
        meal.classList.add("bg-black", "border-black","text-white");
        selectedMeal.textContent = meal.innerText.trim();
        showElement(selectedMeal);
        });
    });

    // Handle People count
    plus.addEventListener("click", () => {
        count++;
        countDisplay.textContent = count;
        selectedPeople.textContent = `${count} ${count > 1 ? "Servings" : "Serving"}`;  //used ternary operator
        showElement(selectedPeople);
    });

    minus.addEventListener("click", () => {
        if (count > 1) {
        count--;
        countDisplay.textContent = count;
        selectedPeople.textContent = `${count} ${count > 1 ? "Servings" : "Serving"}`;
        showElement(selectedPeople);
        }
    });



    // MEAL ITEMS  --> STEP 2 
    const stepLinks = document.querySelectorAll(".step-link, .mobile-step-link");
    const sections = document.querySelectorAll(".step-section");
    const progressLine = document.getElementById("progress-line");

    // buttons
    const nextButtons = document.querySelectorAll(".next-button");
    const backButtons = document.querySelectorAll(".back-button");

    let currentStep = 1; //current step

    //updating the progress line                                                      
    function updateProgress(step) { 
        const allLinks = Array.from(stepLinks);
        const currentLink = allLinks[step - 1];

        const parentRect = stepLinks[0].parentElement.parentElement.getBoundingClientRect();
        const currentRect = currentLink.getBoundingClientRect();
        const width = currentRect.right - parentRect.left;

        progressLine.style.width = `${width}px`;
    }                
    
    function showStep(step) {
        if (step <= 1) step = 1;
        if (step > stepLinks.length) step = stepLinks.length;

        currentStep = step;

        stepLinks.forEach(l => l.classList.remove("text-[#363636]"));
        stepLinks[step - 1].classList.add("text-[#363636]");

        updateProgress(step);

        sections.forEach(sec => sec.classList.add("hidden")); 
        const activeSection = document.getElementById(`step${step}`); 
        if (activeSection) activeSection.classList.remove("hidden");
    }

    // Step link click
    stepLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();; // stops teh reload or scroll to the top
            const step = parseInt(link.dataset.step); 
            showStep(step);
        });
    });

    // Next button click (all buttons)
    nextButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentStep < stepLinks.length) {
                showStep(currentStep + 1);
            }
        });
    });

    // Back button click (all buttons)
    backButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        });
    });

    // Initialize progress on load
    window.addEventListener("load", () => showStep(1));


// step2 selection process
const checkboxes = document.querySelectorAll('#step2 input[type="checkbox"]');
const addedItemsContainer = document.getElementById('addedItems');
const addedItemsSection = document.getElementById('addedItemsSection');

// item count elements (left + right)
const itemCount = document.getElementById('itemCount');
const rightItemCount = document.getElementById('right-itemCount');

// function to update count text
function updateItemCount() {
  const count = document.querySelectorAll('#step2 input[type="checkbox"]:checked').length;
  const text1 = `${count} item${count !== 1 ? 's' : ''} selected`; 

    const text2 = `${count} item${count !== 1 ? 's' : ''}`;


  if (itemCount) itemCount.textContent = text1;
  if (rightItemCount) rightItemCount.textContent = text2;

  if (count > 0) {
    addedItemsSection.classList.remove('hidden');
  } else {
    addedItemsSection.classList.add('hidden');
  }
}

// main logic
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // clear current right-side items
    addedItemsContainer.innerHTML = '';

    // loop through all checkboxes and rebuild right-side items
    checkboxes.forEach(cb => {
      if (cb.checked) {
        const label = cb.closest('label');
        const imgSrc = label.querySelector('img')?.src || '';
        const name = label.querySelector('.text-xl.font-bold p')?.textContent || label.querySelector('p').textContent;
        const kcal = label.querySelector('.text-sm.font-medium.pr-2')?.textContent || '';
        const weight = label.querySelector('.text-sm.font-medium.px-2')?.textContent || '';

        const itemDiv = document.createElement('div');
        itemDiv.className = "flex items-start space-x-4 border-t-2 border-[#00000033] pt-3 relative";

        // build inner HTML
        itemDiv.innerHTML = `
          <img src="${imgSrc}" class="h-[64px] w-[64px] object-contain rounded" />
          <div class="space-y-3">
            <p class="font-semibold text-md">${name}</p>
            <div class="flex text-[#6A6A6A] items-center text-sm font-medium">
                <p class="pr-2">${kcal}</p>
                <div class="h-2 border-l border-gray-400 font-medium"></div>
                <p class="px-2">${weight}</p>
            </div>
          </div>
          <button class="absolute top-1 right-1 text-[#363636] hover:bg-[#0000001A] font-normal text-4xl md:px-2 rounded">&times;</button>
        `;

        // item removble when "x" is clicked
        const removeBtn = itemDiv.querySelector('button');
        removeBtn.addEventListener('click', () => {
          cb.checked = false;
          itemDiv.remove();
          updateItemCount();
        });

        addedItemsContainer.appendChild(itemDiv);
      }
    });

    updateItemCount();
  });
});
updateItemCount();



// PREFERENCES --> STEP 3s
const notesInput = document.getElementById('notes');         
const preferencesBox = document.getElementById('preferences'); 
const preferenceText = document.getElementById('preferenceText'); 

// Listen for typing in the Step 3 textarea
notesInput.addEventListener('input', () => {
    const text = notesInput.value.trim();

    if (text !== "") {
        preferencesBox.classList.remove('hidden');  
        preferenceText.textContent = text; 
    } else {
        preferencesBox.classList.add('hidden'); 
        preferenceText.textContent = ""; 
    }
});


// MOBILE STEPS and Progress Bars
const mobileSteps = document.querySelectorAll('#mobile-steps .mobile-step-link');
const mobileProgressLine = document.getElementById('mobile-progress-line');

mobileSteps.forEach(btn => {
  btn.addEventListener('click', () => {
    mobileSteps.forEach(b => {
      b.textContent = b.dataset.step;
      b.classList.remove('text-[#363636]');
    });

    btn.textContent = `${btn.dataset.step}. ${btn.dataset.label}`;
    btn.classList.add('text-[#363636]');

    const firstRect = mobileSteps[0].getBoundingClientRect();
    const currentRect = btn.getBoundingClientRect();
    const width = currentRect.right - firstRect.left;
    mobileProgressLine.style.width = `${width}px`;  
  });
});

mobileSteps[0].click(); 



// STEP 3
    const subs = document.getElementById("subscription-plan");
    const time = document.getElementById("delivery-time");
    const subsBox = document.getElementById("subscription-plan-right");
    const timeBox = document.getElementById("delivery-time-right");
    const detailsDiv = document.getElementById("delivery-details");

    function updateSummary() {
        if(subs.value || time.value) {
            detailsDiv.classList.remove("hidden");
            subsBox.textContent = subs.value;
            timeBox.textContent = time.value;
        } else {
            detailsDiv.classList.add("hidden");
        }
    }

    // Listen to changes
    subs.addEventListener("change", updateSummary);
    time.addEventListener("change", updateSummary);



// HEADING
const heading = document.getElementById("heading");

// Map step numbers to heading text
const stepHeadings = {
    1: "Set your meal preferences",
    2: "Create custom meal",
    3: "Choose your delivery time",
};

function showStep(step) {
    if (step <= 1) step = 1;
    if (step > stepLinks.length) step = stepLinks.length;

    currentStep = step;

    stepLinks.forEach(l => l.classList.remove("text-[#363636]"));
    stepLinks[step - 1].classList.add("text-[#363636]");

    updateProgress(step);

    // Show/Hide sections
    sections.forEach(sec => sec.classList.add("hidden")); 
    const activeSection = document.getElementById(`step${step}`); 
    if (activeSection) activeSection.classList.remove("hidden");

    // Update heading text
    heading.textContent = stepHeadings[step] || "Set your meal preferences";
}
