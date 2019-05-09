		function validation(){
			var user = document.getElementById('username').value;
			var password = document.getElementById('password').value;
			var passwordconfirm = document.getElementById('confirmpassword').value;
			var phonenumber = document.getElementById('phonenumber').value;
			var email = document.getElementById('email').value;
			if (user==""){
				document.getElementById('usernameid').innerHTML = "** Please fill the username ** ";
				return false;
			}
			if ((user.length <3) || (user.length > 20)){
				document.getElementById('usernameid').innerHTML =" ** username should be between 3 and 20 characterSet **";
				return false;
			}
			if (!isNaN(user)){
				document.getElementById('usernameid').innerHTML =" ** Please enter Characters **";
				return false;
			}
			if (password==""){
				document.getElementById('passwordsid').innerHTML = "** Please fill the Password ** ";
				return false;
			}
			if (password.length < 8 || password.length > 20){
				document.getElementById('passwordsid').innerHTML = "** Password should be between 8 and 20 Characters ** ";
				return false;
			}
			if (password != passwordconfirm){
				document.getElementById('passwordconfirmid').innerHTML ="** Passwords are not matching **";
				return false;
			}
			if (passwordconfirm==""){
				document.getElementById('passwordconfirmid').innerHTML = "** Please fill Confirm Password ** ";
				return false;
			}
			if (phonenumber==""){
				document.getElementById('phonenumberid').innerHTML = "** Please Fill mobile Number ** ";
				return false;
			}
			if (phonenumber.length!= 10){
				document.getElementById('phonenumberid').innerHTML = "** Mobile Number should be 10 digits ** ";
				return false;
			}
			if (email==""){
				document.getElementById('emailid').innerHTML = "** Please fill the Email ** ";
				return false;
			}
			if (email.indexOf('@') <=0){
				document.getElementById('emailid').innerHTML ="Please enter a valide email address";
				return false;
			}
			if (email.charAt(email.length-4)!='.' && (email.charAt(email.length-3)!='.')){
				document.getElementById('emailid').innerHTML ="Please enter a valide email address";
				return false;
			}
		}