Shery.mouseFollower();
Shery.makeMagnet(".magnet");
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// const scroll = new LocomotiveScroll();

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



