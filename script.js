const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
);

revealElements.forEach((element) => {
    observer.observe(element);
});