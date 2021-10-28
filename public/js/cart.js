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

const addToCartHandler = async (event) => {
    
    const artName = event.target.sibling(2).firstChild().value.trim();
    const artPrice= event.target.sibling(2).children(2).value.trim();
    const buyOption =event.target.sibling(3).value;

    //use event.target to grab values from that card

    // const buyOption = document.querySelector('.buy-option').value.trim();
    // const artName = document.querySelector('#art-title').value.trim();
    // const artPrice= document.querySelector('#art-price').value.trim();

    const response = await fetch('api/', {
        method: 'POST',
        body: JSON.stringify({buyOption,artName,artPrice}),
    })

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/user/checkout');
      } else {
        alert(response.statusText);
      }

}


document
  .querySelector('.searchbutton')
  .addEventListener('click', searchBarHandler);
   document
  .querySelector('.cartbutton')
  .addEventListener('click', addToCartHandler);