document.getElementById('rsvpForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var email = emailInput.value;
  var response = document.getElementById('response').value;

  // Email validation
  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    return;
  }

  // Reset email error message
  emailError.textContent = '';

  if (response) {
    var responseText = response + ', email: ' + email;
    document.getElementById('responseLabel').textContent = responseText;
  }
});

// Email validation function
function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}