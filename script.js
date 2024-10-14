// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7LwobchU50-lX8xkaMHU_8pSAxXmQajQ",
    authDomain: "air-detection-system-d1d27.firebaseapp.com",
    databaseURL: "https://air-detection-system-d1d27-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "air-detection-system-d1d27",
    storageBucket: "air-detection-system-d1d27.appspot.com",
    messagingSenderId: "443327486938",
    appId: "1:443327486938:web:f1390e9586253c39d6fee3",
    measurementId: "G-8BFJZV7YGX"
};

// Initialize Firebase with your configuration
firebase.initializeApp(firebaseConfig);

// Reference your Firebase Realtime Database path for MQ-135 data
const dbRef = firebase.database().ref('sensorData/mq135');

// Fetch the gas level from the database and update the webpage
dbRef.on('value', (snapshot) => {
    const gasLevel = snapshot.val(); // Get the value from Firebase
    document.getElementById('gasLevel').textContent = gasLevel; // Update the webpage
});
