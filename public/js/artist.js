const seeMyWorkHandler = async (event) => {
    const card = event.target
     //grab artist name from card
    const artist_id =$(card).siblings().eq(1).text().trim();

    //artist name => id

    //get request for that artist to render their info on the artist profile page
    const response = await fetch(`api/artist/${artist_id}`, {
        method: 'GET',
    })
}

$('.seeWorkButton').on('click', seeMyWorkHandler);