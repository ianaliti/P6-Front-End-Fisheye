//Function to build the photographer's header with his information.
function photographerProfileTemplate(data, photographerName) {

    // Destructures the photographer's data
    const { id, name, city, country, portrait, tagline, title, image, likes, video } = data;

    function getUserProfileCard() {
        const picture = `assets/images/PhotographersIDPhotos/${portrait}`;

        // Retrieve photographer information from DOM
        const divImage = document.querySelector('.image-profile');

        //Create DOM elements and set attributes
        const article = document.createElement('article');
        article.classList.add("card-profile");

        const cardContent = document.createElement('div');
        cardContent.classList.add("card-content");

        const h2 = document.createElement('h2');
        h2.classList.add("profile-card-title");
        h2.textContent = name;
        h2.setAttribute("aria-label", name)

        const cardText = document.createElement('div');
        cardText.classList.add("card-profile-text");

        const location = document.createElement('p');
        location.classList.add("profile-loc-text");
        location.textContent = `${city}, ${country}`;

        const taglines = document.createElement('p');
        taglines.classList.add("profile-tagline");
        taglines.textContent = tagline;

        const img = document.createElement('img');
        img.classList.add("profile-img-big");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait of ${name}`)
        img.setAttribute("aria-label",` Portrait of ${name}`)

        // Add the items with the header photograther's information to the article
        article.appendChild(cardContent);
        cardContent.appendChild(h2);
        article.appendChild(cardText);
        cardText.appendChild(location);
        cardText.appendChild(taglines);
        divImage.appendChild(img)

        return (article)
    }

    //Function to build the template of a media.
    function getMediasProfile() {
        const nameArray = photographerName.split(' ');
        const imageFolder = nameArray[0];

        //Create DOM elements and set attributes
        const article = document.createElement('article');
        article.classList.add('media-container');
        article.setAttribute('data-post-id', id)

        let videoVSImage;

        // Checks if it is a video or an image and constructs the corresponding element
        if (image) {
            const media = document.createElement('div');
            media.classList.add('media')

            const imagePath = `assets/images/${imageFolder}/${image}`;
            videoVSImage = document.createElement('img');
            videoVSImage.setAttribute('src', imagePath);
            videoVSImage.setAttribute('alt', title);
        } else {
            const videoPath = `assets/images/${imageFolder}/${video}`;
            videoVSImage = document.createElement('video');
            videoVSImage.setAttribute('alt', title)
            const source = document.createElement('source');
            source.setAttribute('src', videoPath);
            source.setAttribute('type', 'video/mp4');
            videoVSImage.appendChild(source);
        }

        videoVSImage.setAttribute('tabindex', 0)

        // Create a container for the media content
        const cardContent = document.createElement('div');
        cardContent.classList.add("card-content-like")

        const p = document.createElement('p');
        p.textContent = title;

        const like = document.createElement('div')
        like.classList.add('likesAndIcon')

        let span = document.createElement('span')
        span.classList.add('image-like-number')
        span.textContent = likes;

        const i = document.createElement('i');
        i.className = "fa-solid fa-heart like-icon";
        i.setAttribute("aria-label", "button to like the media");
        i.setAttribute("role", "button");
        i.setAttribute("tabindex", "0");

        // Add the items to the article 
        article.appendChild(videoVSImage);
        article.appendChild(cardContent);
        // Add the items to the content card 
        cardContent.appendChild(p)
        cardContent.appendChild(like)
        // Add the items to the like div
        like.appendChild(span)
        like.appendChild(i)

        return (article)

    }

     // Retrieve photographer information from DOM
    // Select all image elements within the media container
const images = document.querySelectorAll('.media-container img');

// Select modal elements
const modalLightbox = document.querySelector(".modal-img");  // The modal container
const modalImg = document.querySelector(".modalImg");        // The image element inside the modal
const modalTxt = document.querySelector(".modalTxt");        // The text element inside the modal
const close = document.querySelector(".close");              // The close button for the modal
const prevBtn = document.querySelector(".back");             // The previous button for navigation
const nextBtn = document.querySelector(".next");             // The next button for navigation

// Add click event listener to each image
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Show the clicked image in the modal
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modalLightbox.classList.add("appear");

        // Initialize indices for navigation
        let currentIndex = index;
        let nextIndex = currentIndex + 1;
        let prevIndex = currentIndex - 1;

        // Handle keyup events for navigation and closing
        window.addEventListener("keyup", (e) => {
            // Wrap around indices for circular navigation
            if (nextIndex >= images.length) {
                nextIndex = 0;
            }
            if (prevIndex < 0) {
                prevIndex = images.length - 1;
            }

            // Left arrow key (37) for previous image
            if (e.keyCode === 37) {
                modalImg.src = images[prevIndex].src;
                modalTxt.innerHTML = images[prevIndex].alt;
                prevIndex--;
                nextIndex = prevIndex + 1;
            }
            // Right arrow key (39) for next image
            else if (e.keyCode === 39) {
                modalImg.src = images[nextIndex].src;
                modalTxt.innerHTML = images[nextIndex].alt;
                nextIndex++;
                prevIndex = nextIndex - 2;
            }
            // Escape key (27) to close the modal
            else if (e.keyCode === 27) {
                modalLightbox.classList.remove("appear");
            }
        });

        // Handle previous button click
        prevBtn.addEventListener("click", () => {
            modalImg.src = images[prevIndex].src;
            modalTxt.innerHTML = images[prevIndex].alt;
            prevIndex--;
            nextIndex = prevIndex + 1;
        });

        // Handle next button click
        nextBtn.addEventListener("click", () => {
            modalImg.src = images[nextIndex].src;
            modalTxt.innerHTML = images[nextIndex].alt;
            nextIndex++;
            prevIndex = nextIndex - 2;
        });

        // Handle close button click
        close.addEventListener("click", () => {
            modalLightbox.classList.remove("appear");
        });
    });
});


    return { id, name, city, country, portrait, tagline, title, image, likes, video, getUserProfileCard, getMediasProfile, getLikesAndPrice }
}

