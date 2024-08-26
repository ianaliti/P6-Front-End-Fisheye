export const setModalPhotographerName = (name) => {
    const photographerName = document.querySelector('.modal-photographer-name');
    photographerName.textContent = name;
};

const modal = document.querySelector(".modal-section");
const modalBackground = document.querySelector('.main');
const logo = document.querySelector('.logo');
const closeIcon = document.querySelector('.modal header img'); // This is the close icon in your HTML

function handleArrowKeyNavigation(event) {
    const inputs = Array.from(document.querySelectorAll('input, textarea'));
    const currentIndex = inputs.indexOf(document.activeElement);

    if (event.key === 'ArrowDown' && currentIndex < inputs.length - 1) {
        event.preventDefault();
        inputs[currentIndex + 1].focus();
    } else if (event.key === 'ArrowUp' && currentIndex > 0) {
        event.preventDefault();
        inputs[currentIndex - 1].focus();
    }
}

function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function displayModal() {
    modal.style.display = "block";
    modalBackground.style.opacity = '0.5';
    logo.style.opacity = '0.5';

    // Trap focus inside the modal
    trapFocus(modal);

    // Focus on the first input field in the modal
    modal.querySelector('input').focus();
}

function closeModal() {
    modal.style.display = "none";
    modalBackground.style.opacity = '1';
    logo.style.opacity = '1';

    // Return focus to the button that opened the modal
    document.querySelector('.contact_button').focus();
}

function displaySuccessModal() {
    successModal.style.display = "block";
    trapFocus(successModal); // Trap focus inside the success modal

    // Optionally, auto-close the success modal after 3 seconds
    setTimeout(() => {
        closeSuccessModal();
    }, 3000);
}

function closeSuccessModal() {
    successModal.style.display = "none";
    modalBackground.style.opacity = '1';
    logo.style.opacity = '1';
}

function handleFormSubmission() {
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const textarea = document.getElementById('textarea').value;

    console.log(`Prénom: ${first}, Nom: ${last}, Email: ${email}, Message: ${textarea}`);
    closeModal();
    displaySuccessModal(); // Display the success modal after the form is submitted
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = Array.from(form.querySelectorAll('input, textarea'));

    inputs.forEach(input => {
        input.addEventListener('keydown', (event) => handleArrowKeyNavigation(event));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
        handleFormSubmission();  // Call the function to handle form data
    });

    form.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();  // Prevent the default form submission behavior
            handleFormSubmission();  // Call the function to handle form data
        }
    });

    closeIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            closeModal();  // Close the modal on Enter or Space key press
        }
    });
});

window.displayModal = displayModal;
window.closeModal = closeModal;
