const counters = document.querySelectorAll('.count');
const navbar = document.querySelector('.navbar');
const navborder = document.querySelector('.nav-box');


counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace('+', '');
    const increment = Math.max(1, target / 500); // Smaller increment → slower

    if (count < target) {
      counter.innerText = '+' + Math.ceil(count + increment);
      setTimeout(updateCount, 100); // Slower speed (higher number = slower)
    } else {
      counter.innerText = '+' + target;
    }
  };


  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.unobserve(counter);
    }
  }, { threshold: 1 });

  observer.observe(counter);
});


  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('no-border');
      navborder.classList.add('no-shadow')
    } else {
      navbar.classList.remove('no-border');
       navborder.classList.remove('no-shadow')
    }
  });

const text = "About Me";
const typeTarget = document.getElementById("typewriter-text");
let index = 0;
let isDeleting = false;
let hasErasedOnce = false;
let hasRetyped = false;

function typeWriterOnceEraseThenStop() {
  if (!isDeleting) {
    typeTarget.textContent = text.substring(0, index);
    if (index < text.length) {
      index++;
      setTimeout(typeWriterOnceEraseThenStop, 150);
    } else {
      if (!hasErasedOnce) {
        isDeleting = true;
        setTimeout(typeWriterOnceEraseThenStop, 1000); // pause before erasing
      }
    }
  } else {
    typeTarget.textContent = text.substring(0, index);
    if (index > 0) {
      index--;
      setTimeout(typeWriterOnceEraseThenStop, 80);
    } else {
      if (!hasRetyped) {
        isDeleting = false;
        hasErasedOnce = true;
        hasRetyped = true;
        setTimeout(typeWriterOnceEraseThenStop, 500); // pause before retyping
      }
    }
  }
}

window.addEventListener("load", typeWriterOnceEraseThenStop);

    const workTarget = document.getElementById("typewriter-work");
  const workText = "Work Experience";
  let workIndex = 0;

  function typeWork() {
    if (workIndex < workText.length) {
      workTarget.textContent += workText.charAt(workIndex);
      workIndex++;
      setTimeout(typeWork, 80); // adjust typing speed here
    }
  }

  window.addEventListener("load", typeWork);

const staticLine = "Hi! I'm <span class='highlight-pink'>Ana</span>,";
const dynamicPhrases = [
  "I design ✍️",
  "I create ✍️",
  "I build ✍️"
];
const finalAppend = "<br> top <span class='highlight'>notch websites</span>";

const target = document.getElementById("typewriter-h1");

let phase = "static"; // "static", "dynamic", "append"
let phraseIndex = 0;
let charIndex = 0;
let ting = false;
let appendCharIndex = 0;

function typeEffect() {
  if (phase === "static") {
    target.innerHTML = staticLine.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === staticLine.length) {
      phase = "dynamic";
      charIndex = 0;
      setTimeout(typeEffect, 500);
      
    const crown = document.getElementById("crown-image");
    crown.classList.add("show");
    } else {
      setTimeout(typeEffect, 60);
    }

  } else if (phase === "dynamic") {
    const currentPhrase = dynamicPhrases[phraseIndex];

    if (!ting) {
      charIndex++;
    } else {
      charIndex--;
    }

    const typed = currentPhrase.substring(0, charIndex);
    target.innerHTML = staticLine + "<br>" + typed;

    let delay = ting ? 40 : 70;

    if (!ting && charIndex === currentPhrase.length) {
      if (phraseIndex === dynamicPhrases.length - 1) {
        phase = "append";
        delay = 500;
      } else {
        ting = true;
        delay = 1000;
      }
    } else if (ting && charIndex === 0) {
      ting = false;
      phraseIndex++;
      delay = 500;
    }

    setTimeout(typeEffect, delay);

  } else if (phase === "append") {
    appendCharIndex++;
    const fullText = finalAppend.substring(0, appendCharIndex);
    target.innerHTML = "<br>" + staticLine + "<br>" + dynamicPhrases[2] + fullText;

    // Just compare against full HTML string length — NOT stripped text
    if (appendCharIndex < finalAppend.length) {
      setTimeout(typeEffect, 60);
    }
  }
}

window.addEventListener("load", typeEffect);

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Optional: Close menu when a link is clicked
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

