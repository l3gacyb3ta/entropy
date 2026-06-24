// keep the initial position away from the very edges
const EDGE_PADDING = 100; // pixels from each edge
let position = [
    EDGE_PADDING + Math.random() * (window.innerWidth - EDGE_PADDING * 2),
    EDGE_PADDING + Math.random() * (window.innerHeight - EDGE_PADDING * 2)
];
let maxDistance = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));

const thermometer = document.getElementById('thermometer');
const fill = thermometer.querySelector('.fill');

/// check if mobile
const isMobile = window.innerWidth < 600;

if (!isMobile) {
    document.addEventListener('mousemove', (event) => {
        distance = Math.sqrt(Math.pow(event.clientX - position[0], 2) + Math.pow(event.clientY - position[1], 2));

        let temperature = 1 - (distance / maxDistance);
        // console.log(`Temperature: ${temperature.toFixed(2)}`);
        fill.style.height = `${temperature * 95}%`;
    });

    document.addEventListener('click', (event) => {
        distance = Math.sqrt(Math.pow(event.clientX - position[0], 2) + Math.pow(event.clientY - position[1], 2));

        let temperature = 1 - (distance / maxDistance);
        if (temperature > 0.97) {
            console.log(event);
            const popup = document.getElementById("jerboa-popup");

            
            if (!popup.src) {
                popup.style.left = `${event.pageX}px`;
                popup.style.top =  `${event.pageY}px`;
                popup.style.display = "block";
            }
            popup.src = "/assets/jerboa.gif";
            
            // position = [
            //     EDGE_PADDING + Math.random() * (window.innerWidth - EDGE_PADDING * 2),
            //     EDGE_PADDING + Math.random() * (window.innerHeight - EDGE_PADDING * 2)
            // ];

        };
    });
}

document.getElementById("slack-channel").addEventListener("click", (e) => {
    const target = e.currentTarget;

    if (typeof target.select === "function") {
        target.select();
        return;
    }

    const selection = window.getSelection();
    if (!selection) {
        return;
    }

    const range = document.createRange();
    range.selectNodeContents(target);
    selection.removeAllRanges();
    selection.addRange(range);
});


// const bg = document.querySelector('.bg-image');

// function updateBg() {
//   const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//   const percent = Math.min(Math.max(scrollPercent, 0), 1) * 100;
//   bg.style.backgroundPosition = `center ${percent}%`;
// }

// window.addEventListener('scroll', () => requestAnimationFrame(updateBg));
// updateBg();
