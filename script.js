// 🔄 AKTUALIZACJA LOKALNEGO CZASU
function updateClock() {
    const teraz = new Date();
    const godzina = String(teraz.getHours()).padStart(2, "0");
    const minuta = String(teraz.getMinutes()).padStart(2, "0");

    const localtime = document.getElementById("local-time");
    if (localtime) {
        localtime.textContent = " " + godzina + ":" + minuta;
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-tech-icons");
        observer.unobserve(entry.target); // tylko raz
      }
    });
  }, {
    threshold: 0.2
  });

  const techIcons = document.querySelector(".tech-icons");
  if (techIcons) observer.observe(techIcons);
});
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-tech-icons");
        observer.unobserve(entry.target); // tylko raz
      }
    });
  }, {
    threshold: 0.2
  });

  // 🔁 Pobierz wszystkie sekcje tech-icons i dodaj obserwatora
  const techIconsAll = document.querySelectorAll(".tech-icons");
  techIconsAll.forEach(icon => observer.observe(icon));

  // 🔽 Menu mobilne
  const toggleMenu = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  toggleMenu.addEventListener("click", () => {
    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "flex";
    }
  });


    // Auto-zamknięcie po kliknięciu w link
    const links = mobileNav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.style.display = "none";
      });
    });
  });
AOS.init({
    once: true, // animuje tylko raz
    duration: 800, // czas animacji w ms
    easing: 'ease-in-out', // styl animacji
  });

/* created better script in other file
<script>
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    const timeEl = document.getElementById('local-time');
    if (timeEl) {
      timeEl.textContent = `Local Time: ${timeString}`;
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
</script>
*/
// ikony w sidebar dostały animacje po kliknięciu w nie
document.querySelectorAll('.sidebar-icons img').forEach(icon => {

  icon.addEventListener('mousedown', () => {
    icon.style.transform = 'scale(0.8)';
  })

  icon.addEventListener('mouseup', () => {
    icon.style.transform = 'scale(1)';
  })

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  })

})
// ikony w sekcji social-icons mają taką samą animacje jak te w sidebar
document.querySelectorAll('.social-icons img').forEach(icon => {

  icon.addEventListener('mousedown', () => {
    icon.style.transform = 'scale(0.8)';
  })

  icon.addEventListener('mouseup', () => {
    icon.style.transform = 'scale(1)';
  })

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  })

})
// Scrollspy – podświetlanie aktywnej sekcji w nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});
// Dodanie efektu hover dla linków w nawigacji
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("hover-effect");
  });

  link.addEventListener("mouseleave", () => {
    link.classList.remove("hover-effect");
  });
});
