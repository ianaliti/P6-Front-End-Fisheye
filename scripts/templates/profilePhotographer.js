function photographerProfileTemplate(data) {
    const { id, photographerId, price, title } = data;

    function getUserProfileCard() {
        let cardHtmlModel = `
                        <article class="card-wrapper">
                            <div class="card">
                                <h2 class="profile-card-title">${price}</h2>
                                </a>
                            <div class="card-text">
                                <p class="profile-loc-text">${title}</p>
                            </div>
                            </div>
                        </article>`;

        //create article

        const photographersSection = document.querySelector(".photographer_section");
        photographersSection.insertAdjacentHTML('beforebegin', cardHtmlModel)
    }
    return { id, photographerId, price, title, getUserProfileCard }
}
