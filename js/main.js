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

// Resume

var h1 = document.querySelector('#resume h1');

document.querySelector('html').className = 'js';

if (h1) {
  h1.addEventListener('click', resumeHeadingClick);
}

function resumeHeadingClick(event) {
  console.log('Title was clicked to display Resume: Druva');
  var heading = event.target;
  heading.innerText = 'Resume: Druva Murali';
  heading.className = 'is-clicked';
}


// VRblog

var h1 = document.querySelector('#vrblog h1');

document.querySelector('html').className = 'js';

if (h1) {
  h1.addEventListener('click', vrblogHeadingClick);
}

function vrblogHeadingClick(event) {
  console.log('Title was clicked to display the blog of Valentino Rossi');
  var heading = event.target;
  heading.innerText = 'Blog: Valentino Rossi';
  heading.className = 'is-clicked';
}
