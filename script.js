const nightSky = document.getElementById('nightSky');
const starCount = 100;
const lullaby = document.getElementById('lullaby');
const playButton = document.getElementById('playButton');
const musicStatus = document.getElementById('musicStatus');

// Create stars for the night sky
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

// Music player functionality
let isPlaying = false;

function updateMusicStatus() {
    if (isPlaying) {
        musicStatus.textContent = "Nhạc đang phát 🎵";
        musicStatus.classList.add("playing");
        playButton.classList.add("active");
    } else {
        musicStatus.textContent = "Nhạc đang tắt";
        musicStatus.classList.remove("playing");
        playButton.classList.remove("active");
    }
}

function togglePlay() {
    if (isPlaying) {
        lullaby.pause();
        isPlaying = false;
    } else {
        lullaby.play().catch(function(error) {
            console.log("Không thể phát nhạc: ", error);
        });
        isPlaying = true;
    }
    updateMusicStatus();
}

playButton.addEventListener('click', togglePlay);

// Try autoplay on load (will work on desktop but likely not on mobile)
window.addEventListener('load', function() {
    lullaby.play().then(function() {
        isPlaying = true;
        updateMusicStatus();
    }).catch(function(error) {
        console.log("Không thể tự động phát nhạc: ", error);
        isPlaying = false;
        updateMusicStatus();
    });
});

// Background color animation
let hue = 230; 
function updateBackgroundColor() {
    document.body.style.backgroundColor = `hsl(${hue}, 65%, 25%)`;
    hue = (hue + 0.1) % 260;
    if (hue < 230) hue = 230;
    requestAnimationFrame(updateBackgroundColor);
}

updateBackgroundColor();