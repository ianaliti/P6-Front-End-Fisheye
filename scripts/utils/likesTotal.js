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

    return(article)
}

const updateTotalLikes = () => {
    const totalLikesNumber = document.querySelector('.total-likes-number');
    // const imageLikeNumber = document.querySelectorAll('.image-like-number');
    totalLikesNumber.textContent = Number(totalLikesNumber.textContent) + 2;
    // imageLikeNumber.textContent = Number(imageLikeNumber.textContent) + 1;
    console.log('hi')

};

const incrementLikesNumber = (likeElement) => {
    likeElement.textContent = Number(likeElement.textContent) + 1;
    updateTotalLikes();
  
};

const updateLikes = () => {
    const likesIcons = document.querySelectorAll('.like-icon');
    likesIcons.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(element.parentElement.firstChild)
            incrementLikesNumber(element.parentElement.firstChild);
        });

        element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                incrementLikesNumber(element.parentElement.firstChild);          
            }
        });

        // const imageLikesIcon = document.querySelectorAll()
    });
}