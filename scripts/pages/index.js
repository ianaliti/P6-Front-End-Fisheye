
// Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
// mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

// Specify the API endpoint for user data
async function fetchData() {
    try {
        const response = await fetch('./data/photographers.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
} 

async function displayData(photographers) {
    const photographerSections = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const photographerProfil = photographerTemplate(photographer);
        const userCard = photographerProfil.getUserCardDOM();
        photographerSections.appendChild(userCard);

    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await fetchData();
    displayData(photographers);
}

init();
