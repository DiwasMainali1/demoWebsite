document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    searchButton.addEventListener('click', function() {
        searchResults.innerHTML = `
            <div class="search-results-content">
                <span class="close-results">&times;</span>
                <p>No results available</p>
            </div>
        `;
        searchResults.style.display = 'block';

        const closeButton = searchResults.querySelector('.close-results');
        closeButton.addEventListener('click', function() {
            searchResults.style.display = 'none';
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container') && !event.target.closest('.search-results')) {
            searchResults.style.display = 'none';
        }
    });
});