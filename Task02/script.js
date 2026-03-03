// Data: List of products
const products = [
    { url: "https://picsum.photos/id/20/600/400", desc: "High-End Desktop Setup" },
    { url: "https://picsum.photos/id/1/600/400", desc: "Portable Workstation Laptop" },
    { url: "https://picsum.photos/id/26/600/400", desc: "Digital Content Creator Gadgets" },
    { url: "https://picsum.photos/id/3/600/400", desc: "Smart Tech Accessories" }
];

let currentIndex = 0;

const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

/**
 * Function to update gallery with Fade Animation
 * Demonstrates: DOM Manipulation & Effects
 */
function updateGallery(index) {
    // 1. Effects: Fade Out
    const fadeOut = mainImage.animate([
        { opacity: 1 }, 
        { opacity: 0 }
    ], { duration: 300, fill: 'forwards' });

    // 2. Chaining: Once fade out finishes, change source and fade in
    fadeOut.onfinish = () => {
        // DOM Manipulation
        mainImage.src = products[index].url;
        caption.innerText = products[index].desc;

        // Effects: Fade In
        mainImage.animate([
            { opacity: 0 }, 
            { opacity: 1 }
        ], { duration: 300, fill: 'forwards' });
    };
}

// Event Handling
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % products.length;
    updateGallery(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateGallery(currentIndex);
});