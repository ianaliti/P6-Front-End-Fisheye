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
            return null; // Early return if photographerName is undefined
        }

        const nameArray = photographerName.split(' ');
        const imageFolder = nameArray[0]; // Assuming the folder name matches the first name of the photographer

        // Create the container element for the media
        const mediaElement = document.createElement('div');
        mediaElement.classList.add('media-container');

        // Create the image element
        const img = document.createElement('img');
        img.src = `assets/images/${imageFolder}/${this.image}`;
        img.alt = this.title;
        img.setAttribute('aria-label', `Photo intitulée ${this.title}`);

        // Create the container for media info
        const mediaInfo = document.createElement('div');
        mediaInfo.classList.add('media-info');

        // Add the title element
        const titleElement = document.createElement('p');
        titleElement.textContent = this.title;

        // Create the container for the like button and count
        const likeContainer = document.createElement('div');
        likeContainer.classList.add('likesAndIcon');

        // Add the like count
        const likeCount = document.createElement('span');
        likeCount.classList.add('image-like-number');
        likeCount.textContent = this.likes;
        likeCount.setAttribute('aria-label', `${this.likes} j'aime`);

        // Add the like icon
        const likeIcon = document.createElement('i');
        likeIcon.className = "fa-solid fa-heart like-icon";
        likeIcon.setAttribute("aria-label", "aimer ce média");
        likeIcon.setAttribute("role", "button");
        likeIcon.setAttribute("tabindex", "0");

        // Append like count and icon to the like container
        likeContainer.appendChild(likeCount);
        likeContainer.appendChild(likeIcon);

        // Append title and like container to the media info container
        mediaInfo.appendChild(titleElement);
        mediaInfo.appendChild(likeContainer);

        // Append the image and media info to the media element
        mediaElement.appendChild(img);
        mediaElement.appendChild(mediaInfo);

        return mediaElement;
    }
}
