document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector('.critical-cam');

    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let div = entry.target
                div.style.background = `url('${entry.target.getAttribute('data-src')}')`;
                div.style.backgroundSize = '100%'
                entry.target.removeAttribute('data-src');
                obs.unobserve(div)
            }
        });

    });
    obs.observe(target);

}, !1);
