// Get references to the logo and button elements
var logo = document.getElementById('logo');
var button = document.querySelector('button');
const audioElement = document.getElementById("audio");
const content = document.querySelector(".container-hidden");
var invisibleElements = document.querySelectorAll('.meme');


// Add a click event listener to the button
button.addEventListener('click', function() {
    // Hide the logo and button by setting their display to 'none'
    logo.style.display = 'none';
    button.style.display = 'none';
    audioElement.play();


    for (var i = 0; i < invisibleElements.length; i++) {
        invisibleElements[i].style.display = 'block';
      }


});
