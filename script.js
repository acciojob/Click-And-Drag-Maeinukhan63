// Your code here.
// Select the container that holds the items
const slider = document.querySelector('.items');

let isDown = false; // Tracks if the mouse is clicked down
let startX; // Stores the initial X position of the mouse
let scrollLeft; // Stores the initial scroll position of the container

// Event listener for when the mouse is clicked down
slider.addEventListener('mousedown', (e) => {
  isDown = true; // Set the isDown flag to true
  slider.classList.add('active'); // Add the active class for styling
  startX = e.pageX - slider.offsetLeft; // Calculate the initial X position
  scrollLeft = slider.scrollLeft; // Store the initial scroll position
});

// Event listener for when the mouse is no longer clicked
slider.addEventListener('mouseleave', () => {
  isDown = false; // Set the isDown flag to false
  slider.classList.remove('active'); // Remove the active class
});

// Event listener for when the mouse button is released
slider.addEventListener('mouseup', () => {
  isDown = false; // Set the isDown flag to false
  slider.classList.remove('active'); // Remove the active class
});

// Event listener for when the mouse moves
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // If the mouse is not clicked down, do nothing
  e.preventDefault(); // Prevent text selection and other default behavior
  const x = e.pageX - slider.offsetLeft; // Calculate the current X position
  const walk = (x - startX) * 3; // Calculate the distance moved, with a multiplier for speed
  slider.scrollLeft = scrollLeft - walk; // Update the scroll position
});
