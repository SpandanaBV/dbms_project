document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardTitle = card.querySelector('p').innerText;
            alert(`Navigating to ${cardTitle}`);
            // You can replace the alert with actual navigation or data loading logic
            // For example, window.location.href = '/path-to-section';
        });
    });
});
