// Handle total likes and like updates
export function getLikesAndPrice(price, medias) {
    const totalLikes = document.querySelector('.total-likes');
    let likesNumber = medias.reduce((total, media) => total + media.likes, 0);

    const article = document.createElement('article');
    const div = document.createElement('div');
    div.classList.add('total-likes-section');

    const divLikesAndIcon = document.createElement('div');
    divLikesAndIcon.classList.add('likes-and-icon');

    const span = document.createElement('span');
    span.classList.add('total-likes-number');
    span.textContent = likesNumber;

    const i = document.createElement('i');
    i.className = "fa-solid fa-heart";
    i.setAttribute('aria-label', 'likes');

    const priceText = document.createElement('div');
    priceText.textContent = `${price}€/jour`;

    divLikesAndIcon.appendChild(span);
    divLikesAndIcon.appendChild(i);
    div.appendChild(divLikesAndIcon);
    div.appendChild(priceText);
    article.appendChild(div);
    totalLikes.appendChild(article);

    return article;
}

export function updateLikes() {
    const likes = document.querySelectorAll('.media-container');
    likes.forEach(post => {
        const ratings = post.querySelectorAll(".likesAndIcon");
        ratings.forEach(rating => {
            const span = rating.querySelector('.image-like-number');
            const icon = rating.querySelector('.like-icon');

            icon.addEventListener("click", () => handleLike(rating, span));
            icon.addEventListener("keyup", (event) => {
                if (event.key === "Enter") handleLike(rating, span);
            });
        });
    });
}

function handleLike(rating, span) {
    const totalLikesNumber = document.querySelector('.total-likes-number');
    if (rating.classList.contains('post-like')) {
        totalLikesNumber.textContent = Number(totalLikesNumber.textContent) - 1;
        span.textContent = Number(span.textContent) - 1;
        rating.classList.remove('post-like');
    } else {
        span.textContent = Number(span.textContent) + 1;
        totalLikesNumber.textContent = Number(totalLikesNumber.textContent) + 1;
        rating.classList.add('post-like');
    }
}


