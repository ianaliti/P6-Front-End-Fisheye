function photographerTemplate(data) {
    const { id, name, city, country, portrait, tagline, price } = data;

    function getUserCardDOM() {
        let cardHtmlModel = `
                        <article class="card-wrapper">
                            <div class="card">
                                <a href='photographer.html?id=${id}&name=${name}' class="profile-link">
                                <img src="assets/images/PhotographersIDPhotos/${portrait}" class="profile-img-big">
                                <h2 class="profile-card-title">${name}</h2>
                                </a>
                            <div class="card-text">
                                <p class="profile-loc-text">${city}, ${country}</p>
                                <p class="profile-tagline">${tagline}</p>
                                <p class="profile-price">${price}€/jour</p>
                            </div>
                            </div>
                        </article>`;

        //create article

        const photographersSection = document.querySelector(".photographer_section");
        photographersSection.insertAdjacentHTML('beforebegin', cardHtmlModel)
    }
    return { id, name, city, country, portrait, tagline, price, getUserCardDOM }
}
