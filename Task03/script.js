const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const successMessage = document.getElementById('successMessage');

/**
 * Validation Logic
 * Demonstrates: Event Handling (blur) & CSS Manipulation
 */

// Validate Username (Length > 4)
username.addEventListener('blur', () => {
    if (username.value.trim().length < 5) {
        username.classList.add('invalid'); // CSS Manipulation
    } else {
        username.classList.remove('invalid');
    }
});

// Validate Email (Basic Pattern)
email.addEventListener('blur', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('invalid');
    } else {
        email.classList.remove('invalid');
    }
});

/**
 * Form Submission
 * Demonstrates: DOM Manipulation & Preventing Refresh
 */
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page refresh

    // Final check
    const isUsernameValid = username.value.trim().length >= 5;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

    if (isUsernameValid && isEmailValid) {
        // DOM Manipulation: Hide form, show success
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
    } else {
        alert("Please fix the errors before submitting!");
    }
});