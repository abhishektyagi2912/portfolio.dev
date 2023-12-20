Shery.mouseFollower();
Shery.makeMagnet(".magnet");

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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