document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    const reserveModal = document.getElementById('reserveModal');
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const signOutBtn = document.getElementById('signOutBtn');
    const closeButtons = document.getElementsByClassName('close');
    const reserveButtons = document.getElementsByClassName('reserve-btn');
    const reserveCarName = document.getElementById('reserveCarName');

    // Check if user is signed in (simple check for demo)
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';

    // Update UI based on sign-in status
    if (isSignedIn) {
        signInBtn.style.display = 'none';
        signUpBtn.style.display = 'none';
        signOutBtn.style.display = 'block';
    } else {
        signInBtn.style.display = 'block';
        signUpBtn.style.display = 'block';
        signOutBtn.style.display = 'none';
    }

    // Sign In Button Click
    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        signInModal.style.display = 'block';
    });

    // Sign Up Button Click
    signUpBtn.addEventListener('click', function(e) {
        e.preventDefault();
        signUpModal.style.display = 'block';
    });

    // Sign Out Button Click
    signOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.setItem('isSignedIn', 'false');
        window.location.reload();
    });

    // Close Modal when clicking X
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            signInModal.style.display = 'none';
            signUpModal.style.display = 'none';
            reserveModal.style.display = 'none';
        });
    }

    // Close Modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
        if (event.target === signUpModal) {
            signUpModal.style.display = 'none';
        }
        if (event.target === reserveModal) {
            reserveModal.style.display = 'none';
        }
    });

    // Reserve Button Click
    for (let i = 0; i < reserveButtons.length; i++) {
        reserveButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            const carName = this.getAttribute('data-car');
            reserveCarName.textContent = carName;
            reserveModal.style.display = 'block';
        });
    }

    // Sign In Form Submission
    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signInEmail').value;
            const password = document.getElementById('signInPassword').value;
            
            // Simple validation for demo
            if (email && password) {
                localStorage.setItem('isSignedIn', 'true');
                signInModal.style.display = 'none';
                window.location.reload();
            } else {
                alert('Please enter both email and password');
            }
        });
    }

    // Sign Up Form Submission
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signUpName').value;
            const email = document.getElementById('signUpEmail').value;
            const password = document.getElementById('signUpPassword').value;
            const confirmPassword = document.getElementById('signUpConfirmPassword').value;
            
            // Simple validation for demo
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            localStorage.setItem('isSignedIn', 'true');
            signUpModal.style.display = 'none';
            window.location.reload();
        });
    }

    // Reserve Form Submission
    const reserveForm = document.getElementById('reserveForm');
    if (reserveForm) {
        reserveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('reserveName').value;
            const email = document.getElementById('reserveEmail').value;
            const phone = document.getElementById('reservePhone').value;
            const date = document.getElementById('reserveDate').value;
            const days = document.getElementById('reserveDays').value;
            
            if (name && email && phone && date && days) {
                alert(`Reservation confirmed for ${reserveCarName.textContent}!\nWe'll send details to ${email}`);
                reserveModal.style.display = 'none';
                reserveForm.reset();
            } else {
                alert('Please fill all fields');
            }
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}!`);
                this.reset();
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                alert(`Thank you for your message, ${name}! We'll contact you soon.`);
                this.reset();
            }
        });
    }
});