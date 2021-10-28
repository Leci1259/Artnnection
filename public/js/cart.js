const searchBarHandler = async (event) => {
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value.trim();
    const searchCategory = document.querySelector('.search-category').value.trim();

    if ( searchInput && (searchCategory == 'Artist')) {
        const response = await fetch('api/user/', {
            method: 'GET',
            body: JSON.stringify({}),
        })
    }

    if ( searchInput && (searchCategory == 'Art')) {
        const response = await fetch('api/art/', {
            method: 'GET',
            body: JSON.stringify({}),
        })
    }
}

const addToCartHandler = async (event) => {
    const art = event.target;

    const buyOption = document.querySelector('.buy-option').value.trim();

}


document
  .querySelector('.searchbutton')
  .addEventListener('click', searchBarHandler);

  document
  .querySelector('.cartbutton')
  .addEventListener('click', addToCartHandler);