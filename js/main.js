'use strict';

// Homepage

var h1 = document.querySelector('#home h1');

document.querySelector('html').className = 'js';

if (h1) {
  h1.addEventListener('click', homepageHeadingClick);
}

function homepageHeadingClick(event) {
  console.log('Title was clicked to display Home: Druva');
  var heading = event.target;
  heading.innerText = 'Home: Druva';
  heading.className = 'is-clicked';
}
