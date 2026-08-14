const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const startingTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

function applyTheme(theme) {
    const isDark = theme === "dark";

    root.dataset.theme = theme;
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );

    localStorage.setItem("portfolio-theme", theme);
}

applyTheme(startingTheme);

themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
});
