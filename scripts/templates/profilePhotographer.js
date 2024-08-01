function photographerProfileTemplate(data, photographerName) {
    const { id, name, city, country, portrait, tagline, title, image, likes, video } = data;

    console.log(data)

    function getUserProfileCard() {
        const picture = `assets/images/PhotographersIDPhotos/${portrait}`;

        const divImage = document.querySelector('.image-profile');

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
        img.setAttribute("alt", `Portrait de ${name}`)
        img.setAttribute("aria-label", "Portrait de " + name)

        article.appendChild(cardContent);
        cardContent.appendChild(h2);
        article.appendChild(cardText);
        cardText.appendChild(location);
        cardText.appendChild(taglines);
        divImage.appendChild(img)

        return (article)
    }

    function getMediasProfile() {
        const nameArray = photographerName.split(' ');
        const imageFolder = nameArray[0];

        const article = document.createElement('article');
        article.classList.add('media-container');
        article.setAttribute('data-post-id', id)

        let videoVSImage;

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
        i.setAttribute("aria-label", "bouton pour liker le média");
        i.setAttribute("role", "button");
        i.setAttribute("tabindex", "0");

        article.appendChild(videoVSImage);
        article.appendChild(cardContent);
        cardContent.appendChild(p)
        cardContent.appendChild(like)
        like.appendChild(span)
        like.appendChild(i)

        return (article)

    }

    const images = document.querySelectorAll('.media-container img')
    const modalLightbox = document.querySelector(".modal-img");
    const modalImg = document.querySelector(".modalImg");
    const modalTxt = document.querySelector(".modalTxt");
    const close = document.querySelector(".close");
    const prevBtn = document.querySelector(".back");
    const nextBtn = document.querySelector(".next");

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            modalImg.src = image.src;
            modalTxt.innerHTML = image.alt;
            modalLightbox.classList.add("appear");

            let imageIndex = index;
            let next = imageIndex++;
            let prev = imageIndex--;

            window.addEventListener("keyup", (e) => {
                if (next >= images.length) {
                    next = 0;
                } else if (prev < 0) {
                    prev = images.length - 1;
                }

                if (e.keyCode === 37) {
                    modalImg.src = images[prev].src;
                    modalTxt.innerHTML = images[prev].alt;
                    prev--;
                    next = prev + 2;
                } else if (e.keyCode === 39) {
                    modalImg.src = images[next].src;
                    modalTxt.innerHTML = images[next].alt;
                    next++;
                    prev = next - 2;
                } else if (e.keyCode === 27) {
                    modalLightbox.classList.remove("appear");
                }
            });

            prevBtn.addEventListener("click", () => {
                modalImg.src = images[prev].src;
                modalTxt.innerHTML = images[prev].alt;
                prev--;
                next = prev + 2;
            });

            nextBtn.addEventListener("click", () => {
                modalImg.src = images[next].src;
                modalTxt.innerHTML = images[next].alt;
                next++;
                prev = next - 2;
            });

            close.addEventListener("click", () => {
                modalLightbox.classList.remove("appear");
            });
        });
    });

    return { id, name, city, country, portrait, tagline, title, image, likes, video, getUserProfileCard, getMediasProfile, getLikesAndPrice }
}

