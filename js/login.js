// counting the number of login attempts
var attempt =3;

//execution on clicking submit button
function validate(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username == 'username' && password == 'password'){
		window.location ='index.html';
		return false;
	}
	else{
		attempt --;
		alert('You have '+attempt+' attempts left');
		if (attempt == 0){
			document.getElementById('username').disabled = true;
			document.getElementById('password').disabled = true;
			document.getElementById('submit').disabled = true;
			return false;
		}
	}
}