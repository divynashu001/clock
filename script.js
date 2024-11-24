let hr = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');

function displayTime() {
    let date = new Date();

    // Getting hours, minutes, and seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Adjusting hours for 12-hour format
    hh = hh % 12;

    // Calculate rotation for each hand
    let hRotation = 30 * hh + mm / 2; // 30 degrees per hour plus half a degree per minute
    let mRotation = 6 * mm; // 6 degrees per minute
    let sRotation = 6 * ss; // 6 degrees per second

    // Apply the rotations to the styles
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Update the time every second
setInterval(displayTime, 1000);

// Initialize the clock display
displayTime();
