/* Get userEmail and userPassword */
document.getElementById('login-button').addEventListener('click', function(){
  //get user email
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  
  //get user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;

  //check email and password
  if (userEmail == 'imran@gmail.com' && userPassword == 'money'){
    window.location.href = 'banking.html'
  }
  if (userEmail != 'imran@gmail.com'){
    alert('email is = imran@gmail.com')
  }
  if(userPassword != 'money'){
    alert('Password is = money')
  }
})