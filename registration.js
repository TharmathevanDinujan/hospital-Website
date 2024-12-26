document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        // Mobile number validation
        const mobile = document.getElementById('mobile');
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(mobile.value)) {
            alert('Please enter a valid 10-digit mobile number.');
            event.preventDefault();
            return;
        }

        // Place validation
        const place = document.getElementById('place');
        if (place.value === "") {
            alert('Please select a place.');
            event.preventDefault();
            return;
        }
    });
});
