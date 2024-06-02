window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
};

// This function will run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the loading page element
  var loader = document.getElementById("loading-page");
  // Hide the loading page
  loader.style.display = "none";
});





