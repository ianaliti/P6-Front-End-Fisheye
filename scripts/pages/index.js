import { fetchData } from '../utils/fetchData.js';
import { PhotographerFactory } from '../factories/PhotographerFactory.js';

// Display photographers on the index page
async function displayData(photographers) {
    const photographerSections = document.querySelector('.photographer_section');
    const factory = new PhotographerFactory(); //create and return instances

    photographers.forEach((photographer) => {
        const photographerCard = factory.createComponent("photographerCard", photographer);
        const userCardDOM = photographerCard.getUserCardDOM();
        photographerSections.appendChild(userCardDOM);
    });
}

// Initialize the index page
async function init() {
    const { photographers } = await fetchData();
    if (photographers) {
        displayData(photographers);
    }
}

init();
