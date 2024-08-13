// Handle contact form and modal logic
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

export function displayModal() {
modal.style.display = "block";
modalBackground.style.opacity = '0.5';
logo.style.opacity = '0.5';
}

export function closeModal() {
modal.style.display = "none";
modalBackground.style.opacity = '1';
header.style.opacity = '1';
logo.style.opacity = '1';
}

form.addEventListener('submit', (event) => {
event.preventDefault();
console.log(first.value, last.value, email.value, textarea.value);
});

form.addEventListener('keyup', (event) => {
if (event.key === 'Enter') {
  event.preventDefault();
  console.log(first.value, last.value, email.value, textarea.value);
}
});
