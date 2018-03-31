	var usernameElm = document.getElementById('username');
	var currentusername = "noLoggedIn";
	
	
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		document.getElementById("user_div").style.display ="block";
		document.getElementById("login_div").style.display ="none";
		document.getElementById("register_div").style.display ="none";
		
		var user = firebase.auth().currentUser;
		var name, email, photoUrl, uid;
		if(user != null) {
			email = user.email;
			name = user.displayName;
			document.getElementById('user_para').innerHTML = "Welcome user : " + email + " "+user.uid;
			document.getElementById('username').innerHTML = "Welcome user : " + email + " "+user.uid;
		}
	} else {
		window.location.href='#pgLogin'; // redirect to mainPage
		document.getElementById("user_div").style.display ="none";
		document.getElementById("login_div").style.display ="block";
		document.getElementById("register_div").style.display ="block";
	}
});

var register = $('#form-register').on('click', function(){
	alert("asd2");
	var userEmail2 = document.getElementById('register_email_field').value;
	var userPass2 = document.getElementById('register_password_field').value;
	
	//window.alert(userEmail +" ,"+ userPass);
	firebase.auth().createUserWithEmailAndPassword(userEmail2, userPass2).then(function() {
		window.location.href='#pgMenu'; // redirect to mainPage
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		window.alert("Error: " + errorMessage);
	});
});
var login = $('#form-login').on('click', function(){
	var userEmail = document.getElementById('login_email_field').value;
	var userPass = document.getElementById('login_password_field').value;
	
	//window.alert(userEmail +" ,"+ userPass);
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function() {
		window.location.href='#pgMenu'; // redirect to mainPage
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		window.alert("Error: " + errorMessage);
	});

});
function setUsername(newUsername) {
        if (newUsername == null) {
            newUsername = "notLoggedUser";
        }
        currentusername = newUsername;
        var isLoggedIn = currentusername != 'notLoggedUser';     
        usernameElm.innerText = newUsername;
        usernameElm.style.fontWeight= "bold";
        
        logout.style.display = isLoggedIn ? '' : 'none';
        facebookLogin.style.display = isLoggedIn ? 'none' : '';
        googleLogin.style.display = isLoggedIn ? 'none' : '';
        anonLogin.style.display = isLoggedIn ? 'none' : '';
    }
var logout1 = $('#form-logout1').on('click', function(){
	//window.alert(userEmail +" ,"+ userPass);
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
	}).catch(function(error) {
		window.alert("Error: " + errorMessage);
	});
});
var logout2 = $('#form-logout2').on('click', function(){
	//window.alert(userEmail +" ,"+ userPass);
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
	}).catch(function(error) {
		window.alert("Error: " + errorMessage);
	});
});

	// var input1 = $('#inputtitle').val(),input2 = $('#inputdescription').val(),input3 = $('#inputdate').val();
	// var sendData = $('#senddatatofire').on('click', writeUserData(auth.currentUser.uid,input1,input2,input3) );
	
	// function writeUserData() {
		// firebase.database().ref('users/' + userId ).push().set({
			// DestTitle: title,
			// DestDesc: description,
			// DestDate : date
		// });
	// }

databaseRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  $('<div/>').text(message.text).prepend($('<em/>').prependTo($('#messages')));
});

var usersRef = database.ref('leads');
usersRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
    });
});