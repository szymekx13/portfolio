// 🔄 AKTUALIZACJA LOKALNEGO CZASU
function updateClock() {
    const teraz = new Date();
    const godzina = String(teraz.getHours()).padStart(2, "0");
    const minuta = String(teraz.getMinutes()).padStart(2, "0");

    const localtime = document.getElementById("local-time");
    if (localtime) {
        localtime.textContent = "Local time: " + godzina + ":" + minuta;
    }
}

updateClock();
setInterval(updateClock, 1000);

// 🌙 PRZEŁĄCZNIK DARK/LIGHT MODE
const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.src = "icons/moon.svg"; // jasny motyw
  } else {
    themeIcon.src = "icons/sun.svg"; // ciemny motyw
  }
});