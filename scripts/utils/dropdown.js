
const button = document.querySelector('.button-dropdown');
const selectOption = document.querySelector('#dropdown');
const options = document.querySelectorAll('.option');


button.addEventListener('click', function(e) {
    e.preventDefault();
    toggleHidden()
})

function toggleHidden() {
    selectOption.classList.toggle('hidden');
}

options.forEach((option) => {
    option.addEventListener('click', function() {
        sortObjectsById()
    })
})


function sortObjectsById() {
    const selectElement = document.getElementById("sort-menu");
    const selectedOption = selectElement.value;
  
    if (selectedOption === 'title') {
      const reg = /[0-9]+/g;
      sortObjects = objects.sort((a, b) => {
        const titleA = a[property].replace(reg, '');
        const titleATrim = titleA.trim();
        const titleB = b[property].replace(reg, '');
        const titleBTrim = titleB.trim();
        return titleATrim.localeCompare(titleBTrim);
      });
    } else if (selectedOption === 'dates') {
      sortObjects = objects.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      sortObjects = objects.sort((a, b) => b[property] - a[property]);
    }
    return sortObjects;
  }
  