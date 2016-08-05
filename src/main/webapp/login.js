/**
 * 
 */

function validateLogin(name,password) {
	
	// Add the details (AJAX call)
	
	return true; // return true or false
}

function checkLoginCredentials() {
	
	// Remove any previous login messages
	
	var loginMessageDiv = document.getElementById("loginMessage");
	
	loginMessageDiv.innerHTML = '';
	
	var loginName = document.getElementById('userName').value;
	
	var loginPassword = document.getElementById('userPassword').value;
	
	// Validate the login
	
	var isLoginSuccessful = validateLogin(loginName,loginPassword);
	
	if (isLoginSuccessful === true) {
		
		loginMessageDiv.innerHTML = 'Login is successful';
		
	} else { // user name or password not recognized
		
		loginMessageDiv.innerHTML = 'Login name or password is not matched.';
		
	}	
}

function createNewUserAccount() {
	
	// Remove any previous login messages
	
	var loginMessageDiv = document.getElementById("loginMessage");
	
	loginMessageDiv.innerHTML = '';
	
	// Add AJAX call to add new user
	
}