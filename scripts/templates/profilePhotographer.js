function photographerProfileTemplate(data, photographerName) {
    const { id, name, city, country, portrait, tagline, title, image, likes, video } = data;

    function getUserProfileCard() {
        // const picture = `assets/images/PhotographersIDPhotos/${portrait}`;

        // const article = document.createElement('article');
        //     article.classList.add("card-profile");

        // const cardContent = document.createElement('div');
        //     cardContent.classList.add("card-content");

        // const h2 = document.createElement('h2');
        //     h2.classList.add("profile-card-title");
        //     h2.textContent = name;
        //     h2.setAttribute("aria-label", name)

        // const cardText = document.createElement('div');
        //     cardText.classList.add("card-text");

        // const location = document.createElement('p');
        //     location.classList.add("profile-loc-text");

        // const tagline = document.createElement('p');
        //     tagline.classList.add("profile-tagline");

        // const img = document.createElement('img');
        //     img.classList.add("profile-img-big");
        //     img.setAttribute("src", picture);
        //     img.setAttribute("alt", `Portrait de ${name}`)
        //     img.setAttribute("aria-label", "Portrait de " + name)

        //     article.appendChild(cardContent);
        //     article.appendChild(h2);
        //     article.appendChild(cardText);
        //     article.appendChild(location);
        //     article.appendChild(tagline);
        //     article.appendChild(img)

        //     return (article)
    }

    function getMediasProfile() {
        const nameArray = photographerName.split(' ');
        const imageFolder = nameArray[0];

        const mediaVideo = `assets/images/${imageFolder}/${video}`;
        const mediaImage = `assets/images/${imageFolder}/${image}`;

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
                            <input class="likes" type="checkbox" tabindex="0" id='${id}' name ="likes" onclick="return onHeartCheckBox(event)"
                          onkeydown="return onHeartCheckBox(event)">
                            <label>${likes}</label>
                            <i class="fa-solid fa-heart" aria-label=”likes”></i>
                        </div>
                    </div>
                </div>
            </article>`;

            // const article = document.createElement('article');
            // article.classList.add("media-container");

            // const img = document.createElement('img');
            // img.classList.add("media-input");
            // img.setAttribute("src", mediaVideo);
            // img.setAttribute("alt", title);
            // img.setAttribute("aria-label", title)

            // const cardContent = document.createElement('div');
            // cardContent.classList.add("card-content-like");

            // const p = document.createElement('p');
            // p.textContent = title;
            // p.setAttribute("aria-label", title)



            // article.appendChild(img);
            // article.appendChild(cardContent);
            // article.appendChild(p);

            // return (article)

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
