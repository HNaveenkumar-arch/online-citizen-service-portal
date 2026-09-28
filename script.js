document.addEventListener("DOMContentLoaded", () => {

    const loaderWrapper = document.getElementById("loader-wrapper");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loaderWrapper.style.opacity = "0";

            setTimeout(() => {
                loaderWrapper.style.display = "none";

                AOS.init({
                    once: true,
                    offset: 50,
                    easing: 'ease-in-out',
                });

            }, 500);
        }, 800);
    });

    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const hamburger = document.getElementById("hamburger");
    const navContent = document.getElementById("navContent");
    const closeMenu = document.getElementById("closeMenu");
    const body = document.body;

    function openMenu() {
        navContent.classList.add("open");
        body.classList.add("no-scroll");
    }

    function closeNavMenu() {
        navContent.classList.remove("open");
        body.classList.remove("no-scroll");
    }

    hamburger.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeNavMenu);

    const navLinks = document.querySelectorAll(".nav-links li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeNavMenu();
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
});