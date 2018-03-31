alert("asdalert");

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
		}
	} else {
		document.getElementById("user_div").style.display ="none";
		document.getElementById("login_div").style.display ="block";
		document.getElementById("register_div").style.display ="block";
	}
});

var regis = $('#form-regis').on('click', function(){
	alert("asd2");
	var userEmail2 = document.getElementById('register_email_field').value;
	var userPass2 = document.getElementById('register_password_field').value;
	
	//window.alert(userEmail +" ,"+ userPass);
	firebase.auth().createUserWithEmailAndPassword(userEmail2, userPass2).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		window.alert("Error: " + errorMessage);
	});
});
var logis = $('#form-login').on('click', function(){
	var userEmail = document.getElementById('login_email_field').value;
	var userPass = document.getElementById('login_password_field').value;
	
	//window.alert(userEmail +" ,"+ userPass);
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		window.alert("Error: " + errorMessage);
	});
});

var logisout = $('#form-logout').on('click', function(){
	//window.alert(userEmail +" ,"+ userPass);
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
	}).catch(function(error) {
		window.alert("Error: " + errorMessage);
	});
});

var myFirebaseRef = new Firebase("https://testauth-fc05c.firebaseio.com/");
		var senddata = $('#sendData').on('click', function(){
			myFirebaseRef.set({
			  title: "Hello World!23",
			  author: "fire",
			  location: {
				city: "San Francisco",
				state: "California",
				zip: 94103
			  }
			});
		});
		

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Received Device Ready Event');
        console.log('calling setup push');
        app.setupPush();
    },
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "XXXXXXXX"
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }

            var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
       });
    }
};
 */