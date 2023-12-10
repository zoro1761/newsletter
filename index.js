function check(event) {
  event.preventDefault(); // Prevent the form from submitting

  var emailInput = document.getElementById("email");
  var emailLabel = document.querySelector('label[for="email"]');
  var email = emailInput.value;
  var errmsg=document.getElementById("errmsg");


  if (isValidEmail(email)) {
    // Valid email, proceed to the next page
    window.location.href = "success.html?email=" + encodeURIComponent(email);
  } else {
    // Style the input and label
    emailInput.classList.add('error-border');
    emailLabel.classList.add('errormsg');
    emailInput.style.color = 'red';
    errmsg.style.display='block';
  }
}

function isValidEmail(email) {
  // Use a simple check for the presence of '@' in the email
  return email.includes('@');
}

