const form = document.querySelector("form");
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');

const modal = document.getElementById("contact_modal");
const modalBackground = document.querySelector('.main')
const header = document.querySelector('header')

function displayModal() {
  modal.style.display = "block";
  modalBackground.style.opacity = '0.5';
  header.style.opacity = '0.5';
}

function closeModal() {
  modal.style.display = "none";
  modalBackground.style.opacity = '1';
  header.style.opacity = '1';
}


// Submit form
form.addEventListener('submit', (event) => {
  event.preventDefault()
  validateForm()
})

// Validate functions

// Check that the name value length is more than 2 characters
const validateFirst = (name) => {
  let nameRegex = new RegExp("([a-zA-Z_\s]+)");
  if (!nameRegex.test(name) || name.length < 2) {
    throw new Error("Votre prénom doit comprendre au moins 2 caractères.")
  }
}

// Check that the length of the last name value is more than 2 characters
const validateLast = (surname) => {
  let nameRegex = new RegExp("([a-zA-Z_\s]+)");
  if (!nameRegex.test(surname) || surname.length < 2) {
    throw new Error("Votre nom doit comprendre au moins 2 caractères.")
  }
}

// Check that the email matches the regex and its length is more than zero
const valideEmail = (email) => {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  if (!emailRegExp.test(email) || email.value === "") {
    throw new Error("Veuillez renseigner une adresse email valide.")
  }
}


//Error messages 

// Send specific error message 
// Add data-error id and data-error-visible true in CSS
const throwError = (element, message) => {
  element.parentElement.setAttribute("data-error", message);
  element.parentElement.setAttribute("data-error-visible", true);
}

// 2nd submit, hide a valid field previous invlid
// Remove data-error id and switch data-error-visible to false in CSS
const hideError = (element) => {
  element.parentElement.removeAttribute("data-error");
  element.parentElement.removeAttribute("data-error-visible");
}


// Validate form
const validateForm = () => {
  let isValide = true;

  // Create an array field with objects to maintain the value, DOM elements, and functions
  const fields = [
    { value: first.value.trim(), element: first, validator: validateFirst },
    { value: last.value.trim(), element: last, validator: validateLast },
    { value: email.value.trim(), element: email, validator: valideEmail }
  ]

  // Check if the validator function runs with the value without error. If yes, hide the error. If no, display an error with the corresponding message
  fields.forEach(({ value, element, validator }) => {
    try {
      validator(value);
      hideError(element);
    } catch (error) {
      throwError(element, error.message);
      isValide = false;
    }
  });

  if (isValide) {
    closeModal()
  }

}
