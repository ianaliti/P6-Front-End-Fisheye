// Function to build the display of the total likes and the price of the photographer.
function getLikesAndPrice(price, medias) {

    // Retrieve photographer information from DOM
    const totalLikes = document.querySelector('.total-likes');

    // Calculate the total number of likes from the media
    let likesNumber = 0;
    medias.forEach(element => {
        likesNumber += element.likes;
    });

    // Create DOM elements and set attributes
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

    // Add the items to the div 
    totalLikes.appendChild(article);
    // Add the items to the article 
    article.appendChild(div);
    // Add the items to div with likes and price
    div.appendChild(divLikesAndIcon);
    // Add the icon and number to the article 
    divLikesAndIcon.appendChild(span);
    divLikesAndIcon.appendChild(i);
    // Add the price 
    div.appendChild(priceText);

    return article;
}

// Function to update the total number of likes.
function updateLikes() {
    const likes = document.querySelectorAll('.media-container');

    likes.forEach(post => {
        const ratings = post.querySelectorAll(".likesAndIcon");

        ratings.forEach(rating => {
            const span = rating.querySelector('.image-like-number');
            const icon = rating.querySelector('.like-icon');

            // Click event to increment/decrement likes
            icon.addEventListener("click", () => {
                handleLike(rating, span);
            });

            // Keyup event for incrementing likes using the Enter key
            icon.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    handleLike(rating, span);
                }
            });
        });
    });
}

// Helper function to handle like logic
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