const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerIconClose = document.getElementById("hamburger-icon-close");
const hamburgerMenu = document.getElementById("hamburger-menu");
const overlay = document.getElementById("overlay");

// open mobile menu
hamburgerIcon.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    hamburgerMenu.classList.toggle("open");
    overlay.classList.toggle("open");
});

// close mobile menu
hamburgerIconClose.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    hamburgerMenu.classList.remove("open");
    overlay.classList.remove("open");
});

// clicking outside closes mobile menu
document.addEventListener("click", (e) => {
    if (!hamburgerMenu.contains(e.target) &&
        !hamburgerIcon.contains(e.target)
    ) {
        hamburgerMenu.classList.remove("open");
        overlay.classList.remove("open");
    }
});