const seeMyWorkHandler = async (event) => {
    const card = event.target
     //grab artist name from card
    const artistName =$(card).siblings().eq(0).text().trim();

    //artist name => id

    //get request for that artist to render their info on the artist profile page
    const response = await fetch(`api/artist/${id}`, {
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