const cart = localStorage.getItem('cart');
const products = cart.name;
const prices = cart.price;


for (let i = 0; i < products.length; i++) {
 
  $( ".product-holder" ).append( `<p id='price-item'>${products[i]}<span class="price">$${prices[i]}</span></p>`);
}
if (i>=products.length) {
  $( ".product-holder" ).append( `<hr>`);
}


const checkoutFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = $('#fname').val().trim();
    const email=$('#email').val().trim();
    const address = $('#adr').val().trim();
    const city = $('#city').val().trim();
    const state = $('#state').val().trim();
    const zip = $('#zip').val().trim();
    const ccName = $('#cname').val().trim();
    const ccNum = $('#ccnum').val().trim();
    const expMonth = $('#expmonth').val().trim();
    const expYear = $('#expyear').val().trim();
    const ccCVV = $('#cvv').val().trim();
    
//need to add minus stock from database and add cart to post

  
    if ( name && email && address && city && state && zip && ccName && ccNum && expMonth && expYear && ccCVV) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/checkout', {
        method: 'POST',
        body: JSON.stringify({ name, email, address, city, state, zip, ccName, ccNum, expMonth, expYear, ccCVV }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/user/checkout');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.checkout-form')
  .addEventListener('submit', checkoutFormHandler);
