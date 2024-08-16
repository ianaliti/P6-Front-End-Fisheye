import { getPhotographerById, getMediasById } from '../utils/fetchData.js';
import { PhotographerFactory } from '../factories/PhotographerFactory.js';
import { MediaFactory } from '../factories/MediaFactory.js';
import { getLikesAndPrice, updateLikes } from '../utils/likesTotal.js';
import { setDropdownList } from '../utils/dropdown.js';
import { setModalPhotographerName } from '../utils/contactForm.js';
import { Lightbox } from '../utils/lightbox.js';

// Display photographer profile and media
async function displayProfileData(photographer, medias) {
    const factory = new PhotographerFactory();
    const mediaFactory = new MediaFactory();

    const photographerSection = document.querySelector('.photograph-profile');
    const photographerProfile = factory.createComponent("photographerProfile", photographer);
    const profileDOM = photographerProfile.getUserProfileCard();
    photographerSection.appendChild(profileDOM);

    const mediaContainer = document.querySelector('.medias');
    medias.forEach((media) => {
        if (!photographer.name) {
            console.error("Photographer name is undefined");
        }

        const mediaComponent = mediaFactory.createComponent(media.image ? "image" : "video", media);
        const mediaDOM = mediaComponent.getMediaDOM(photographer.name); // Ensure photographer.name is passed

        if (mediaDOM) {
            mediaContainer.appendChild(mediaDOM);
        } else {
            console.error(`Failed to create media DOM for media ID ${media.id}`);
        }
    });

    getLikesAndPrice(photographer.price, medias);
    setDropdownList(medias, photographer.name); // Pass the photographer name to dropdown
    setModalPhotographerName(photographer.name);
    new Lightbox();
    updateLikes(); // Ensure this is called after media items are added to the DOM
}

// Initialize the photographer page
async function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const photographer = await getPhotographerById(id);
    const medias = await getMediasById(id);
    
    if (photographer && medias) {
        displayProfileData(photographer, medias);
    } else {
        console.error("Photographer or media data is missing or incorrect");
    }
}

init();
