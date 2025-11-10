
  // Selectors
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
        selectedPeople.textContent = `${count} ${count > 1 ? "Servings" : "Serving"}`;
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



// steps link and buttons
    const stepLinks = document.querySelectorAll(".step-link");
    const sections = document.querySelectorAll(".step-section");
    const progressLine = document.getElementById("progress-line");

    // Use class selectors for buttons
    const nextButtons = document.querySelectorAll(".next-button");
    const backButtons = document.querySelectorAll(".back-button");

    let currentStep = 1; // Track current step

    function updateProgress(step) {
        const allLinks = Array.from(stepLinks);
        const currentLink = allLinks[step - 1];

        const parentRect = stepLinks[0].parentElement.parentElement.getBoundingClientRect();
        const currentRect = currentLink.getBoundingClientRect();
        const width = currentRect.right - parentRect.left;

        progressLine.style.width = `${width}px`;
    }

    function showStep(step) {
        if (step < 1) step = 1;
        if (step > stepLinks.length) step = stepLinks.length;

        currentStep = step;

        // Update step links color
        stepLinks.forEach(l => l.classList.remove("text-[#363636]"));
        stepLinks[step - 1].classList.add("text-[#363636]");

        // Animate progress line
        updateProgress(step);

        // Show step content
        sections.forEach(sec => sec.classList.add("hidden"));
        const activeSection = document.getElementById(`step${step}`);
        if (activeSection) activeSection.classList.remove("hidden");
    }

    // Step link click
    stepLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
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
const addedItemsSection = document.getElementById('addedItemsSection'); // new

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    addedItemsContainer.innerHTML = '';

    let selectedCount = 0;

    checkboxes.forEach(cb => {
      if (cb.checked) {
        selectedCount++;
        const label = cb.closest('label');
        const imgSrc = label.querySelector('img').src;
        const name = label.querySelector('.text-xl.font-bold p')?.textContent || label.querySelector('p').textContent;
        const kcal = label.querySelector('.text-sm.font-medium.pr-2')?.textContent || '';
        const weight = label.querySelector('.text-sm.font-medium.px-2')?.textContent || '';

        const itemDiv = document.createElement('div');
        itemDiv.className = "flex items-start space-x-4 border-t-2 border-[#00000033] p-2 relative";

        itemDiv.innerHTML = `
          <img src="${imgSrc}" class="h-16 w-16 object-contain rounded" />
          <div>
            <p class="font-semibold">${name}</p>
            <div class="flex text-[#6A6A6A] items-center text-sm">
              <p class="pr-2">${kcal}</p>
              <div class="h-2 border-l border-gray-400"></div>
              <p class="px-2">${weight}</p>
            </div>
          </div>
          <button class="absolute top-1 right-1 text-[#363636] hover:bg-[#0000001A] font-normal text-4xl px-2 rounded">&times;</button>
        `;

        // remove item when "x" clicked
        itemDiv.querySelector('button').addEventListener('click', () => {
          cb.checked = false;
          itemDiv.remove();
          if (addedItemsContainer.children.length === 0) {
            addedItemsSection.classList.add('hidden');
          }
        });
        addedItemsContainer.appendChild(itemDiv);
      }
    });

    // show or hide the section based on selection
    if (selectedCount > 0) {
      addedItemsSection.classList.remove('hidden');
    } else {
      addedItemsSection.classList.add('hidden');
    }
  });
});

const notesInput = document.getElementById('notes');          // the textarea in Step 3
const preferencesBox = document.getElementById('preferences'); // right box section
const preferenceText = document.getElementById('preferenceText'); // text display area

// Listen for typing in the Step 3 textarea
notesInput.addEventListener('input', () => {
  const text = notesInput.value.trim();

  if (text !== "") {
    // show and update the right box preference text
    preferencesBox.classList.remove('hidden');
    preferenceText.textContent = text;
  } else {
    // hide if empty
    preferencesBox.classList.add('hidden');
    preferenceText.textContent = "";
  }
});
