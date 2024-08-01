function getLikesAndPrice(price, medias) {

    const totalLikes = document.querySelector('.total-likes')

    let likesNumber = 0;
    medias.forEach(element => {
        likesNumber += element.likes;
    });

    const article = document.createElement('article')

    const div = document.createElement('div');
    div.classList.add('total-likes-section')

    const divLikesAndIcon = document.createElement('div');
    divLikesAndIcon.classList.add('likes-and-icon')

    const span = document.createElement('span')
    span.classList.add('total-likes-number')
    span.textContent = likesNumber;

    const i = document.createElement('i');
    i.className = "fa-solid fa-heart";
    i.setAttribute('aria-label', 'likes')

    const priceText = document.createElement('div');
    priceText.textContent = `${price}€/jour`;


    totalLikes.appendChild(article)
    article.appendChild(div)
    div.appendChild(divLikesAndIcon)
    divLikesAndIcon.appendChild(span)
    divLikesAndIcon.appendChild(i)
    div.appendChild(priceText)

    return (article)
}

function updateLikes() {
    const likes = document.querySelectorAll('.media-container');

    likes.forEach(post => {
        const ratings = post.querySelectorAll(".likesAndIcon");

        ratings.forEach(rating => {

            const span = rating.querySelector('.image-like-number');
            const icon = rating.querySelector('.like-icon');

            icon.addEventListener("click", () => {
                ratings.forEach(rating => {
                    const totalLikesNumber = document.querySelector('.total-likes-number');

                    if (rating.classList.contains('post-like')) {
                        totalLikesNumber.textContent = Number(totalLikesNumber.textContent) - 1;
                        span.textContent = Number(span.textContent) - 1;
                        console.log(span.textContent)
                        console.log(totalLikesNumber.textContent)
                        rating.classList.remove('post-like')
                        console.log(rating.classList)
                    }
                        span.textContent = Number(span.textContent) + 1;
                        totalLikesNumber.textContent = Number(totalLikesNumber.textContent) + 1;
                        rating.classList.add('post-like')
                    })
                })
        })
    })
}
