window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
};