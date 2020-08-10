var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Fade in the line1
  fadeInScroll(currentScroll, 75, line1);

  // Fade out line1
  fadeOutScroll(currentScroll, 300, line1);

  // Fade in line2
  fadeInScroll(currentScroll, 500, line2);

  // Fade out line2
  fadeOutScroll(currentScroll, 725, line2);
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
