//Mettre le code JavaScript lié à la page photographer.html

const button = document.querySelector('.button-dropdown');
const selectOption = document.querySelector('#dropdown');
const options = document.querySelectorAll('.option');

async function fetchData() {
    try {
        const response = await fetch('./data/photographers.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
} 

async function getPhotographerById(id) {
    const { photographers } = await fetchData();
    const profile = photographers.find((photographerId) => 
        photographerId.id === Number(id));
    return profile;
}

async function getMediasById(id){
    const { media } = await fetchData();
    const photographerMedias = await media.filter(
        (media) => media.photographerId === Number(id));
    return photographerMedias;
}


async function displayProfileData(photographers, mediasPhotographer) {
    const photographerModelProfil = photographerProfileTemplate(photographers);
    photographerModelProfil.getUserProfileCard();

    mediasPhotographer.forEach((photographer) => {
        const photographerModel = photographerProfileTemplate(photographer, photographers.name);
        photographerModel.getMediasProfile();
    })
}


// Dropdown button 
button.addEventListener('click', function(e) {
    e.preventDefault();
    toggleHidden()
})

function toggleHidden() {
    selectOption.classList.toggle('hidden')
}

options.forEach((option) => {
    option.addEventListener('click', function(e) {
       sortItems(e)
    })
})

function setSelectTitle(e) {
    const labelElement = document.querySelector(`label[for="select-date"]`)
    console.log(labelElement)
}

async function init() {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const id = urlParams.get('id');

   const photographers = await getPhotographerById(id);
   const mediasPhotographer = await getMediasById(id);
   displayProfileData(photographers, mediasPhotographer)
}

init()


