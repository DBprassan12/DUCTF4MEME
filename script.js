// Get references to the logo and button elements
var logo = document.getElementById('logo');
var button = document.querySelector('button');
const audioElement = document.getElementById("audio");
const audioElement2 = document.getElementById("monkenoise");
const content = document.querySelector(".container-hidden");
var invisibleElements = document.querySelectorAll('.meme');


// Add a click event listener to the button
button.addEventListener('click', function() {
    // Hide the logo and button by setting their display to 'none'
    logo.style.display = 'none';
    button.style.display = 'none';
    audioElement.play();
    audioElement2.play();


    for (var i = 0; i < invisibleElements.length; i++) {
        invisibleElements[i].style.display = 'block';
      }


});



const audio = new Audio('Assets/coolsong.mp3'); // Replace with your audio file path

document.body.addEventListener('click', () => {
  audio.play();
});





//coppied code monke lazy

{
  const { requestAnimationFrame } = globalThis;
  const { alert } = globalThis;
  HTMLButtonElement.prototype.click = () => {
    alert(
      "Haha, lol try hard why u JavaScript >:D",
    );
  };
  HTMLButtonElement.prototype.focus = () => {
    alert(
      "monkeeeyeyeyeyeyeyeeyyeeyyeyey",
    );
  };
  Object.freeze(HTMLButtonElement);
  Object.freeze(HTMLButtonElement.prototype);
  const ready = () => {
    const button = document.getElementById("item");
    button.focus = null;
    button.style = `
      position: fixed;
	    top: 200px;
	    left: 200px;
	    width: 300px;
    	height: 300px;
	    border-radius: 8px;
      background-color:red;
      color: white;
	    font-family: trebuchet MS;
	    font-size: 20px;
	    border: none;
	    box-shadow: 4px 4px 0px rgb(82, 0, 114);
      user-select:none;`;
    button.onmousedown = function () {
      button.style.boxShadow = "3px 2px 1px rgb(80, 0, 110)";
    };
    button.onmouseup = function () {
      button.style.boxShadow = "4px 4px 0px rgb(82, 0, 114)";
      button.style.animation = "wobble 1s";
    };

    let x = 0;
    let y = 0;
    let button_x = 200;
    let button_y = 200;

    const runAway = (e) => {
      x = e.pageX;
      y = e.pageY;
      button.style.left = (x + 20) + "px";
      button.style.top = (y + 20) + "px";
    };
    const onClick = (e) => {
      if (e.isTrusted && e instanceof MouseEvent) {
        alert("You got me!");
      } else if (e.screenX === 0 && e.screenY === 0) {
        alert(
          "congrats monkes this code been coppied",
        );
      }
      else{
        alert("HaHa, nice try >:D");
      }
    };
    const onLeave = ()=>{

    };
    const onEnter = ()=>{

    };
    const oncontext = (e) => false;
    button.onclick = onClick;
    document.onmousemove = runAway;
    window.onmouseout = onLeave;
    window.onmouseover = onEnter;
    window.oncontextmenu = oncontext;
    const loop = () => {
      if (button.onclick !== onClick) {
        button.onclick = onClick;
      }
      if (document.onmousemove !== runAway) {
        document.onmousemove = runAway;
      }
      if (window.oncontextmenu !== oncontext) {
        window.oncontextmenu = oncontext;
      }
      if(window.onmouseout !== onLeave){
        window.onmouseout = onLeave;
      }
      if(window.onmouseover !== onEnter){
        window.onmouseover = onEnter;
      }
      if (
        !button.hasAttribute("tabindex") ||
        button.getAttribute("tabindex") !== "-1"
      ) {
        button.setAttribute("tabindex", "-1");
      }
      if (button.style.position !== "fixed") {
        button.style.position = "fixed";
      }
      if (button.style.width !== "200px" || button.style.height !== "100px") {
        button.style.width = "200px";
        button.style.height = "100px";
      }
      requestAnimationFrame(loop);
    };
    loop();
    //Ha, nice try guys ;)
    globalThis.alert = (message) => {
      alert(
        "glory to malta",
      );
    };
  };
  if (document.readyState !== "loading") {
    ready();
  } else {
    window.addEventListener("DOMContentLoaded", ready);
  }
}



//coppied code two monke lazy again 



window.addEventListener('mousemove', function(e) {
[1, .9, .8, .5, .1].forEach(function(i) {
var j = (1 - i) * 50;
var elem = document.createElement('div');
var size = Math.ceil(Math.random() * 60 * i) + 'px';
elem.style.position = 'fixed';
elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
elem.style.width = size;
elem.style.height = size;
elem.style.background = 'hsla(' +
  Math.round(Math.random() * 360) + ', ' +
  '100%, ' +
  '50%, ' +
  i + ')';
elem.style.borderRadius = size;
elem.style.pointerEvents = 'none';
document.body.appendChild(elem);
window.setTimeout(function() {
  document.body.removeChild(elem);
}, Math.round(Math.random() * i * 500));
});
}, false);

