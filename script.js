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