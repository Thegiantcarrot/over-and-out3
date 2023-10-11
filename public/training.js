// Import the Firebase configuration
import firebaseConfig from '/firebase.js';


// DOM elements
const trainingForm = document.getElementById('training-form');

// Initialize Firebase (you can initialize it here or in firebase.js)
firebase.initializeApp(firebaseConfig);

// Submit training data
trainingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const ballsBowled = parseInt(document.getElementById('balls-bowled').value);
    const timeSpent = parseInt(document.getElementById('time-spent').value);
    const averageBPM = parseInt(document.getElementById('average-bpm').value) || null;

    // Save training data to Firebase Firestore
    const userId = firebase.auth().currentUser.uid;
    const trainingDataRef = firebase.firestore().collection('users').doc(userId).collection('trainingData');

    trainingDataRef.add({
        ballsBowled: ballsBowled,
        timeSpent: timeSpent,
        averageBPM: averageBPM
    })
    .then(() => {
        alert('Training data saved successfully.');
        redirectToReviewPage(); // Redirect to review.html
    })
    .catch((error) => {
        alert('Error saving training data: ' + error.message);
    });
});

// Function to redirect to review.html
function redirectToReviewPage() {
    window.location.href = 'review.html';
}
