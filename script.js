// // Smooth scrolling between sections
// document.querySelectorAll('a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
let toggled = false;
function toggleBurger() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    // icon.classList.toggle("open");
    toggled = !toggled;
    if (toggled) {
        icon.innerHTML = "&#x2716;";
    } else {
        icon.innerHTML = "&#9776;"
    }    
}

const header = document.querySelector('header');
const headerButton = document.querySelectorAll('.button.header')

window.addEventListener('scroll', () => {
    if(this.scrollY > 50) {
        header.classList.add('shadow');
        for(let i=0; i<headerButton.length; i++) {
            headerButton[i].classList.add('shadow');
        }
    } else {
        header.classList.remove('shadow');
        for(let i=0; i<headerButton.length; i++) {
            headerButton[i].classList.remove('shadow');
        }
    }
})


window.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');  // All sections on the page
    let navLinks = document.querySelectorAll('.header');  // Navigation links with class 'header'

    // Function to update the active class based on scroll position
    function updateActiveLinkOnScroll() {
        let currentScrollPos = window.scrollY; // Current scroll position
        let sectionInView = false; // Flag to track if a section is in view

        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop;
            let sectionBottom = sectionTop + section.offsetHeight;

            // Check if the section is in the viewport
            if (
                currentScrollPos >= sectionTop - 100 && // When the top of the section is near the top of the viewport
                currentScrollPos < sectionBottom - 100  // When the bottom of the section is still within the viewport
            ) {
                // Remove 'active' from all nav items
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' to the corresponding nav item
                navLinks[index].classList.add('active');

                sectionInView = true; // Mark that a section is in view
            }
        });

        // If no section is in view (i.e., we've passed the last section), add active class to the last item
        if (!sectionInView) {
            let lastSection = sections[sections.length - 1];
            let lastSectionTop = lastSection.offsetTop;
            
            // Check if the scroll position is past the last section's top
            if (currentScrollPos >= lastSectionTop - 100) {
                navLinks[navLinks.length - 1].classList.add('active');
            }
        }
    }

    // Function to set active class based on URL hash
    function setActiveLinkFromHash() {
        let currentHash = window.location.hash || '#home'; // Default to '#home' if no hash in the URL

        // Remove 'active' class from all nav items
        navLinks.forEach(link => link.classList.remove('active'));

        // Check which section corresponds to the hash and add the 'active' class
        sections.forEach((section, index) => {
            if (section.id === currentHash.substring(1)) { // Compare section id with the hash
                navLinks[index].classList.add('active');
            }
        });
    }

    // Call the function to set active state when the page loads
    setActiveLinkFromHash();

    // Optionally, update the active state when the hash changes (e.g., after navigation links are clicked)
    window.addEventListener('hashchange', setActiveLinkFromHash);

    // Update active class on scroll
    window.addEventListener('scroll', updateActiveLinkOnScroll);

    // In case the page is loaded with a hash already in the URL, update the active class immediately
    updateActiveLinkOnScroll();
});