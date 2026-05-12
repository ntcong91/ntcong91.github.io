function handleTheme() {
  if (window.tippy) {
    tippy(".link", { placement: "bottom" });
  }

  var toggle = document.querySelector(".js-change-theme");
  var root = document.documentElement;

  function applyTheme(mode) {
    if (mode === "dark") {
      root.classList.add("theme-dark");
      if (toggle) toggle.innerHTML = "☀️";
    } else {
      root.classList.remove("theme-dark");
      if (toggle) toggle.innerHTML = "🌙";
    }
    try {
      localStorage.setItem("theme", mode);
    } catch (e) {}
  }

  var stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {}

  if (stored === "dark") {
    applyTheme("dark");
  } else if (stored === "light") {
    applyTheme("light");
  } else {
    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var isDark = root.classList.contains("theme-dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }
}
