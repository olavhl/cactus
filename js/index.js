// Getting text from html
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var endLine = document.getElementById("ending-title");

// Getting circles from html
var circleContainer = document.getElementById("circle-container");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");

var endOpacityOne = false;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Fade in the line1
  fadeInScroll(currentScroll, 75, line1);

  // Fade out line1
  fadeOutScroll(currentScroll, 500, line1);

  // Fade in line2
  fadeInScroll(currentScroll, 700, line2);

  // Fade out line2
  fadeOutScroll(currentScroll, 1200, line2);


  // Hiding container from start to prevent elements to show on Yoffsett = 0
  if (currentScroll > 100) {
    circleContainer.style.opacity = 1;
  }
  // Scaling in circles
  scaleCircles(currentScroll, 4700, circle1, 6);
  scaleCircles(currentScroll, 4600, circle2, 7);
  scaleCircles(currentScroll, 4550, circle3, 8);


  //Fading in and out ending-title  
  fadeInEnd(currentScroll);
  fadeOutEnd(currentScroll);

});

// Function to fade in elements
function fadeInScroll(currentScroll, scrollIn, element) {
  if (currentScroll >= scrollIn) {
    opacity = 1 - scrollIn / currentScroll;
  } else {
    opacity = 0;
  }
  element.style.opacity = opacity;
}

// Function to fade out elements
function fadeOutScroll(currentScroll, scrollOut, element) {
  if (currentScroll >= scrollOut) {
    opacity = scrollOut / currentScroll - 0.4;
  }
  element.style.opacity = opacity;
}

// Function to sale elements
function scaleCircles(currentScroll, scrollIn, element, maxScale) {
  scale = 0;

  if (currentScroll >= scrollIn) {
    scale = (currentScroll - scrollIn) / 100;

    if (scale > maxScale) {
      scale = maxScale;
    }
  }

  element.style.transform = `scale(${scale})`;
}

// Function to fade in ending title
function fadeInEnd(currentScroll) {
    if (currentScroll >= 5400 && !endOpacityOne) {
      endLine.style.animation = "fadeIn 2s both";
      endOpacityOne = true;
    }
}

function fadeOutEnd(currentScroll) {
  if (currentScroll <= 5400 && endOpacityOne) {
    endLine.style.animation = "fadeOut 1.5s both";
    endOpacityOne = false;
  }
}