
 importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
  apiKey: "AIzaSyDTFpFRvHHytL8v4MG5OKOSen5HHmbj_Q4",
  authDomain: "epicstore-2a6cc.firebaseapp.com",
  databaseURL: "https://epicstore-2a6cc.firebaseio.com",
  projectId: "epicstore-2a6cc",
  storageBucket: "epicstore-2a6cc.appspot.com",
  messagingSenderId: "996648565991",
  appId: "1:996648565991:web:449eb4de0054d22abe7642",
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();



// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END on_background_message]
