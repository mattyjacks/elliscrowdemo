// New Hampshire Troopers Association - Unified Navigation Module

// Function to load navigation and footer
function loadLayoutElements() {
    loadNavigation();
    loadFooter();
    setActiveNavLink();
}

// Load navigation header
function loadNavigation() {
    const header = document.querySelector('header');
    if (!header) return;

    header.innerHTML = `
        <div class="header-content">
            <div class="logo-section">
                <div class="logo-badge">
                    <img src="images/troopersLogo.jpg" alt="NH Troopers Association Logo">
                </div>
                <div class="site-title">
                    <h1>New Hampshire Troopers Association</h1>
                    <p>Supporting NH Troopers & Community Programs</p>
                </div>
            </div>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html" data-page="index">Home</a></li>
                    <li><a href="about.html" data-page="about">About Us</a></li>
                    <li><a href="membership.html" data-page="membership">Membership</a></li>
                    <li><a href="events.html" data-page="events">Events</a></li>
                    <li><a href="contact.html" data-page="contact">Contact</a></li>
                    <li><a href="https://rallypay.com/nhta" target="_blank" rel="noopener" style="background: var(--accent-color); border-color: var(--gold-accent);">💙 DONATE</a></li>
                </ul>
            </nav>
        </div>
    `;
}

// Load footer
function loadFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-logo">
            <img src="images/troopersLogo.jpg" alt="New Hampshire Troopers Association">
        </div>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Support Our Mission</h3>
                <p>Your donations fund vital programs including the DARE drug education initiative, Line of Duty death benefits, criminal justice scholarships, and the CHAD children's hospital program.</p>
                <p style="margin-top: 1rem;">
                    <a href="https://rallypay.com/nhta" target="_blank" rel="noopener" style="display: inline-block; background: var(--accent-color); color: white; padding: 0.75rem 1.5rem; border-radius: 25px; font-weight: 700; margin-top: 0.5rem;">💙 Donate Now</a>
                </p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="membership.html">Membership</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="https://rallypay.com/nhta" target="_blank" rel="noopener" style="color: var(--gold-accent); font-weight: 700;">Donate</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Information</h3>
                <p>107 N State St<br>
                Concord, NH<br>
                Phone: (603) 856-7351<br>
                Email: <a href="mailto:golf@nhtrooper.org">golf@nhtrooper.org</a></p>
            </div>
            <div class="footer-section">
                <h3>Connect With Us</h3>
                <p>Stay updated with the latest news and events from the New Hampshire Troopers Association.</p>
                <p style="margin-top: 1rem;">
                    <a href="https://www.facebook.com/NHTroopers/" target="_blank" rel="noopener">Facebook</a> | 
                    <a href="https://www.instagram.com/nhtroopers/" target="_blank" rel="noopener">Instagram</a>
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} New Hampshire Troopers Association. All rights reserved.</p>
            <p style="margin-top: 0.5rem; font-size: 0.85rem;">
                This is a demonstration website. Not affiliated with the official organization.
            </p>
        </div>
    `;
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add fade-in animation to elements as they come into view
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards, info boxes, and sections
    document.querySelectorAll('.card, .info-box, .stat-box, .event-card').forEach(el => {
        observer.observe(el);
    });
}

// Form submission handler (for contact form)
function initFormHandler() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        alert('Thank you for your message! The New Hampshire Troopers Association will contact you soon.\n\n(Note: This is a demo site - no actual email will be sent)');
        
        // Reset form
        form.reset();
        
        console.log('Form data:', data);
    });
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadLayoutElements();
    initSmoothScroll();
    initScrollAnimations();
    initFormHandler();
    
    // Add a small delay before showing animations
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility for animations
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        setActiveNavLink();
    }
});
