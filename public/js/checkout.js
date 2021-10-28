const checkoutFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector('#fname').value.trim();
    const email=document.querySelector('#email').value.trim();
    const address = document.querySelector('#adr').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
    const ccName = document.querySelector('#cname').value.trim();
    const ccNum = document.querySelector('#ccnum').value.trim();
    const expMonth = document.querySelector('#expmonth').value.trim();
    const expYear = document.querySelector('#expyear').value.trim();
    const ccCVV = document.querySelector('#cvv').value.trim();
    
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
