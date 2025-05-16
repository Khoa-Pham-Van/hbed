
const nightSky = document.getElementById('nightSky');
const starCount = 100;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.animationDuration = `${Math.random() * 3 + 1}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    nightSky.appendChild(star);
}

const lullaby = document.getElementById('lullaby');

window.addEventListener('load', function () {
    lullaby.play().catch(function (error) {
        console.log("Không thể tự động phát nhạc: ", error);
    });
});

document.addEventListener('click', function () {
    lullaby.play().catch(function (error) {
        console.log("Không thể phát nhạc sau khi click: ", error);
    });
});

setInterval(function () {
    if (lullaby.paused) {
        lullaby.play().catch(function (error) {
        });
    }
}, 1000);

let hue = 230; 

function updateBackgroundColor() {
    document.body.style.backgroundColor = `hsl(${hue}, 65%, 25%)`;
    hue = (hue + 0.1) % 260;
    if (hue < 230) hue = 230;
    requestAnimationFrame(updateBackgroundColor);
}

updateBackgroundColor();
