// Typing effect for the "Frontend Developer" text
const typingText = document.querySelector('.typing');
const words = ["Frontend Developer", "Web Designer", "Tech Enthusiast"];
let wordIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 150); // Adjust typing speed
    } else {
        setTimeout(deleteText, 1000); // Pause before deleting
    }
}

function deleteText() {
    if (letterIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteText, 100); // Adjust deleting speed
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(type, 500); // Pause before typing the next word
    }
}

// Start the typing effect
type();

// Smooth scrolling effect for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll to the target section smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Simple form submission alert
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Display an alert with the form details (for demonstration)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}!\n\n` +
          `Email: ${email}\n` +
          `Subject: ${subject}\n` +
          `Message: ${message}`);

    // Reset the form after submission
    contactForm.reset();
});
