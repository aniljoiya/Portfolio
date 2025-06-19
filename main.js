var typed = new Typed(".text", {
    strings: ["Frontend Developer.", "PHP Developer.", "Backend Developer.", "Full Stack Developer.", "MERN Stack Developer.", "Software Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const moreAboutMeBtn = document.getElementById('moreAboutMeBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Show the popup when the button is clicked
moreAboutMeBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close the popup when clicking outside the content area
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});


