// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');

    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            // Close menu
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            // Open menu
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });

    // Close mobile menu when clicking on navigation links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const featuredSection = document.querySelector('.featured-products');
            if (featuredSection) {
                featuredSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }

    // Product card interactions
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const detailsBtn = card.querySelector('.product-overlay button');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Add product details functionality here
                console.log('Ver detalhes clicked for product:', card.querySelector('.product-title').textContent);
            });
        }
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const newsletterBtn = newsletterForm.querySelector('.newsletter-btn');
        const newsletterInput = newsletterForm.querySelector('.newsletter-input');
        
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Add newsletter subscription logic here
                console.log('Newsletter subscription for:', email);
                newsletterInput.value = '';
                
                // Show success message (you can style this)
                const originalText = newsletterBtn.textContent;
                newsletterBtn.textContent = 'Inscrito!';
                newsletterBtn.style.background = '#22c55e';
                
                setTimeout(() => {
                    newsletterBtn.textContent = originalText;
                    newsletterBtn.style.background = '';
                }, 2000);
            } else {
                // Show error message
                newsletterInput.style.borderColor = '#ef4444';
                setTimeout(() => {
                    newsletterInput.style.borderColor = '';
                }, 3000);
            }
        });

        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }

    // Hero buttons functionality
    const exploreBtn = document.querySelector('.hero-buttons .btn-luxury');
    const lookbookBtn = document.querySelector('.hero-buttons .btn-outline-luxury');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const featuredSection = document.querySelector('.featured-products');
            if (featuredSection) {
                featuredSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }

    if (lookbookBtn) {
        lookbookBtn.addEventListener('click', function() {
            // Add lookbook functionality here
            console.log('Ver Lookbook clicked');
        });
    }

    // Shopping cart functionality
    const cartBtns = document.querySelectorAll('.cart-btn');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add cart functionality here
            console.log('Cart clicked');
        });
    });

    // Search functionality
    const searchBtns = document.querySelectorAll('.icon-btn:has(svg circle)');
    searchBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add search functionality here
            console.log('Search clicked');
        });
    });

    // User profile functionality
    const userBtns = document.querySelectorAll('.icon-btn:has(svg circle[cx="12"])');
    userBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add user profile functionality here
            console.log('User profile clicked');
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.product-card, .section-header');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Utility function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for all anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});

// Add loading animation to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-luxury') || e.target.classList.contains('btn-outline-luxury')) {
        const originalText = e.target.textContent;
        e.target.style.pointerEvents = 'none';
        
        setTimeout(() => {
            e.target.style.pointerEvents = '';
        }, 300);
    }
});