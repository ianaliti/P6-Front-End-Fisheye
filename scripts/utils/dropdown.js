import { MediaFactory } from '../factories/MediaFactory.js';

// Handle dropdown and sorting logic
export const setDropdownList = (medias, photographerName) => {
    // Constants for key codes
    const SPACEBAR_KEY_CODE = [0, 32];
    const ENTER_KEY_CODE = 13;
    const DOWN_ARROW_KEY_CODE = 40;
    const UP_ARROW_KEY_CODE = 38;
    const ESCAPE_KEY_CODE = 27;

    const list = document.querySelector('.dropdown-list');
    const listContainer = document.querySelector('.dropdown-list-container');
    const dropdownArrow = document.querySelector('.fa-chevron-up');
    const listItems = document.querySelectorAll('.dropdown-button-value');
    const dropdownSelectedDOM = document.querySelector('#dropdown-selected');

    const listItemIds = [];
    dropdownSelectedDOM.addEventListener('click', e => toggleListVisibility(e));
    dropdownArrow.addEventListener('click', e => toggleListVisibility(e));
    dropdownSelectedDOM.addEventListener('keydown', e => toggleListVisibility(e));

    listItems.forEach(item => listItemIds.push(item.id));

    listItems.forEach(item => {
        item.addEventListener('click', e => {
            setSelectedListItem(e);
            closeList();
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

    function setSelectedListItem(e) {
        switch (e.target.id) {
            case 'option-1': sortByPopularity(medias); break;
            case 'option-2': sortByDateRecentToOld(medias); break;
            case 'option-3': sortByName(medias); break;
            default: break;
        }
        dropdownSelectedDOM.textContent = e.target.innerText;
    }

    function closeList() {
        list.classList.remove('open');
        dropdownArrow.classList.remove('expanded');
        listContainer.setAttribute('aria-expanded', false);
    }

    function toggleListVisibility(e) {
        let openDropDown = SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;

        if (e.keyCode === ESCAPE_KEY_CODE) closeList();

        if (e.type === 'click' || openDropDown) {
            list.classList.toggle('open');
            dropdownArrow.classList.toggle('expanded');
            listContainer.setAttribute('aria-expanded', list.classList.contains('open'));
        }

        if (e.keyCode === DOWN_ARROW_KEY_CODE) focusNextListItem(DOWN_ARROW_KEY_CODE);
        if (e.keyCode === UP_ARROW_KEY_CODE) focusNextListItem(UP_ARROW_KEY_CODE);
    }

    function focusNextListItem(direction) {
        const activeElementId = document.activeElement.id;
        if (activeElementId === 'dropdown-selected') {
            document.querySelector(`#${listItemIds[0]}`).focus();
        } else {
            const currentActiveElementIndex = listItemIds.indexOf(activeElementId);
            if (direction === DOWN_ARROW_KEY_CODE && currentActiveElementIndex < listItemIds.length - 1) {
                document.querySelector(`#${listItemIds[currentActiveElementIndex + 1]}`).focus();
            } else if (direction === UP_ARROW_KEY_CODE && currentActiveElementIndex > 0) {
                document.querySelector(`#${listItemIds[currentActiveElementIndex - 1]}`).focus();
            }
        }
    }

    function sortByName(photographerMedias) {
        photographerMedias.sort((a, b) => a.title.localeCompare(b.title));
        renderMedias(photographerMedias, photographerName);
    }

    function sortByPopularity(photographerMedias) {
        photographerMedias.sort((a, b) => b.likes - a.likes);
        renderMedias(photographerMedias, photographerName);
    }

    function sortByDateRecentToOld(photographerMedias) {
        photographerMedias.sort((a, b) => new Date(b.date) - new Date(a.date));
        renderMedias(photographerMedias, photographerName);
    }

    function renderMedias(medias, photographerName) {
        const mediaContainer = document.querySelector('.medias');
        mediaContainer.innerHTML = '';
        const mediaFactory = new MediaFactory();
        medias.forEach(media => {
            const mediaComponent = mediaFactory.createComponent(media.image ? "image" : "video", media);
            const mediaDOM = mediaComponent.getMediaDOM();
            mediaContainer.appendChild(mediaDOM);
        });
    }
};
