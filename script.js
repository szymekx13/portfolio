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

//Animacja wpisywania tekstu about me
const wyrazy = ["High-school student", "Programmer", "Web developer",];
let index = 0;
let letterindex = 0;

function erase(){
  const word = wyrazy[index];
  const part = word.slice(0, letterindex - 1);
  document.getElementById("typewriter").textContent = part;

  letterindex--;

  if(letterindex>0){
    setTimeout(erase, 50);
  }else{
    index++;
    if(index>=wyrazy.length) index = 0;
    setTimeout(write, 300)
  }
}

function write(){
  const word = wyrazy[index];
  const part = word.slice(0, letterindex + 1);
  document.getElementById("typewriter").textContent = part;

  letterindex++;
  
  if(letterindex<word.length){
    setTimeout(write, 100);
  }else if(letterindex == word.length){
    setTimeout(erase, 1000);
  }
}

write();
//Animacja dla tech-icons żeby "załadowały się" po najechaniu 
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const techIconGroups = entry.target.querySelectorAll(".tech-icons");
        techIconGroups.forEach(group => {
          group.classList.add("animate-tech-icons");
        });
        observer.unobserve(entry.target); // tylko raz
      }
    });
  }, {
    threshold: 0.3
  });

  const sectionTechno = document.querySelector("#techno");
  if (sectionTechno) observer.observe(sectionTechno);
});
