// Class representing a photographer's card on the index page
export class PhotographerCard {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.city = data.city;
        this.country = data.country;
        this.portrait = data.portrait;
        this.tagline = data.tagline;
        this.price = data.price;
    }

    getUserCardDOM() {
        const picture = `assets/images/PhotographersIDPhotos/${this.portrait}`;
        const article = document.createElement('article');
        article.classList.add("card-wrapper");

        const card = document.createElement('div');
        card.classList.add("card");

        const link = document.createElement("a");
        link.setAttribute("href", `photographer.html?id=${this.id}&name=${this.name}`);
        link.setAttribute('aria-label', `${this.name} photographe de ${this.city} ${this.country}, ${this.tagline} au prix de ${this.price}`);
        link.classList.add("profile-link");

        const img = document.createElement('img');
        img.classList.add("profile-img-big");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `${this.name}, photographe à ${this.city}, ${this.country}`);
        img.setAttribute("aria-label", picture);

        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        h2.classList.add("profile-card-title");

        const cardText = document.createElement('div');
        cardText.classList.add("card-text");

        const location = document.createElement('p');
        location.classList.add("profile-loc-text");
        location.textContent = `${this.city}, ${this.country}`;

        const taglines = document.createElement('p');
        taglines.classList.add("profile-tagline");
        taglines.textContent = this.tagline;

        const prices = document.createElement('p');
        prices.classList.add("profile-price");
        prices.textContent = `${this.price}€/jour`;

        article.appendChild(card);
        card.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        card.appendChild(cardText);
        cardText.appendChild(location);
        cardText.appendChild(taglines);
        cardText.appendChild(prices);

        return article;
    }
}
