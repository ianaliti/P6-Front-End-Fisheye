function photographerProfileTemplate(data) {
    const { id, name, city, country, portrait, tagline, title, image, likes, video } = data;

    function getUserProfileCard() {
        let cardHtmlModel = `
                        <article class="card-profile">
                            <div class="card-content">
                                <h2 class="profile-card-title">${name}</h2>
                                </a>
                            <div class="card-text">
                               <p class="profile-loc-text">${city}, ${country}</p>
                                <p class="profile-tagline">${tagline}</p>
                            </div> 
                            </div>
                             <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                            <div>
                                <img src="assets/images/PhotographersIDPhotos/${portrait}" class="profile-img-big">
                            </div>
                            </div>
                        </article>`;

        //create article

        const photographersSection = document.querySelector(".photographer_section");
        photographersSection.insertAdjacentHTML('beforebegin', cardHtmlModel)
    }

    function getMediasProfile() {
        if(video) {
            
        }
    }
    return { id, name, city, country, portrait, tagline, title, image, likes, video, getUserProfileCard, getMediasProfile  }
}
