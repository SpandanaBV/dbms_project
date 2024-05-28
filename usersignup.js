
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (name && username && email && phone && gender && password) {
        alert('Form submitted successfully!');
        // Here, you can also add code to send the form data to your server
    } else {
        alert('Please fill in all fields.');
    }
});
