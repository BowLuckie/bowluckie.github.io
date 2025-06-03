document.addEventListener("DOMContentLoaded", function () {
    
    VanillaTilt.init(document.querySelectorAll(".img-border"), {
        max: 25,
        speed: 300,
        glare: false,
        scale: 1.02,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    });


    const bodyClass = document.body.className;
    if (
        bodyClass.includes('reviews') ||
        bodyClass.includes('recommendations') ||
        window.location.pathname.includes('reviews.html') ||
        window.location.pathname.includes('recommendations.html')
    ) {
        document.querySelectorAll('.content > *').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-duration', '700');
            el.setAttribute('data-aos-easing', 'ease-out-cubic');
        });
    }

    // Optionally, apply to all .content > * on all pages for consistency
    document.querySelectorAll('.content > *').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-duration', '700');
        el.setAttribute('data-aos-easing', 'ease-out-cubic');
    });

    
    AOS.init({
        once: false,
        duration: 700,
        easing: 'ease-out-cubic',
    });

    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const fadetime = 0.4;
    window.addEventListener("scroll", function () {
        if (backToTopBtn) {
            if (window.scrollY > 200) {
                backToTopBtn.style.transition = `opacity ${fadetime}s`;
                backToTopBtn.style.opacity = "1";
            } else {
                backToTopBtn.style.transition = `opacity ${fadetime}s`;
                backToTopBtn.style.opacity = "0";
            }
        }
    });
});
