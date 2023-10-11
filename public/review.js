 // Import the Firebase configuration
import firebaseConfig from '/firebase.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DOM elements
const recommendationText = document.getElementById('recommendation-text');
const chartCanvas = document.getElementById('training-chart').getContext('2d');

// Fetch user's training data from Firebase Firestore
const userId = firebase.auth().currentUser.uid;
const trainingDataRef = firebase.firestore().collection('users').doc(userId).collection('trainingData');

// Function to calculate recommendations based on data (replace with your logic)
function calculateRecommendations(trainingData) {
    // Example logic: Determine if user is over recommended guidelines
    const ballsBowledSum = trainingData.reduce((total, data) => total + data.ballsBowled, 0);
    const isOverGuidelines = ballsBowledSum > recommendedValueForAgeGroup;

    return isOverGuidelines ? 'over the recommended guidelines' : 'within the recommended guidelines';
}

// Function to render the chart
function renderChart(trainingData) {
    // Prepare data for the chart (replace with your data processing logic)
    const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    const data = trainingData.map((entry) => entry.ballsBowled); // Example: Use 'ballsBowled' data

    // Create the chart
    new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Balls Bowled',
                data: data,
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Fetch training data and update recommendations and chart
trainingDataRef.get().then((querySnapshot) => {
    const trainingData = querySnapshot.docs.map((doc) => doc.data());

    // Calculate recommendations
    const recommendations = calculateRecommendations(trainingData);
    recommendationText.textContent = `Based on your training data, you are performing ${recommendations}.`;

    // Render the chart
    renderChart(trainingData);
});
