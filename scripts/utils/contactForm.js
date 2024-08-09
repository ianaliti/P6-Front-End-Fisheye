const form = document.querySelector("form");
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea')

const modal = document.querySelector(".modal-section");
const modalBackground = document.querySelector('.main');
const logo = document.querySelector('.logo')

function displayModal() {
  modal.style.display = "block";
  modalBackground.style.opacity = '0.5';
  logo.style.display.opacity = '0.5'
}

function closeModal() {
  modal.style.display = "none";
  modalBackground.style.opacity = '1';
  header.style.opacity = '1';
  logo.style.display.opacity = '1'
}

// Set photographer's name
function setModalPhotographerName(name) {
  const photographerName = document.querySelector('.modal-photographer-name');
  photographerName.textContent = name; 
}

// Submit form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(first.value);
  console.log(last.value);
  console.log(email.value);
  console.log(textarea.value)
});

// Keyup event listeners for dynamic form submission
form.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    console.log(first.value);
    console.log(last.value);
    console.log(email.value);
    console.log(textarea.value)
  }
});

