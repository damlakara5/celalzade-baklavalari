document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Hero carousel: works with a single slide today, and automatically
// picks up extra ".hero-slide" elements (and shows dots) once more
// hero images are added later.
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.getElementById("heroDots");

if (heroSlides.length > 1) {
  heroDots.hidden = false;

  heroSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Slayt ${index + 1}`);
    if (index === 0) dot.classList.add("is-active");
    dot.addEventListener("click", () => showSlide(index));
    heroDots.appendChild(dot);
  });

  let current = 0;

  function showSlide(index) {
    heroSlides[current].classList.remove("is-active");
    heroDots.children[current].classList.remove("is-active");
    current = index;
    heroSlides[current].classList.add("is-active");
    heroDots.children[current].classList.add("is-active");
  }

  setInterval(() => {
    showSlide((current + 1) % heroSlides.length);
  }, 6000);
}
