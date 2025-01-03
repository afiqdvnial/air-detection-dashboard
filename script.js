// Firebase configuration (replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyAHawK_6bte7qlaPf-BFJboFICI9hTr3cs",
    authDomain: "air-detection-system-ad77c.firebaseapp.com",
    databaseURL: "https://air-detection-system-ad77c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "air-detection-system-ad77c",
    storageBucket: "air-detection-system-ad77c.firebasestorage.app",
    messagingSenderId: "511086340141",
    appId: "1:511086340141:web:39181e590512df5ec070a4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Reference the MQ-135 sensor value in Firebase
const sensorRef = database.ref("/air_quality/mq135");

sensorRef.on("value", (snapshot) => {
    console.log("Firebase data snapshot:", snapshot.val());
    const sensorValue = snapshot.val();
    if (sensorValue !== null) {
        document.getElementById("sensorValue").innerText = sensorValue;
    } else {
        console.error("No data found at /air_quality/mq135");
    }
});
