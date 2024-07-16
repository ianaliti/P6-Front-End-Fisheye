//Mettre le code JavaScript lié à la page photographer.html

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
    console.log(photographers)
    const photographerModelProfil = photographerProfileTemplate(photographers);
    photographerModelProfil.getUserProfileCard();

    console.log(mediasPhotographer)
    mediasPhotographer.forEach((photographer) => {
        // const photographerModel = photographerProfileTemplate(photographer);
        // photographerModel.getUserProfileCard();
    })
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