function photographerTemplate(data) {
    const { id, name, city, country, portrait, tagline, price } = data;


    function getUserCardDOM() {

        let cardHtmlModel = `
                        <article class="card-wrapper">
                            <div class="card">
                                <a href='photographer.html?id=${id}&name=${name}' class="profile-link">
                                <img src="media/img/PhotographersIDPhotos/${portrait}" class="profile-img-big">
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

        // //create img and add src
        // const img = document.createElement( 'img' );
        // img.setAttribute("src", portrait)

        // //create html elements 
        // const h2 = document.createElement( 'h2' );
        // const cityCard = document.createElement( 'h4' )
        // const countryCard = document.createElement( 'h4' )

        // //setAttribute for html elements
        // cityCard.setAttribute('class', 'card-location');
        // countryCard.setAttribute('class', 'card-location');

        // //add meaning 
        // h2.textContent = name;
        // cityCard.textContent = city;
        // countryCard.textContent = country;

        // //add elements to html
        // article.appendChild(img);
        // article.appendChild(h2);
        // article.appendChild(cityCard)
        // article.appendChild(cardHtmlModel)

        // //return article
        // return article;
    }
    return { id, name, city, country, portrait, tagline, price, getUserCardDOM }
}