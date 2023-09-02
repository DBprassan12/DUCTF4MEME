// Get references to the logo and button elements
var logo = document.getElementById('logo');
var button = document.querySelector('button');
const audioElement = document.getElementById("audio");



// Add a click event listener to the button
button.addEventListener('click', function() {
    // Hide the logo and button by setting their display to 'none'
    logo.style.display = 'none';
    button.style.display = 'none';
    audioElement.play();


});
