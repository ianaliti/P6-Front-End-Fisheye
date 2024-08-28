import { MediaFactory } from '../factories/MediaFactory.js';
import { Lightbox } from './lightbox.js';

// Handle dropdown and sorting logic
export const setDropdownList = (medias, photographerName) => {
    // Constants for key codes
    const SPACEBAR_KEY_CODE = [0, 32];
    const ENTER_KEY_CODE = 13;
    const DOWN_ARROW_KEY_CODE = 40;
    const UP_ARROW_KEY_CODE = 38;
    const ESCAPE_KEY_CODE = 27;

    // Get DOM elements related to the dropdown
    const list = document.querySelector('.dropdown-list');
    const listContainer = document.querySelector('.dropdown-list-container');
    const dropdownArrow = document.querySelector('.fa-chevron-up');
    const listItems = document.querySelectorAll('.dropdown-button-value');
    const dropdownSelectedDOM = document.querySelector('#dropdown-selected');

    const listItemIds = []; // Array to store IDs of dropdown items

    // Event listeners to handle opening and closing the dropdown
    dropdownSelectedDOM.addEventListener('click', e => toggleListVisibility(e));
    dropdownArrow.addEventListener('click', e => toggleListVisibility(e));
    dropdownSelectedDOM.addEventListener('keydown', e => toggleListVisibility(e));

    // Collect IDs of all list items
    listItems.forEach(item => listItemIds.push(item.id));

    // Event listeners for each list item
    listItems.forEach(item => {
        item.addEventListener('click', e => {
            setSelectedListItem(e); // Handle selection
            closeList(); // Close the dropdown
        });

        item.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case ENTER_KEY_CODE:
                    setSelectedListItem(e);
                    closeList();
                    break;
                case DOWN_ARROW_KEY_CODE:
                    focusNextListItem(DOWN_ARROW_KEY_CODE);
                    break;
                case UP_ARROW_KEY_CODE:
                    focusNextListItem(UP_ARROW_KEY_CODE);
                    break;
                case ESCAPE_KEY_CODE:
                    closeList();
                    break;
                default:
                    break;
            }
        });
    });

    // Function to handle the selection of a dropdown item
    function setSelectedListItem(e) {
        const selectedItemText = e.target.textContent; // Get text of selected item
        dropdownSelectedDOM.textContent = selectedItemText; // Update dropdown to show selected item

        // Sort medias based on the selected option
        switch (e.target.id) {
            case 'option-1': // Sort by popularity
                sortByPopularity(medias);
                break;
            case 'option-2': // Sort by date (recent to old)
                sortByDateRecentToOld(medias);
                break;
            case 'option-3': // Sort by name (alphabetical order)
                sortByName(medias);
                break;
            default:
                break;
        }
    }

    // Sorting functions
    function sortByName(photographerMedias) {
        photographerMedias.sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title
        renderMedias(photographerMedias, photographerName); // Render sorted medias
    }

    function sortByPopularity(photographerMedias) {
        photographerMedias.sort((a, b) => b.likes - a.likes); // Sort by number of likes (most to least)
        renderMedias(photographerMedias, photographerName); // Render sorted medias
    }

    function sortByDateRecentToOld(photographerMedias) {
        photographerMedias.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (recent to old)
        renderMedias(photographerMedias, photographerName); // Render sorted medias
    }

    // Function to toggle the visibility of the dropdown list
    function toggleListVisibility(e) {
        let openDropDown = SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;

        if (e.keyCode === ESCAPE_KEY_CODE) closeList();

        if (e.type === 'click' || openDropDown) {
            list.classList.toggle('open');
            dropdownArrow.classList.toggle('expanded');
            listContainer.setAttribute('aria-expanded', list.classList.contains('open'));
        }

        // Handle arrow key navigation within the dropdown
        if (e.keyCode === DOWN_ARROW_KEY_CODE) focusNextListItem(DOWN_ARROW_KEY_CODE);
        if (e.keyCode === UP_ARROW_KEY_CODE) focusNextListItem(UP_ARROW_KEY_CODE);
    }

    // Function to focus on the next list item in the dropdown
    function focusNextListItem(direction) {
        const activeElementId = document.activeElement.id;
        if (activeElementId === 'dropdown-selected') {
            document.querySelector(`#${listItemIds[0]}`).focus(); // Focus on the first item if dropdown is selected
        } else {
            const currentActiveElementIndex = listItemIds.indexOf(activeElementId);
            // Move focus to the next or previous item in the list
            if (direction === DOWN_ARROW_KEY_CODE && currentActiveElementIndex < listItemIds.length - 1) {
                document.querySelector(`#${listItemIds[currentActiveElementIndex + 1]}`).focus();
            } else if (direction === UP_ARROW_KEY_CODE && currentActiveElementIndex > 0) {
                document.querySelector(`#${listItemIds[currentActiveElementIndex - 1]}`).focus();
            }
        }
    }

    // Function to close the dropdown list
    function closeList() {
        list.classList.remove('open');
        dropdownArrow.classList.remove('expanded');
        listContainer.setAttribute('aria-expanded', false);
    }

    // Function to attach like button event listeners
    function attachLikeListeners() {
        const likeIcons = document.querySelectorAll('.like-icon');

        likeIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const likeCountSpan = icon.previousElementSibling;
                let likeCount = parseInt(likeCountSpan.textContent, 10);

                if (icon.classList.contains('liked')) {
                    // If already liked, decrease the like count
                    likeCount -= 1;
                    icon.classList.remove('liked');
                } else {
                    // Increase the like count
                    likeCount += 1;
                    icon.classList.add('liked');
                }

                likeCountSpan.textContent = likeCount;
                updateTotalLikes(); // Recalculate and update the total likes
            });
        });
    }

    // Function to update the total number of likes displayed
    function updateTotalLikes() {
        const totalLikesElement = document.querySelector('.total-likes-number');
        const likeCountSpans = document.querySelectorAll('.image-like-number');
        let totalLikes = 0;

        likeCountSpans.forEach(span => {
            totalLikes += parseInt(span.textContent, 10);
        });

        totalLikesElement.textContent = totalLikes; // Update the total likes displayed
    }

    function renderMedias(medias, photographerName) {
        const mediaContainer = document.querySelector('.medias');
        mediaContainer.innerHTML = ''; // Clear existing media items
        
        if (!photographerName) {
            console.error("Photographer name is undefined in renderMedias function");
            return;
        }
        
        const mediaFactory = new MediaFactory();
        medias.forEach(media => {
            const mediaComponent = mediaFactory.createComponent(media.image ? "image" : "video", media);
            const mediaDOM = mediaComponent.getMediaDOM(photographerName);
            if (mediaDOM) {
                mediaContainer.appendChild(mediaDOM);
            } else {
                console.error(`Failed to create media DOM for media ID ${media.id}`);
            }
        });
    
        attachLikeListeners(); // Reattach like event listeners after rendering
        updateTotalLikes(); // Recalculate and update the total likes after rendering
        
        // After rendering new media, reinitialize the Lightbox
        const lightbox = new Lightbox(); // Create a new Lightbox instance
        lightbox.updateMediaElements(); // Ensure Lightbox functionality is applied to newly rendered elements
    }
     
    
};
