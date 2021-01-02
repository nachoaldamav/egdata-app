import firebase from 'firebase/app'
import 'firebase/messaging'

const firebaseConfig = {
        apiKey: "AIzaSyDTFpFRvHHytL8v4MG5OKOSen5HHmbj_Q4",
        authDomain: "epicstore-2a6cc.firebaseapp.com",
        databaseURL: "https://epicstore-2a6cc.firebaseio.com",
        projectId: "epicstore-2a6cc",
        storageBucket: "epicstore-2a6cc.appspot.com",
        messagingSenderId: "996648565991",
        appId: "1:996648565991:web:449eb4de0054d22abe7642"
}

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

export const askNotification = async () => {
    try {
        const messaging = firebase.messaging();

        //await messaging.requestPermission();
        await Notification.requestPermission().then(async permission => {
            if (permission === "denied") {
                console.log("Permission wasn't granted. Allow a retry.");
                return;
            } else if (permission === "default") {
                console.log("The permission request was dismissed.");
                return;
            }
            const token = await messaging.getToken();
            console.log("user token: ", token);

            return token;
        });
    } catch (error) {
        console.error(error);
    }
}