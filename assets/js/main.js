/**
 * Organic Meal - Main JavaScript
 * Handles Sidebar, Product Logic, and Hero Slider
 */

/* --- 1. Global State --- */
/* --- 1. Global State --- */
let state = {
    size: '500g',
    price: 2500,
    qty: 1
};

const PHONE_NUMBER = "923274892884";

/* --- 2. Sidebar Toggle --- */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

// Close sidebar on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    }
});

/* --- 3. Product Logic --- */
function selectSize(size, price) {
    state.size = size;
    state.price = price;

    // Update UI highlights
    const buttons = document.querySelectorAll('.size-btn');
    buttons.forEach(btn => {
        // Simple text check or logic to find which button was clicked
        if (btn.innerText.includes(size)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    calculateTotal();
}

function updateQty(change) {
    const newQty = state.qty + change;
    if (newQty >= 1) {
        state.qty = newQty;
        document.getElementById('qty').value = state.qty;
        calculateTotal();
    }
}

function calculateTotal() {
    const total = state.price * state.qty;
    const totalEl = document.getElementById('totalPrice');
    if (totalEl) {
        totalEl.textContent = `Rs ${total}`;
    }
}

/* --- 4. WhatsApp Order --- */
function orderNow() {
    const message = `*New Order - DiaFit Energy Balls*
---------------------------
📦 Size: ${state.size}
🔢 Quantity: ${state.qty}
💰 Total: Rs ${state.price * state.qty}
---------------------------
Payment: 50% Advance + 50% COD`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

/* --- 5. Hero Slider --- */
document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider (30 seconds interval)
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 30000; // 30 seconds

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    /* --- 6. Product Image Slider (45s) --- */
    const productSlides = document.querySelectorAll('.product-slide');
    if (productSlides.length > 0) {
        let currentProdSlide = 0;
        const prodInterval = 45000; // 45 seconds

        setInterval(() => {
            productSlides[currentProdSlide].classList.remove('active');
            currentProdSlide = (currentProdSlide + 1) % productSlides.length;
            productSlides[currentProdSlide].classList.add('active');
        }, prodInterval);
    }
});
