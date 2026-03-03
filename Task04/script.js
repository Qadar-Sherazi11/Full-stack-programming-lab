const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

/**
 * Tab Switching Logic
 * Demonstrates: Event Handling, DOM Manipulation & Smooth Scroll
 */
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // 1. Remove 'active' class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // 2. Add 'active' class to clicked tab and target content
        this.classList.add('active');
        targetSection.classList.add('active');

        // 3. Smooth Scroll to the section
        // Requirement: Smooth Scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});