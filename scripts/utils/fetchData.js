// Fetches data from the photographers JSON file
export async function fetchData() {
    try {
        const response = await fetch('./data/photographers.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Fetch specific photographer by ID
export async function getPhotographerById(id) {
    const data = await fetchData();
    if (data && data.photographers) {
        return data.photographers.find(photographer => photographer.id === Number(id));
    }
    return null;
}

// Fetch media items for a specific photographer by ID
export async function getMediasById(id) {
    const data = await fetchData();
    if (data && data.media) {
        return data.media.filter(media => media.photographerId === Number(id));
    }
    return [];
}
