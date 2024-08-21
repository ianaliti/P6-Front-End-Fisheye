export const setModalPhotographerName = (name) => {
  const photographerName = document.querySelector('.modal-photographer-name');
  photographerName.textContent = name; 
};

const form = document.querySelector("form");
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

const modal = document.querySelector(".modal-section");
const modalBackground = document.querySelector('.main');
const logo = document.querySelector('.logo');

function displayModal() {
  modal.style.display = "block";
  modalBackground.style.opacity = '0.5';
  logo.style.opacity = '0.5';
  console.log('Modal opened');
}

function closeModal() {
  modal.style.display = "none";
  modalBackground.style.opacity = '1';
  logo.style.opacity = '1';
  console.log('Modal closed');
}

// Attach these functions to the window object to make them accessible globally
window.displayModal = displayModal;
window.closeModal = closeModal;

// Form submission handling
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(first.value, last.value, email.value, textarea.value);
  closeModal();
});

// Handle form submission via Enter key
form.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    console.log(first.value, last.value, email.value, textarea.value);
    closeModal();
  }
});
