const seeMyWorkHandler = async (event) => {
    //grab artist name from card
    const artistName =event.target.sibling(1).value;

    //artist name => id

    

    //get request for that artist to render their info on the artist profile page
    const response = await fetch('api/artist/', {
        method: 'GET',
    })

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/user/artist_profile');
      } else {
        alert(response.statusText);
      }
}

document
.querySelector('.seeWorkButton')
.addEventListener('click', seeMyWorkHandler);