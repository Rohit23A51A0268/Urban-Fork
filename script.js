// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Hover Effect on Menu Items
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
      const description = item.querySelector('.menu-description');
      description.style.display = 'block'; // Show the description on hover
  });

  item.addEventListener('mouseout', () => {
      const description = item.querySelector('.menu-description');
      description.style.display = 'none'; // Hide the description when not hovering
  });
});

// Reservation Form Confirmation
const reservationForm = document.getElementById('reservation-form');
const confirmationMessage = document.getElementById('confirmation-message');

reservationForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  // Display a confirmation message after submission
  confirmationMessage.textContent = `Your reservation for ${guests} guests on ${date} at ${time} is confirmed!`;
  confirmationMessage.style.color = '#28a745'; // Green color for success
  confirmationMessage.style.fontSize = '1.2rem';
});
