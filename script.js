const THEME_KEY = "preferredTheme";

const themeSelect = document.getElementById("theme-select");

// Apply a theme class to <body>
function applyTheme(themeName) {
  document.body.classList.remove("theme-light", "theme-dark", "theme-pastel");

  switch (themeName) {
    case "dark":
      document.body.classList.add("theme-dark");
      break;
    case "pastel":
      document.body.classList.add("theme-pastel");
      break;
    case "light":
    default:
      document.body.classList.add("theme-light");
      break;
  }
}

// Load saved theme when the page loads
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  if (themeSelect) {
    themeSelect.value = savedTheme;
  }
}

// Save the new theme when user changes it
if (themeSelect) {
  themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    localStorage.setItem(THEME_KEY, selectedTheme);
    applyTheme(selectedTheme);
  });
}

// Initialize on first load
initTheme();