document.addEventListener("DOMContentLoaded", function () {
    
    VanillaTilt.init(document.querySelectorAll(".img-border"), {
        max: 25,
        speed: 300,
        glare: false,
        scale: 1.02,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    });


    
    document.querySelectorAll('.Power-Ride-Alpha, .Meinl-HCS, .Paiste\\ RUDE, .Meinl-Byzance, .Zildjan\\ K\\ Custom').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
    });
    
    document.querySelectorAll('.eloy-casagrande, .mike-portnoy, .Danny-Carrey, .Neal-Peart').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
    });
    
    document.querySelectorAll('.video-card').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
    });
    
    // Animate all description <p> tags within .content.recommendations
    document.querySelectorAll('.content.recommendations p').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
    });
    
    // Animate all h2, h3, img, and p elements inside .content blocks on all pages
    document.querySelectorAll('.content h2, .content h3, .content img, .content p').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
    });
    
    AOS.init();

    
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
    }
});
