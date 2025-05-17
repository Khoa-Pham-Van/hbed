
// Create stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 1}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsContainer.appendChild(star);
}

// Create shooting stars
setInterval(() => {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = `${Math.random() * 100}%`;
    shootingStar.style.top = `${Math.random() * 30}%`;
    starsContainer.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 5000);
}, 8000);

// Create floating hearts
const heartsContainer = document.getElementById('hearts');
setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const icons = ['💙', '🐬', '🐠', '🐡', '🦀', '🐙', '🌊', '⭐', '✨'];
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 4 + 4}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 2000);

// Add leaf sway animation
document.querySelectorAll('.leaf').forEach((leaf, index) => {
    leaf.style.animationDelay = `${index * 0.2}s`;
});

// Music controls
const audio = document.getElementById('lullaby');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().then(() => {
            playButton.classList.add('active');
            playButton.innerHTML = '<span class="icon">🎵</span><span>Đang phát nhạc...</span>';
        }).catch(error => {
            console.error("Không thể phát nhạc:", error);
            playButton.innerHTML = '<span class="icon">❌</span><span>Không thể phát nhạc</span>';
        });
    } else {
        audio.pause();
        playButton.classList.remove('active');
        playButton.innerHTML = '<span class="icon">🎵</span><span>Ấn vào để nghe nhạc</span>';
    }
});

// Add music visualizer effect when music is playing
audio.addEventListener('playing', () => {
    document.body.classList.add('music-playing');
    // Add some pulse effect to the ocean
    const ocean = document.querySelector('.ocean');
    ocean.style.animation = 'pulse 3s infinite alternate';
});

audio.addEventListener('pause', () => {
    document.body.classList.remove('music-playing');
    // Remove ocean animation
    const ocean = document.querySelector('.ocean');
    ocean.style.animation = '';
});