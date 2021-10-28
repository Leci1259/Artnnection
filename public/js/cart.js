

const addToCartHandler = async (event) => {
     // use event.target to grab values from that card
     const button = event.target;
     console.log(button);
    const artName = $(button).siblings().eq(1).children().eq(0).text();
    const artPrice= $(button).siblings().eq(1).children().eq(2).text();
    const buyOption =$(button).siblings().eq(2).val();

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
  .querySelector('.cartbutton')
  .addEventListener('click', addToCartHandler);