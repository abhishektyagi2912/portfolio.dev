Shery.mouseFollower();
Shery.makeMagnet(".magnet");

var tl = gsap.timeline()

tl.to("#home", {
    y: "100vh",
    scale: 0.6,
    duration: 0
})
tl.to("#home", {
    y: "30vh",
    duration: 1,
    delay: 1
})
tl.to("#home", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.7
})

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Attach smooth scroll to navigation links with data-scroll-to attribute
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-scroll-to]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');

            if (targetId.charAt(0) === '#') {
                e.preventDefault();
                smoothScroll(targetId);
            }
        });
    });

    function smoothScroll(targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetElement,
                    offsetY: 50, // Adjust this offset based on your layout
                },
                onComplete: () => {
                    scroll.update(); // Update Locomotive Scroll after smooth scroll
                },
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.pointerEvents = 'auto';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.pointerEvents = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '#home',
                offsetY: 0,
            },
        });
    });
});

function sendEmail() {
    window.location.href = "mailto:your-abhishekpersonal2912@gmail.com?subject=I%20want%20to%20work%20with%20you";
}