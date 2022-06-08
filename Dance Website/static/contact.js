let root = document.querySelector(":root");
let submit_btn = document.getElementById("submit-btn");

submit_btn.addEventListener("mouseenter", () => {
    root.style.setProperty("--left-position", "0%");
    submit_btn.addEventListener("mouseleave", () => {
        root.style.setProperty("--left-position", "-100%");
    });
});