const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const hashNavLinks = navLinks.filter((link) => link.getAttribute("href")?.startsWith("#"));
let ticking = false;

function updateActiveNav() {
  if (!sections.length || !hashNavLinks.length) {
    ticking = false;
    return;
  }

  const headerOffset = document.querySelector(".site-header")?.offsetHeight ?? 0;
  const currentY = window.scrollY + headerOffset + 90;
  let activeSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= currentY) {
      activeSection = section;
    }
  });

  hashNavLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeSection.id}`);
  });

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveNav);
      ticking = true;
    }
  },
  { passive: true },
);

updateActiveNav();
