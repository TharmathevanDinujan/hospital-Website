const healthTips = [
    "Stay Hydrated: Drink at least 8 glasses of water a day to stay healthy.",
    "Eat a Balanced Diet: Incorporate fruits, vegetables, whole grains, and lean proteins into your meals.",
    "Exercise Regularly: Aim for at least 30 minutes of moderate exercise most days of the week.",
    "Get Enough Sleep: Adults should aim for 7-9 hours of sleep each night.",
    "Wash Your Hands: Prevent the spread of germs by washing hands regularly with soap and water.",
    "Schedule Regular Check-ups: Early detection can help prevent many health issues.",
    "Quit Smoking: Smoking is a leading cause of preventable diseases. Seek support to quit.",
    "Manage Stress: Practice relaxation techniques like deep breathing or meditation to reduce stress.",
    "Stay Active: Even small amounts of physical activity can help improve your health.",
    "Protect Your Skin: Use sunscreen regularly to protect against harmful UV rays.",
    "Keep Your Mental Health in Check: Speak to a professional if you're feeling overwhelmed.",
    "Vaccinate: Stay up-to-date with vaccinations to protect yourself and others from illness.",
    "Limit Sugar Intake: Excess sugar can lead to obesity and other health problems.",
    "Practice Good Posture: Sit and stand up straight to avoid strain on your muscles and joints.",
    "Practice Safe Driving: Always wear your seatbelt and follow traffic rules for safety."
];

let currentIndex = 0;

function updateHealthTip() {
    const tipElement = document.getElementById("health-tip");
    // Reset the tip content position and opacity for animation
    tipElement.style.opacity = 0;
    tipElement.style.transform = "translateX(100%)"; // Move it off-screen to the right

    setTimeout(() => {
        tipElement.textContent = healthTips[currentIndex];
        // Slide in from the right
        tipElement.style.opacity = 1;
        tipElement.style.transform = "translateX(0)";
    }, 500); // 500ms delay before the content change to ensure smooth transition
}

function nextTip() {
    currentIndex = (currentIndex + 1) % healthTips.length; // Move to next tip
    updateHealthTip();
}

// Auto slide show every 5 seconds
setInterval(nextTip, 5000); // Change health tip every 5 seconds

// Initial display
updateHealthTip();


// Show the arrow only after scrolling down
window.addEventListener("scroll", () => {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (window.scrollY > 200) { // Show after 200px of scrolling
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });
  
  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  