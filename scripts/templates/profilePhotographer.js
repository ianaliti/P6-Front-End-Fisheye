function photographerProfileTemplate(data, photographerName) {
    const { id, name, city, country, portrait, tagline, title, image, likes, video } = data;

    function getUserProfileCard() {
        let cardHtmlModel = `
                        <article class="card-profile">
                            <div class="card-content">
                                <h2 class="profile-card-title">${name}</h2>
                                </a>
                            <div class="card-text">
                               <p class="profile-loc-text">${city}, ${country}</p>
                                <p class="profile-tagline">${tagline}</p>
                            </div> 
                            </div>
                             <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                            <div>
                                <img src="assets/images/PhotographersIDPhotos/${portrait}" class="profile-img-big">
                            </div>
                            </div>
                        </article>`;

        const photographersSection = document.querySelector(".photographer_section");
        photographersSection.insertAdjacentHTML('beforebegin', cardHtmlModel)
    }

    function getMediasProfile() {
        const nameArray = photographerName.split(' ');
        const imageFolder = nameArray[0];
        let cardHtmlModelProfile = ``;

        if (video) {
            cardHtmlModelProfile = `
                <article class='media-container'> 
                    <div class='media'>
                        <video class='media-input'>
                        <source type="video/mp4" src="./assets/images/${imageFolder}/${video}" alt='video named ${title} made by photographer ${photographerName}'>
                        </video>
                        <div class='card-content-like'>
                        <p>${title}</p>
                        <div>
                            <span class='likes'>${likes}</span>
                            <i class="fa-solid fa-heart" aria-label=”likes”></i>
                        </div>
                    </div>
                    </div>
                </article>`
        } else {
            cardHtmlModelProfile = `
            <article class='media-container'>
                <div class='media'>
                    <img src="./assets/images/${imageFolder}/${image}" class='media-input' alt='${title}'>
                    <div class='card-content-like'>
                        <p>${title}</p>
                        <div>
                            <span class='likes'>${likes}</span>
                            <i class="fa-solid fa-heart" aria-label=”likes”></i>
                        </div>
                    </div>
                </div>
            </article>`;
        }

        const images = document.querySelectorAll('.media img')
        const modal = document.querySelector(".modal-img");
        const modalImg = document.querySelector(".modalImg");
        const modalTxt = document.querySelector(".modalTxt");
        const close = document.querySelector(".close");
        const prevBtn = document.querySelector(".back");
        const nextBtn = document.querySelector(".next");

        images.forEach((image, index) => {
            image.addEventListener("click", () => {
                modalImg.src = image.src;
                console.log(image.src);
                modalTxt.innerHTML = image.alt;
                modal.classList.add("appear");

                let imageIndex = index;
                let next = imageIndex++;
                let prev = imageIndex--;

                window.addEventListener("keyup", (e) => {
                    /*if (next >= images.length) {
                            next = 0;
                          } else if (prev < 0) {
                            prev = images.length - 1;
                          }*/

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
                        modal.classList.remove("appear");
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
                    modal.classList.remove("appear");
                });
            });
        });
        const photographersSection = document.querySelector(".medias");
        photographersSection.insertAdjacentHTML('beforebegin', cardHtmlModelProfile)
    }
    return { id, name, city, country, portrait, tagline, title, image, likes, video, getUserProfileCard, getMediasProfile }
}
