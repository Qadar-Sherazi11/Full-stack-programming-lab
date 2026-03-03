// Select elements
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const itemList = document.getElementById('itemList');

// Function to add a new item
function addItem() {
    const itemName = itemInput.value.trim();

    if (itemName === "") {
        alert("Please enter a product name!");
        return;
    }

    // 1. Create the LI element
    const li = document.createElement('li');
    
    // 2. Set the content (Product Name + Delete Button)
    li.innerHTML = `
        <span>${itemName}</span>
        <button class="delete-btn">Delete</button>
    `;

    // 3. Add Delete Event Listener to the new button
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove(); // Removes the item from DOM
    });

    // 4. Append to the list
    itemList.appendChild(li);

    // 5. Clear input
    itemInput.value = "";
}

// Event Listener for button click
addBtn.addEventListener('click', addItem);

// Allow "Enter" key to add item
itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});