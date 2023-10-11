// Import the Firebase configuration
import firebaseConfig from '/firebase.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DOM elements
const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');

// Register a new user
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered successfully
            const user = userCredential.user;
            alert('Registration successful. You are now logged in.');
            redirectToNewSessionPage(); // Redirect to new_session.html or another page
        })
        .catch((error) => {
            // Handle registration errors
            alert('Registration failed. ' + error.message);
        });
});

// Log in an existing user
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User logged in successfully
            const user = userCredential.user;
            alert('Login successful.');
            redirectToNewSessionPage(); // Redirect to new_session.html or another page
        })
        .catch((error) => {
            // Handle login errors
            alert('Login failed. ' + error.message);
        });
});

// Function to redirect to a new page
function redirectToNewSessionPage() {
    window.location.href = 'new_session.html'; // Change to the desired URL
}
