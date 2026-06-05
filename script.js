const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document
  .querySelectorAll(".section, .hero-content, .hero-visual")
  .forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.background =
    window.scrollY > 50
      ? "rgba(10, 10, 15, 0.95)"
      : "rgba(10, 10, 15, 0.8)";
});
