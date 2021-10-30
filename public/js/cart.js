var cart={
  name:[],
  price:[],
}

const addToCartHandler = async (event) => {
     // use event.target to grab values from that card
     const button = event.target;
     console.log(button);
    const artName = $(button).siblings().eq(1).children().eq(0).text();
    const artPrice= $(button).siblings().eq(1).children().eq(2).text();
    cart.name.push(artName);
    cart.price.push(artPrice);

    localStorage.setItem('cart', JSON.stringify(cart));

}






document
  .querySelector('.card-holder')
  .addEventListener('click', addToCartHandler);