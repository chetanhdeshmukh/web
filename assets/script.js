const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation?.classList.toggle("open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuButton?.setAttribute("aria-expanded", "false");
        navigation.classList.remove("open");
    });
});

document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
});

if (!reducedMotion) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px" });

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

    window.addEventListener("pointermove", (event) => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    }, { passive: true });
} else {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
}
