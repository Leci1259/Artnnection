const searchBarHandler = async (event) => {
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value.trim();
    const searchCategory = document.querySelector('.search-category').value.trim();

    if ( searchInput && (searchCategory == 'Artist')) {
        const response = await fetch('api/user/', {
            method: 'GET',
        })

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/user/checkout');
          } else {
            alert(response.statusText);
          }
    }

    if ( searchInput && (searchCategory == 'Art')) {
        const response = await fetch('api/art/', {
            method: 'GET',
        })

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/user/checkout');
          } else {
            alert(response.statusText);
          }
    }
}
document
  .querySelector('.searchbutton')
  .addEventListener('click', searchBarHandler);