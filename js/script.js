
/* ========================================
   THE SOLITUDE SPACE
   Website interactions
======================================== */

// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after selecting a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Dark and light theme switch
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("solitude-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

function updateThemeButton() {
  if (!themeToggle) return;

  const isLight = document.body.classList.contains("light-theme");

  themeToggle.textContent = isLight ? "☾" : "☼";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

updateThemeButton();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem(
      "solitude-theme",
      isLight ? "light" : "dark"
    );

    updateThemeButton();
  });
}

// Automatic copyright year
const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


/* Selected Work project filters */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    // Update the active filter button
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    // Show matching project cards
    projectCards.forEach((card) => {
      const matchesFilter =
        selectedFilter === "all" ||
        card.dataset.category === selectedFilter;

      card.hidden = !matchesFilter;
    });
  });
});
