document.addEventListener("DOMContentLoaded", function () {
    // Custom tilt for all .img-border elements
    document.querySelectorAll('.img-border').forEach(function (tiltEl) {
        let mouseMoveHandler = function (e) {
            const rect = tiltEl.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const maxTilt = 25;
            const tiltX = ((y - centerY) / centerY) * maxTilt;
            const tiltY = ((x - centerX) / centerX) * maxTilt;
            const scale = 1.35;
            tiltEl.style.transform = `perspective(600px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
        };
        let resetHandler = function () {
            tiltEl.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
        };
        tiltEl.addEventListener('mousemove', mouseMoveHandler);
        tiltEl.addEventListener('mouseleave', resetHandler);
        tiltEl.addEventListener('mouseenter', function () {
            tiltEl.style.transition = 'transform 0.2s cubic-bezier(.03,.98,.52,.99)';
        });
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
