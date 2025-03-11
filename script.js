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


window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');  // All sections on the page
    let navLinks = document.querySelectorAll('.button.header');  // Navigation links with class 'header'

    let currentScrollPos = window.scrollY; // Current scroll position

    sections.forEach((section, index) => {
        // Check if section is in the viewport
        if (
            currentScrollPos >= section.offsetTop - this.window.screen.height/3 &&
            currentScrollPos < section.offsetTop + section.offsetHeight - this.window.screen.height/3
        ) {
            // Remove 'active' from all nav items
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add 'active' to the corresponding nav item
            navLinks[index].classList.add('active');
        }
    });
});