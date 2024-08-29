document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    alert("BEEP! BEEP! Tenta Ctrl + U")
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    alert("BEEP! BEEP! Tenta Ctrl + U")
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
    alert("BEEP! BEEP! Tenta Ctrl + U")
  return false;
  }
  }
  document.addEventListener('contextmenu', event => event.preventDefault());

const correctPassword = 'delta' ;

function checkPassword() {
    const passwordInput = document.getElementById('password');
    const contentDiv = document.getElementById('content');
    const passwordPromptDiv = document.getElementById('passwordPrompt');
    
    const enteredPassword = passwordInput.value.toLowerCase();
    const correctPasswordLowercase = correctPassword.toLowerCase();

    // Check if the entered password is correct
    if (enteredPassword === correctPasswordLowercase) {
      // alert('You did it!')
      alert('https://capitalizemytitle.com/morse-code-translator')
        // Show the content
        contentDiv.classList.remove('hidden');
        // Hide the password prompt
        passwordPromptDiv.style.display = 'none';
    } else {
        // Clear password input
        passwordInput.value = '';
    }
}

function enterSubmit(event) {
  // Check if the pressed key is the "Enter" key (key code 13)
  if (event.keyCode === 13) {
      // Submit the password check
      checkPassword();
  }
}