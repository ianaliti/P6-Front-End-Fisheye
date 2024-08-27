export class ImageMedia {
    constructor(data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.likes = data.likes;
        this.date = data.date;
    }

    getMediaDOM(photographerName) {
        if (!photographerName) {
            console.error("Photographer name is undefined");
            return null;
        }

        const nameArray = photographerName.split(' ');
        const imageFolder = nameArray[0];

        const mediaElement = document.createElement('div');
        mediaElement.classList.add('media-container');
        mediaElement.setAttribute('tabindex', '0'); // Make the media element focusable

        const img = document.createElement('img');
        img.src = `assets/images/${imageFolder}/${this.image}`;
        img.alt = `image nommée ${this.title}`;
        img.title = this.title;
        img.setAttribute('aria-label', `Photo intitulée ${this.title}`);
        img.setAttribute("tabindex", "0");

        // Keyboard interaction for opening lightbox
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                img.click(); // Trigger click to open lightbox
            }
        });

        const mediaInfo = document.createElement('div');
        mediaInfo.classList.add('media-info');

        const titleElement = document.createElement('h4');
        titleElement.textContent = this.title;

        const likeContainer = document.createElement('div');
        likeContainer.classList.add('likesAndIcon');

        const likeCount = document.createElement('span');
        likeCount.classList.add('image-like-number');
        likeCount.textContent = this.likes;
        likeCount.setAttribute('aria-label', `${this.likes} j'aime`);

        const likeIcon = document.createElement('i');
        likeIcon.className = "fa-solid fa-heart like-icon";
        likeIcon.setAttribute("aria-label", "Aimer ce média");
        likeIcon.setAttribute("role", "button");
        likeIcon.setAttribute("tabindex", "0");

        likeContainer.appendChild(likeCount);
        likeContainer.appendChild(likeIcon);

        mediaInfo.appendChild(titleElement);
        mediaInfo.appendChild(likeContainer);

        mediaElement.appendChild(img);
        mediaElement.appendChild(mediaInfo);

        return mediaElement;
    }
}
