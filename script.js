/* Hamburger Menu Toggle Function */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/* Contact Form Functionality */
const form = document.getElementById('form');
const sendBtn = document.getElementById('sendBtn');
const success = document.getElementById('success');

// Function to shake an element if validation fails
function shake(el) {
    el.classList.remove('shake');
    void el.offsetWidth; // Trigger reflow
    el.classList.add('shake');
}

// Event listener for form submission
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fields = [...form.querySelectorAll('.input, .textarea')];
        const firstInvalid = fields.find(f => !f.checkValidity() || !f.value.trim());
        
        if (firstInvalid) {
            shake(firstInvalid);
            firstInvalid.focus();
            return;
        }

        sendBtn.classList.add('loading');

        // Simulate sending a message
        setTimeout(() => {
            sendBtn.classList.remove('loading');
            sendBtn.classList.add('sent');
            success.classList.add('show');
            form.reset();

            // Reset button and success message after a few seconds
            setTimeout(() => {
                sendBtn.classList.remove('sent');
                success.classList.remove('show');
            }, 3800);
        }, 1400);
    });
}

// Remove shake animation class after it finishes
document.addEventListener('animationend', (ev) => {
    if (ev.target.classList.contains('shake')) {
        ev.target.classList.remove('shake');
    }
});