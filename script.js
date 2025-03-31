document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".title, .subtitle").forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });
});
