document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero > *');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Mute/unmute video logic
    const video = document.getElementById('mainVideo');
    const muteBtn = document.getElementById('muteToggle');
    if (video && muteBtn) {
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            muteBtn.textContent = video.muted ? '🔈 Unmute' : '🔇 Mute';
        });
        // Set initial button text
        muteBtn.textContent = video.muted ? '🔈 Unmute' : '�� Mute';
    }
}); 