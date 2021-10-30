const searchBarHandler = async (event) => {
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value.trim();
    const searchCategory = document.querySelector('.search-category').value.trim();

    if ( searchInput && (searchCategory == '1')) { //Artist
        const response = await fetch(`api/artist/${searchInput}`, {
            method: 'GET',
        })

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace(`artistprofile/${searchInput}`);
          } else {
            alert(response.statusText);
          }
    }

    if ( searchInput && (searchCategory == '2')) { //Art
        const response = await fetch(`api/art/${searchInput}`, {
            method: 'GET',
        })

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace(`search-results/${searchInput}`);
          } else {
            alert(response.statusText);
          }
    }
}
document
  .querySelector('.searchbutton')
  .addEventListener('click', searchBarHandler);