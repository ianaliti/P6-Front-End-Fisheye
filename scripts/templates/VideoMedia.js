export class VideoMedia {
    constructor(data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
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

        const mediaElement = document.createElement('div');
        mediaElement.classList.add('media-container');

        const video = document.createElement('video');
        const source = document.createElement('source');
        source.src = `assets/images/${imageFolder}/${this.video}`;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.alt = this.title;
        video.setAttribute('aria-label', `Vidéo intitulée ${this.title}`);

        const mediaInfo = document.createElement('div');
        mediaInfo.classList.add('media-info');

        const titleElement = document.createElement('p');
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

        mediaElement.appendChild(video);
        mediaElement.appendChild(mediaInfo);

        return mediaElement;
    }
}
