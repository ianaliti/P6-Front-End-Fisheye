// Class representing a photographer's profile on the photographer page
export class PhotographerProfile {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.city = data.city;
        this.country = data.country;
        this.portrait = data.portrait;
        this.tagline = data.tagline;
    }

    getUserProfileCard() {
        const picture = `assets/images/PhotographersIDPhotos/${this.portrait}`;
        const divImage = document.querySelector('.image-profile');

        const article = document.createElement('article');
        article.classList.add("card-profile");

        const cardContent = document.createElement('div');
        cardContent.classList.add("card-content");

        const h2 = document.createElement('h2');
        h2.classList.add("profile-card-title");
        h2.textContent = this.name;
        h2.setAttribute("aria-label", this.name);

        const cardText = document.createElement('div');
        cardText.classList.add("card-profile-text");

        const location = document.createElement('p');
        location.classList.add("profile-loc-text");
        location.textContent = `${this.city}, ${this.country}`;

        const taglines = document.createElement('p');
        taglines.classList.add("profile-tagline");
        taglines.textContent = this.tagline;

        const img = document.createElement('img');
        img.classList.add("profile-img-big");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait of ${this.name}`);
        img.setAttribute("aria-label", `Portrait of ${this.name}`);

        article.appendChild(cardContent);
        cardContent.appendChild(h2);
        article.appendChild(cardText);
        cardText.appendChild(location);
        cardText.appendChild(taglines);
        divImage.appendChild(img);

        return article;
    }
}
