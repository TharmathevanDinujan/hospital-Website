// Function to open the popup and set doctor's info
function openPopup(name, type, availability) {
    // Set doctor's info in the popup
    const popup = document.getElementById('appointment-popup');
    popup.style.display = 'flex';
    
    const popupTitle = popup.querySelector('.popup-content h2');
    popupTitle.textContent = `Book an Appointment with ${name}`;

    // Set doctor's info as data attribute for the form (optional, for backend processing)
    document.getElementById('appointment-form').setAttribute('data-doctor', `${name} - ${type} - ${availability}`);
}

// Function to close the popup
function closePopup() {
    document.getElementById('appointment-popup').style.display = 'none';
}

// Handle form submission (you can add logic to send data to the server)
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const doctorInfo = document.getElementById('appointment-form').getAttribute('data-doctor');
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    const patientNote = document.getElementById('patient-note').value;

    console.log('Appointment Details:', {
        doctorInfo,
        appointmentDate,
        appointmentTime,
        patientNote
    });

    alert('Appointment booked successfully!');
    closePopup();
});

document.getElementById("doctor-search").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const doctorCards = document.querySelectorAll(".doctor-card");

    doctorCards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const specialty = card.querySelector("p").textContent.toLowerCase();

        if (name.includes(query) || specialty.includes(query)) {
            card.style.display = "block"; // Show matching cards
        } else {
            card.style.display = "none"; // Hide non-matching cards
        }
    });
});
