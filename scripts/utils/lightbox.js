export class Lightbox {
    constructor() {
        this.mediaElements = []; // Array to hold media elements
        this.modalLightbox = document.querySelector(".modal-img");
        this.modalImg = document.querySelector(".modalImg");
        this.modalVideo = document.querySelector(".modalVideo");
        this.modalTxt = document.querySelector(".modalTxt");
        this.close = document.querySelector(".close");
        this.prevBtn = document.querySelector(".back");
        this.nextBtn = document.querySelector(".next");

        this.currentIndex = 0;

        this.init();
    }

    init() {
        this.updateMediaElements();

        this.close.addEventListener("click", () => this.closeModal());

        // Global keyup event for arrow navigation and closing the lightbox
        window.addEventListener("keyup", (e) => {
            if (this.modalLightbox.classList.contains("appear")) {
                this.handleKeyUp(e);
            }
        });
    }

    updateMediaElements() {
        // Select all media elements (images and videos)
        this.mediaElements = document.querySelectorAll('.media-container img, .media-container video');
        
        this.mediaElements.forEach((media, index) => {
            // Add tabindex to ensure media elements are focusable
            media.setAttribute("tabindex", "0");

            // Add click event to open the media in the lightbox
            media.addEventListener("click", () => {
                this.showMedia(index);
            });

            // Add keydown event to open the media on Enter key
            media.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault(); // Prevent default action
                    this.showMedia(index);
                }
            });
        });
    }

    showMedia(index) {
        this.currentIndex = index;
        const media = this.mediaElements[index];

        if (media.tagName === 'IMG') {
            this.modalImg.src = media.src;
            this.modalImg.style.display = 'block';
            this.modalVideo.style.display = 'none';
        } else if (media.tagName === 'VIDEO') {
            this.modalVideo.src = media.src;
            this.modalVideo.style.display = 'block';
            this.modalImg.style.display = 'none';
        }

        this.modalTxt.textContent = media.title || media.alt;
        this.modalLightbox.classList.add("appear");

        // Set focus to the modal for capturing further key events
        this.modalLightbox.focus();
    }

    showPreviousMedia() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.mediaElements.length - 1;
        this.showMedia(this.currentIndex);
    }

    showNextMedia() {
        this.currentIndex = (this.currentIndex < this.mediaElements.length - 1) ? this.currentIndex + 1 : 0;
        this.showMedia(this.currentIndex);
    }

    handleKeyUp(e) {
        switch (e.keyCode) {
            case 37: // Left arrow key
                this.showPreviousMedia();
                break;
            case 39: // Right arrow key
                this.showNextMedia();
                break;
            case 27: // Escape key
                this.closeModal();
                break;
        }
    }

    closeModal() {
        this.modalLightbox.classList.remove("appear");
        this.modalVideo.pause();  // Pause video when closing the modal
    }
}
