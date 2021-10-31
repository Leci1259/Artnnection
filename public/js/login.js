const loginFormHandler = async (event) => {
  event.preventDefault();

  //Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    //Send a POST request to the API endpoint
    const loginResponse = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (loginResponse.ok) {
      // If successful, redirect the browser to the profile page
      const loginResponseJson = await loginResponse.json();
      document.location.replace(`/userprofile`);
    } else {
      alert(loginResponse.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const signupResponse = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (signupResponse.ok) {
      // If successful, redirect the browser to the profile page
      const userResponse = await fetch(`/api/user/${email}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (userResponse.ok) {
        const userResponseJson = await userResponse.json();
        document.location.replace(`/userprofile`);
      } else {
        alert(userResponse.statusText);
      }
        
    } else {
      alert(loginResponse.statusText);
    }
  }

};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
