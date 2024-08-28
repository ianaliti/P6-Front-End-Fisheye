export const setModalPhotographerName = (name) => {
  const photographerName = document.querySelector('.modal-photographer-name');
  photographerName.textContent = name;
};

// Grab the necessary DOM elements
const modal = document.querySelector(".modal-section");
const modalBackground = document.querySelector('.main');
const logo = document.querySelector('.logo');
const closeIcon = document.querySelector('.modal header img'); // Close icon for the contact modal
const successModal = document.querySelector('.confirmModal');
const successModalCloseButton = document.querySelector('.confirmModalClose'); // Close button for the success modal

// Function to navigate through form fields using arrow keys
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

// Function to trap focus within the modal
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

// Function to display the contact modal
function displayModal() {
  modal.style.display = "block";
  modalBackground.style.opacity = '0.5';
  logo.style.opacity = '0.5';

  // Trap focus inside the modal
  trapFocus(modal);

  // Focus on the first input field in the modal
  modal.querySelector('input').focus();
}

// Function to close the contact modal
function closeModal() {
  modal.style.display = "none";
  modalBackground.style.opacity = '1';
  logo.style.opacity = '1';

  // Return focus to the button that opened the modal
  document.querySelector('.contact_button').focus();
}

// Function to display the success modal after form submission
function displaySuccessModal() {
  successModal.style.display = "flex"; // Ensure the modal is displayed
  successModal.style.opacity = '1'; // Make sure it's fully visible
  modalBackground.style.opacity = '0.5';
  logo.style.opacity = '0.5';

  // Explicitly set focus on the first interactive element in the success modal
  successModal.querySelector('.confirmModalClose').focus();

  trapFocus(successModal); // Trap focus inside the success modal
}

// Function to close the success modal
function closeSuccessModal() {
  successModal.style.display = "none";
  modalBackground.style.opacity = '1';
  logo.style.opacity = '1';

  // Return focus to the "Contactez-moi" button or another logical element
  document.querySelector('.contact_button').focus();
}

// Function to clear all input fields in the form after submission
function clearFormInputs() {
  const form = document.querySelector('form');
  form.reset(); 
}

// Function to handle the form submission process
function handleFormSubmission() {
  const first = document.getElementById('first').value;
  const last = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const textarea = document.getElementById('textarea').value;

  console.log(`Prénom: ${first}, Nom: ${last}, Email: ${email}, Message: ${textarea}`);
  
  closeModal();
  clearFormInputs(); 
  displaySuccessModal();
}

// Event listener setup after DOM content is fully loaded
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

  successModalCloseButton.addEventListener('click', closeSuccessModal);
});

// Exposing displayModal and closeModal functions globally
window.displayModal = displayModal;
window.closeModal = closeModal;
