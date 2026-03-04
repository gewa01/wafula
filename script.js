document.getElementById('wafula-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple Validation
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const responseDiv = document.getElementById('form-response');

    if (name && service) {
        // Success Message
        responseDiv.innerHTML = `<p style="color: green; margin-top: 15px;">Thank you, ${name}! Your inquiry regarding <strong>${service}</strong> has been sent successfully.</p>`;
        this.reset(); // Clear the form
    } else {
        responseDiv.innerHTML = `<p style="color: red; margin-top: 15px;">Please fill out all required fields.</p>`;
    }
});
