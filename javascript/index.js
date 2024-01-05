Shery.mouseFollower();
Shery.makeMagnet(".magnet");


// loaing animation
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
    smooth: true,
    mobile: {
        breakpoint: 0,
        smooth: true,
    },
    tablet: {
        breakpoint: 0,
        smooth: true,
    },
});

// window.addEventListener('pageshow', function (event) {
//     if (event.persisted) {
//         // Page is loaded from back/forward cache
//         scroll.update();
//     } else {
//         // Page is fully reloaded
//         location.reload();
//     }
// });

// Attach smooth scroll to navigation links with data-scroll-to attribute
document.addEventListener('DOMContentLoaded', function () {
    setupSmoothScroll();

    window.addEventListener('popstate', function (event) {
        // Reapply smooth scroll setup when navigating back
        setupSmoothScroll();
    });

    function setupSmoothScroll() {
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
                        offsetY: 50, // Adjust this offset based on layout
                    },
                    onComplete: () => {
                        // If using Locomotive Scroll, update after smooth scroll
                        if (typeof scroll !== 'undefined') {
                            scroll.update();
                        }
                    },
                });
            }
        }
    }
});



// document.addEventListener('DOMContentLoaded', function () {
//     const scrollToTopButton = document.getElementById('scroll-to-top');

//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 100) {
//             scrollToTopButton.style.opacity = '1';
//             scrollToTopButton.style.pointerEvents = 'auto';
//         } else {
//             scrollToTopButton.style.opacity = '0';
//             scrollToTopButton.style.pointerEvents = 'none';
//         }
//     });

//     scrollToTopButton.addEventListener('click', function () {
//         gsap.to(window, {
//             duration: 1,
//             scrollTo: {
//                 y: '#home',
//                 offsetY: 0,
//             },
//         });
//     });
// });

// image animation

document.querySelectorAll(".workcontent").forEach(function (elem) {
    var rotate = 0;
    var difference = 0;

    elem.addEventListener("mouseleave", function (details) {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        })
    });

    elem.addEventListener("mousemove", function (details) {
        var isOverBtn = isOverPage4Btn(details, elem);

        difference = details.clientX - rotate;    //------------------->   it finds the difference between the current mouse position and the previous mouse position
        rotate = details.clientX;                 //------------------->   it finds the current mouse position  

        // and we want that if we move cursor fast then it do not rotate fully we want that it rotate only  20% of the total difference then we use 
        // the following code

        // gsap.utils.clamp(-20, 20, difference);    //------------------->   it clamps the value between -20 and 20


        // it finds the mouse position relative to the element like how much it is far from the top and left of the div 
        // console.log(details.clientY - elem.getBoundingClientRect().top);
        var diff = details.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"), {
            opacity: isOverBtn ? 0 : 1,
            ease: "power3",
            duration: 0.5,
            top: diff,
            left: details.clientX - elem.getBoundingClientRect().left,
            rotate: gsap.utils.clamp(-20, 20, difference * 0.5),
        });
    });
});

function isMouseOverElement(event, element) {
    var rect = element.getBoundingClientRect();
    return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
}

function isOverPage4Btn(details, elem) {
    var page4Btn = elem.querySelector(".page4btn a");
    return isMouseOverElement(details, page4Btn);
}

// page animation
const links = document.querySelectorAll(".link");
const transition = document.querySelector(".transition");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        transition.classList.add("slide");

        setTimeout(() => {
            window.location = link.href;
        }, 900);
    });
});
