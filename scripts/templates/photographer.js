// Creates a DOM user map for a photographer from the provided data.
function photographerTemplate(data) {

    // Destructures the photographer's data
    const { id, name, city, country, portrait, tagline, price } = data;

    function getUserCardDOM() {

        const picture = `assets/images/PhotographersIDPhotos/${portrait}`;

        //create DOM elements and set attributes
        const article = document.createElement('article');
        article.classList.add("card-wrapper");

        const card = document.createElement('div');
        card.classList.add("card");

        const link = document.createElement("a");
        link.setAttribute("href", `photographer.html?id=${id}&name=${name}`)
        link.setAttribute('aria-label', `${name} photographe de ${city} ${country}, ${tagline} au prix de ${price}`);
        link.classList.add("profile-link")

        const img = document.createElement('img');
        img.classList.add("profile-img-big");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `${name}, photographe à ${city}, ${country}`);
        img.setAttribute("aria-label", picture)

        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.classList.add("profile-card-title");

        const cardText = document.createElement('div');
        cardText.classList.add("card-text");

        const location = document.createElement('p');
        location.classList.add("profile-loc-text");
        location.textContent = city, country;

        const taglines = document.createElement('p');
        taglines.classList.add("profile-tagline");
        taglines.textContent = tagline;

        const prices = document.createElement('p');
        prices.classList.add("profile-price");
        prices.textContent = `${price}€/jour`;


        article.appendChild(card);
        card.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        card.appendChild(cardText);
        cardText.appendChild(location);
        cardText.appendChild(taglines);
        cardText.appendChild(prices);

        return (article)
    }

    return { id, name, city, country, portrait, tagline, price, getUserCardDOM }
}
