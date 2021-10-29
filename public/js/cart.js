var cart={
  name:[],
  price:[],
  option:[],
}

const addToCartHandler = async (event) => {
     // use event.target to grab values from that card
     const button = event.target;
     console.log(button);
    const artName = $(button).siblings().eq(1).children().eq(0).text();
    const artPrice= $(button).siblings().eq(1).children().eq(2).text();
    const buyOption =$(button).siblings().eq(2).val();

    cart.name.push(artName);
    cart.price.push(artPrice);
    cart.option.push(buyOption);

    localStorage.setItem('cart', JSON.stringify(cart));

}






document
  .querySelector('.cartbutton')
  .addEventListener('click', addToCartHandler);