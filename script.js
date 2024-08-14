const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');



form.addEventListener('submit', (e) => {
    let email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
    if (!email.value.match(email_check)) {
      e.preventDefault();
      email_error.innerHTML = "Valid email is required";
    } else {
      email_error.innerHTML = ""; 
    }
  
    if (password.value === '' || password.value == null) {
      e.preventDefault();
      password_error.innerHTML = "Password is required";
    } else if (password.value.length < 8) {
      e.preventDefault();
      password_error.innerHTML = "Password must be at least 8 characters";
    } else {
      password_error.innerHTML = "";
    }
  });
  

  
        
