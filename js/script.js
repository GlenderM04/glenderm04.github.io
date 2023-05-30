function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");
  
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";
  
  var isValid = true;
  
  if (email === "") {
    emailError.innerHTML = "El email es obligatorio.";
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = "El email no es válido.";
    isValid = false;
  }
  
  if (password === "") {
    passwordError.innerHTML = "La contraseña es obligatoria.";
    isValid = false;
  }
  
  if (confirmPassword === "") {
    confirmPasswordError.innerHTML = "Por favor, confirma tu contraseña.";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerHTML = "Las contraseñas no coinciden.";
    isValid = false;
  }
  
  if (isValid) {
    addUser(email, password);
    clearForm();
  }
}

function isValidEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function addUser(email, password) {
  var userTable = document.getElementById("userTable");
  var userListItem = document.createElement("div");
  userListItem.className = "user-list-item";
  
  var emailLabel = document.createElement("span");
  emailLabel.innerHTML = "Email: ";
  var emailValue = document.createElement("span");
  emailValue.innerHTML = email;
  
  var passwordLabel = document.createElement("span");
  passwordLabel.innerHTML = "Contraseña: ";
  var passwordValue = document.createElement("span");
  passwordValue.innerHTML = password;
  
  userListItem.appendChild(emailLabel);
  userListItem.appendChild(emailValue);
  userListItem.appendChild(document.createElement("br"));
  userListItem.appendChild(passwordLabel);
  userListItem.appendChild(passwordValue);
  
  userTable.appendChild(userListItem);
}

function clearForm() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("confirmPasswordError").innerHTML = "";
}
