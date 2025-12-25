// 1. DOM Elements
const grid = document.getElementById('fruitGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('fruitModal');
const closeBtn = document.querySelector('.close-btn');

// 2. Render the Grid on Load
function renderGrid(data) {
    grid.innerHTML = ''; // Clear existing
    
    data.forEach(fruit => {
        const card = document.createElement('div');
        card.className = 'fruit-card';
        card.style.borderColor = fruit.color;
        
        // Using an <img> tag for the fruit image
        card.innerHTML = `
            <img src="${fruit.image}" alt="${fruit.name}" class="card-image">
            <div class="card-name">${fruit.name}</div>
            <div class="card-cal">${fruit.calories} Cal</div>
        `;

        // Add Click Event to Open Modal
        card.addEventListener('click', () => openModal(fruit));
        
        grid.appendChild(card);
    });
}

// 3. Open Modal Function
function openModal(fruit) {
    // Fill Text Data
    document.getElementById('mName').innerText = fruit.name;
    document.getElementById('mSubtitle').innerText = fruit.subtitle;
    document.getElementById('mCal').innerText = fruit.calories;
    document.getElementById('mServing').innerText = fruit.serving;
    document.getElementById('mDesc').innerText = fruit.description;

    // Style Header
    document.getElementById('modalHeader').style.backgroundColor = fruit.color;

    // Fill Macros & Animate Bars
    updateMacro('mCarb', 'barCarb', fruit.macros.carbs.total, fruit.macros.carbs.dv, '#3498db');
    updateMacro('mPro', 'barPro', fruit.macros.protein.total, fruit.macros.protein.dv, '#e74c3c');
    updateMacro('mFat', 'barFat', fruit.macros.fat.total, fruit.macros.fat.dv, '#f1c40f');

    // Fill Vitamins
    const vitContainer = document.getElementById('mVitamins');
    vitContainer.innerHTML = '';
    fruit.vitamins.forEach(vit => {
        vitContainer.innerHTML += `
            <div class="vit-item">
                <div>${vit.icon}</div>
                <strong>${vit.amount}</strong>
                ${vit.name}
            </div>
        `;
    });

    // Fill Tags
    const tagContainer = document.getElementById('mTags');
    tagContainer.innerHTML = '';
    fruit.tags.forEach(tag => {
        tagContainer.innerHTML += `<span>#${tag}</span>`;
    });

    // Show Modal
    modal.style.display = 'block';
}

// Helper to update bars
function updateMacro(textId, barId, value, percent, color) {
    document.getElementById(textId).innerText = value;
    const bar = document.getElementById(barId);
    bar.style.width = '0%'; // Reset first for animation
    bar.style.backgroundColor = color;
    
    // Tiny delay to ensure the transition sees the width change
    setTimeout(() => {
        bar.style.width = percent + '%'; 
    }, 50);
}

// 4. Close Modal Logic
closeBtn.onclick = () => modal.style.display = 'none';

// Close if user clicks outside the modal content
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 5. Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = fruitData.filter(fruit => 
        fruit.name.toLowerCase().includes(term)
    );
    renderGrid(filtered);
});

// Initial Render
renderGrid(fruitData);
