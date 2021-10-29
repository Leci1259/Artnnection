
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    //Collect values from the login form
    const artist_id = document.querySelector('#artist_id').value.trim();
    const art_name = document.querySelector('#art_name').value.trim();
    const art_price = document.querySelector('#art_price').value.trim();
    const art_stock = document.querySelector('#stock').value.trim();
  
    if (artist_id && art_name && art_price && art_stock){
      //Send a POST request to the API endpoint
      const response = await fetch('/api/art/post', {
        method: 'POST',
        body: JSON.stringify({ art_name, art_price, art_stock, artist_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       // If successful, redirect the browser to the profile page
        document.location.replace('/user_profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.addArt-form')
  .addEventListener('submit', loginFormHandler);
