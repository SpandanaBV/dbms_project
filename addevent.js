document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addEventForm');
    const category = document.getElementById('category');
    const sponsor = document.getElementById('sponsor');
    const eventName = document.getElementById('eventName');
    const description = document.getElementById('description');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const location = document.getElementById('location');
    const image = document.getElementById('image');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Simulate an AJAX request
            console.log('Form Submitted');
            console.log({
                category: category.value,
                sponsor: sponsor.value,
                eventName: eventName.value,
                description: description.value,
                startDate: startDate.value,
                endDate: endDate.value,
                location: location.value,
                image: image.files[0]
            });

            alert('Event added successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        // Simple validation logic
        if (category.value === '') {
            alert('Category is required');
            isValid = false;
        }

        if (sponsor.value === '') {
            alert('Sponsor is required');
            isValid = false;
        }

        if (eventName.value.trim() === '') {
            alert('Event Name is required');
            isValid = false;
        }

        if (description.value.trim() === '') {
            alert('Event Description is required');
            isValid = false;
        }

        if (startDate.value === '') {
            alert('Event Start Date is required');
            isValid = false;
        }

        if (endDate.value === '') {
            alert('Event End Date is required');
            isValid = false;
        }

        if (location.value.trim() === '') {
            alert('Event Location is required');
            isValid = false;
        }

        if (image.files.length === 0) {
            alert('Event Featured Image is required');
            isValid = false;
        }

        return isValid;
    }
});
