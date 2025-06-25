function updateClock(){
    const teraz = new Date();
    const godzina = String(teraz.getHours()).padStart(2, "0");
    const minuta = String(teraz.getMinutes()).padStart(2, "0");

    const localtime = document.getElementById("local-time");

    localtime.textContent = "Local time: " + godzina + ":" + minuta;

}
updateClock();
setInterval(updateClock, 1000);