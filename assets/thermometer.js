let position = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];
let maxDistance = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));

const thermometer = document.getElementById('thermometer');
const fill = thermometer.querySelector('.fill');

document.addEventListener('mousemove', (event) => {
    distance = Math.sqrt(Math.pow(event.clientX - position[0], 2) + Math.pow(event.clientY - position[1], 2));

    let temperature = 1 - (distance / maxDistance);
    console.log(`Temperature: ${temperature.toFixed(2)}`);
    fill.style.height = `${temperature * 95}%`;
});

document.addEventListener('click', (event) => {
    distance = Math.sqrt(Math.pow(event.clientX - position[0], 2) + Math.pow(event.clientY - position[1], 2));

    let temperature = 1 - (distance / maxDistance);
    if (temperature > 0.97) {
        alert("JERBOA");
    }
});