// Fade-in sections when scrolling
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// ----------------------
// EmailJS Contact Form
// ----------------------
(function(){
    emailjs.init("4Rs_CpUjRYoHNrQOi"); // Your public key
})();

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = "Sending… ⏳";
        formMessage.style.color = "black";

        emailjs.sendForm('service_aasimjavid', 'template_copypbj', this)
            .then(() => {
                formMessage.textContent = "Message sent successfully! ✅";
                formMessage.style.color = "green";
                this.reset(); // Clear the form
            }, (error) => {
                formMessage.textContent = "Oops… something went wrong. ❌";
                formMessage.style.color = "red";
                console.error("EmailJS error:", error);
            });
    });
}