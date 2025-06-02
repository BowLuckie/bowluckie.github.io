document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.content img').forEach(img => {
        img.addEventListener('mousemove', function(e) {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const percentX = (x / rect.width - 0.5) * 2; // -1 to 1
            const percentY = (y / rect.height - 0.5) * 2; // -1 to 1
            const maxTilt = 25; // increase for more sensitivity
            const scale = 1.22; // slightly larger scale
            // Use a little smoothing for more natural feel
            const rotateY = percentX * maxTilt;
            const rotateX = -percentY * maxTilt;
            img.style.transform = `perspective(600px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        img.addEventListener('mouseleave', function() {
            img.style.transform = '';
        });
    });
});
