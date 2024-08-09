//Fetch the data
async function fetchData() {
    try {
        const response = await fetch('./data/photographers.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
} 

// Returns the photographer object that matches the given id
async function getPhotographerById(id) {
    const { photographers } = await fetchData();
    const profile = photographers.find((photographerId) => 
        photographerId.id === Number(id));
    return profile;
}

//Filter the media items to find those that belong to the specified photographer id 
async function getMediasById(id){
    const { media } = await fetchData();
    const photographerMedias = await media.filter(
        (media) => media.photographerId === Number(id));
    return photographerMedias;
}


async function displayProfileData(photographers, mediasPhotographer) {
    const photographerSection = document.querySelector('.photograph-profile');
    const photographerMedia = document.querySelector('.medias');

    //Update the display with likes and pricing information
    const photographerModelProfil = photographerProfileTemplate(photographers);
    const userCard = photographerModelProfil.getUserProfileCard();
    photographerSection.appendChild(userCard);

    mediasPhotographer.forEach((photographer) => {
        //Pass the media and photographer's name to create the template for media items
        const photographerModel = photographerProfileTemplate(photographer, photographers.name);
        const userMedia = photographerModel.getMediasProfile();
        photographerMedia.appendChild(userMedia);
    })
    //Update the display with likes and pricing information
    getLikesAndPrice(photographers.price, mediasPhotographer);
    //Populate a dropdown list with media items and the photographer's name
    setDropdownList(mediasPhotographer, photographers.name);
    // Set the photographer's name in a modal
    setModalPhotographerName(photographers.name);
}


async function init() {
    //Retrieves the query string from the URL, which includes parameters after the ? in the URL
   const queryString = window.location.search;
   //Creates a URLSearchParams object to parse and work with query string parameters
   const urlParams = new URLSearchParams(queryString);
   //Extracts the value of the id parameter from the query string
   const id = urlParams.get('id');

   //Fetch the photographer data using getPhotographerById with the extracted id
   const photographers = await getPhotographerById(id);
   //Fetch the media data associated with the photographer using getMediasById with the same id
   const mediasPhotographer = await getMediasById(id);
    //To populate the profile and media sections with the retrieved data
   await displayProfileData(photographers, mediasPhotographer)
   //Update the like counts
   updateLikes()
}

init()


