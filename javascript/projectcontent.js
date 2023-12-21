Shery.mouseFollower();
Shery.makeMagnet(".magnet");

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

// time finder and set to the html 

function updateDateTime() {
    const timeElement = document.getElementById("time");

    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone: 'Asia/Kolkata',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    timeElement.textContent = formattedDate.replace(/,([^,]*)$/, ' |$1');
}

updateDateTime();

setInterval(updateDateTime, 1000);


// page transition
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