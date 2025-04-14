// Toggle mobile menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide "Back to Top" button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    backToTopButton.style.display = 'none';
});

// Countdown from 0 to 120 for contracts completed
let count = 0;
const maxCount = 10000;
const countElement = document.getElementById('count');

function updateCount() {
    if (count < maxCount) {
        count = count+500;
        countElement.textContent = count;
    }
}

setInterval(updateCount, 100);

function donate() {
    alert('Thank you for your donation! Your support helps us continue our mission.');
}
let slideIndex = 1;

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<span>${item.name}</span><span>UGX${item.price.toFixed(2)}</span>`;
        cartItems.appendChild(div);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.circle-container');
    const circles = document.querySelectorAll('.circle');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const readMoreBtn = document.querySelector('.read-more-btn');
    const additionalContent = document.querySelector('.additional-content');
    let currentIndex = 0;
  
    function showCircle(index) {
      const offset = circles[index].offsetLeft - container.offsetLeft;
      container.scrollTo({ left: offset, behavior: 'smooth' });
    }
  
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : circles.length - 1;
      showCircle(currentIndex);
    });
  
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex < circles.length - 1) ? currentIndex + 1 : 0;
      showCircle(currentIndex);
    });
  
    // Auto-scroll every 30 seconds
    setInterval(function() {
      currentIndex = (currentIndex < circles.length - 1) ? currentIndex + 1 : 0;
      showCircle(currentIndex);
    }, 50000);
  
    // Read More functionality
    readMoreBtn.addEventListener('click', function() {
      if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
        additionalContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
      } else {
        additionalContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
      }
    });
  });
  
