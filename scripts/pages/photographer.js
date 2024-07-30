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
    const photographerSection = document.querySelector('.photograph-profile');
    const photographerMedia = document.querySelector('.medias');

    const photographerModelProfil = photographerProfileTemplate(photographers);
    const userCard = photographerModelProfil.getUserProfileCard();
    photographerSection.appendChild(userCard);

    mediasPhotographer.forEach((photographer) => {
        const photographerModel = photographerProfileTemplate(photographer, photographers.name);
        const userMedia = photographerModel.getMediasProfile();
        photographerMedia.appendChild(userMedia);
    })
    getLikesAndPrice(photographers.price, mediasPhotographer);
}


async function init() {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const id = urlParams.get('id');

   const photographers = await getPhotographerById(id);
   const mediasPhotographer = await getMediasById(id);
   await displayProfileData(photographers, mediasPhotographer)
   updateLikes()
}

init()


