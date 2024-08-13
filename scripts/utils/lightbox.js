// Lightbox class to handle image previews in a modal
export class Lightbox {
    constructor() {
        this.images = document.querySelectorAll('.media-container img');
        this.modalLightbox = document.querySelector(".modal-img");
        this.modalImg = document.querySelector(".modalImg");
        this.modalTxt = document.querySelector(".modalTxt");
        this.close = document.querySelector(".close");
        this.prevBtn = document.querySelector(".back");
        this.nextBtn = document.querySelector(".next");

        this.currentIndex = 0;

        this.init();
    }

    init() {
        this.images.forEach((image, index) => {
            image.addEventListener("click", () => {
                this.showImage(index);
            });
        });

        this.close.addEventListener("click", () => this.closeModal());
        window.addEventListener("keyup", (e) => this.handleKeyUp(e));
        this.prevBtn.addEventListener("click", () => this.showPreviousImage());
        this.nextBtn.addEventListener("click", () => this.showNextImage());
    }

    showImage(index) {
        this.currentIndex = index;
        const image = this.images[index];
        this.modalImg.src = image.src;
        this.modalTxt.textContent = image.alt;
        this.modalLightbox.classList.add("appear");
    }

    showPreviousImage() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
        this.showImage(this.currentIndex);
    }

    showNextImage() {
        this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
        this.showImage(this.currentIndex);
    }

    handleKeyUp(e) {
        switch (e.keyCode) {
            case 37: // Left arrow key
                this.showPreviousImage();
                break;
            case 39: // Right arrow key
                this.showNextImage();
                break;
            case 27: // Escape key
                this.closeModal();
                break;
        }
    }

    closeModal() {
        this.modalLightbox.classList.remove("appear");
    }
}
