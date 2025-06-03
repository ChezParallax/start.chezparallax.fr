import { animate, inView } from "https://cdn.jsdelivr.net/npm/@motionone/dom/+esm";

// === ANIMATIONS SECTIONS (exemple, à adapter selon tes IDs/classes) ===
inView("#hero-lead", () => {
  animate("#hero-lead", { opacity: [0, 1], y: [-30, 0] }, { duration: 0.7, easing: "ease" });
});
// ... (continue toutes tes anims de sections comme sur OctoMate)

// === MailerLite/Freebie Animations (si besoin) ===
const freebieForm = document.getElementById('mailer-lite-form');
if (freebieForm) {
  freebieForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      mode: 'no-cors'
    }).then(() => {
      document.getElementById('confirmation-message').classList.remove('hidden');
      document.getElementById('error-message').classList.add('hidden');
    }).catch(() => {
      document.getElementById('error-message').classList.remove('hidden');
      document.getElementById('confirmation-message').classList.add('hidden');
    });
  });
}

// Animation cascade du HERO section
inView("#hero-lead", () => {
  animate("#hero-lead", { opacity: [0, 1], y: [-30, 0] }, { duration: 0.7, easing: "ease" });
});
inView("#hero-title", () => {
  animate("#hero-title", { opacity: [0, 1], y: [-30, 0] }, { delay: 0.10, duration: 0.7, easing: "ease" });
});
inView("#hero-desc", () => {
  animate("#hero-desc", { opacity: [0, 1], y: [-20, 0] }, { delay: 0.20, duration: 0.7, easing: "ease" });
});
inView("#hero-cta", () => {
  animate("#hero-cta", { opacity: [0, 1], scale: [0.97, 1] }, { delay: 0.33, duration: 0.6, easing: "ease" });
});

// Social proof block
inView("#hero-social-proof", () => {
  animate("#hero-social-proof", { opacity: [0, 1], y: [30, 0] }, { delay: 0.40, duration: 0.6, easing: "ease" });
  // Stagger avatars
  [1, 2, 3, 4, 5, 6].forEach((n, i) => {
    animate(`#hero-avatar-${n}`, { opacity: [0, 1], x: [-10, 0] }, { delay: 0.54 + i * 0.10, duration: 0.45, easing: "ease" });
  });
});

// Image hero (fade-in avec slide droite)
inView("#hero-img-col", () => {
  animate("#hero-img-col", { opacity: [0, 1], x: [30, 0] }, { delay: 0.2, duration: 0.8, easing: "ease" });
});

// Animation PROBLEME – Titre, items en cascade, note, CTA
inView("#probleme-title", () => {
  animate("#probleme-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
});
[1, 2, 3, 4].forEach((n, i) => {
  inView(`#probleme-item-${n}`, () => {
    animate(`#probleme-item-${n}`, { opacity: [0, 1], x: [-24, 0] }, { delay: 0.15 + i * 0.14, duration: 0.65, easing: "ease" });
  });
});
inView("#probleme-note", () => {
  animate("#probleme-note", { opacity: [0, 1], scale: [0.96, 1] }, { delay: 0.8, duration: 0.6, easing: "ease" });
});
inView("#probleme-cta", () => {
  animate("#probleme-cta", { opacity: [0, 1], scale: [0.97, 1] }, { delay: 1.05, duration: 0.55, easing: "ease" });
});

// Animation premium de la section Solution
inView("#solution-title", () => {
  animate("#solution-title", { opacity: [0, 1], y: [-28, 0] }, { duration: 0.7, easing: "ease" });
});
["#solution-p1", "#solution-p2", "#solution-p3", "#solution-p4"].forEach((id, i) => {
  inView(id, () => {
    animate(id, { opacity: [0, 1], x: [-18, 0] }, { delay: 0.09 + i * 0.10, duration: 0.56, easing: "ease" });
  });
});
inView("#solution-quote", () => {
  animate("#solution-quote", { opacity: [0, 1], scale: [0.97, 1] }, { delay: 0.55, duration: 0.54, easing: "ease" });
});
inView("#solution-cta", () => {
  animate("#solution-cta", { opacity: [0, 1], scale: [0.98, 1] }, { delay: 0.75, duration: 0.5, easing: "ease" });
});
inView("#solution-img-col", () => {
  animate("#solution-img-col", { opacity: [0, 1], x: [36, 0] }, { delay: 0.18, duration: 0.77, easing: "ease" });
});

// Animation premium de la section Bénéfices
inView("#benefices-title", () => {
  animate("#benefices-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
});
// Cascade des colonnes bénéfices (fade-in + slide up, avec delays)
[1, 2, 3].forEach((i) => {
  inView(`#benefices-col-${i}`, () => {
    animate(`#benefices-col-${i}`, { opacity: [0, 1], y: [32, 0] }, { delay: 0.15 + i * 0.17, duration: 0.7, easing: "ease" });
  });
});
inView("#benefices-cta", () => {
  animate("#benefices-cta", { opacity: [0, 1], scale: [0.96, 1] }, { delay: 0.72, duration: 0.52, easing: "ease" });
});

// Animation premium section Plan d'Action
inView("#plan-title", () => {
  animate("#plan-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
});
// Cascade pour chaque étape du plan (slide gauche)
[1, 2, 3].forEach((n, i) => {
  inView(`#plan-step-${n}`, () => {
    animate(`#plan-step-${n}`, { opacity: [0, 1], x: [-28, 0] }, { delay: 0.14 + i * 0.13, duration: 0.68, easing: "ease" });
  });
});
// Illustration à droite (fade-in + slide droite)
inView("#plan-img-col", () => {
  animate("#plan-img-col", { opacity: [0, 1], x: [32, 0] }, { delay: 0.24, duration: 0.84, easing: "ease" });
});

// Animation premium section Témoignages
inView("#temoignages-title", () => {
  animate("#temoignages-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.65, easing: "ease" });
});
inView("#temoignages-subtitle", () => {
  animate("#temoignages-subtitle", { opacity: [0, 1], y: [-18, 0] }, { delay: 0.10, duration: 0.52, easing: "ease" });
});

// Témoignage héros — fade-in + légère montée + cascade sous-blocs
inView("#temoignage-hero", () => {
  animate("#temoignage-hero", { opacity: [0, 1], y: [24, 0] }, { delay: 0.23, duration: 0.66, easing: "ease" });
  animate("#temoignage-hero-title", { opacity: [0, 1], y: [-14, 0] }, { delay: 0.29, duration: 0.48, easing: "ease" });
  animate("#temoignage-hero-txt1", { opacity: [0, 1], x: [-18, 0] }, { delay: 0.36, duration: 0.46, easing: "ease" });
  animate("#temoignage-hero-txt2", { opacity: [0, 1], x: [-18, 0] }, { delay: 0.46, duration: 0.46, easing: "ease" });
  animate("#temoignage-hero-detail", { opacity: [0, 1], y: [14, 0] }, { delay: 0.54, duration: 0.38, easing: "ease" });
  animate("#temoignage-hero-client", { opacity: [0, 1], y: [16, 0] }, { delay: 0.62, duration: 0.36, easing: "ease" });
});
inView("#temoignage-hero-social", () => {
  animate("#temoignage-hero-social", { opacity: [0, 1], y: [18, 0] }, { delay: 0.80, duration: 0.44, easing: "ease" });
});

// Témoignages 2 & 3 : alternance gauche-droite
inView("#temoignage-2", () => {
  animate("#temoignage-2", { opacity: [0, 1], x: [32, 0] }, { delay: 0.38, duration: 0.54, easing: "ease" });
});
inView("#temoignage-3", () => {
  animate("#temoignage-3", { opacity: [0, 1], x: [32, 0] }, { delay: 0.52, duration: 0.54, easing: "ease" });
});

// Animation premium section Freebie (Lead Magnet)
inView("#freebie-title", () => {
  animate("#freebie-title", { opacity: [0, 1], y: [-24, 0] }, { duration: 0.7, easing: "ease" });
});
inView("#freebie-lead", () => {
  animate("#freebie-lead", { opacity: [0, 1], y: [-12, 0] }, { delay: 0.12, duration: 0.5, easing: "ease" });
});
inView("#freebie-bonus", () => {
  animate("#freebie-bonus", { opacity: [0, 1], y: [-10, 0] }, { delay: 0.21, duration: 0.55, easing: "ease" });
});
inView("#freebie-desc", () => {
  animate("#freebie-desc", { opacity: [0, 1], y: [-8, 0] }, { delay: 0.29, duration: 0.5, easing: "ease" });
});
inView("#freebie-form", () => {
  animate("#freebie-form", { opacity: [0, 1], y: [20, 0] }, { delay: 0.35, duration: 0.7, easing: "ease" });
});
inView("#freebie-img-col", () => {
  animate("#freebie-img-col", { opacity: [0, 1], x: [36, 0] }, { delay: 0.18, duration: 0.85, easing: "ease" });
});

// Gestion dynamique du formulaire MailerLite
window.submitMailerLite = function(event) {
  event.preventDefault();
  const form = event.target;
  const confirmation = document.getElementById('confirmation-message');
  const error = document.getElementById('error-message');
  confirmation.classList.add('hidden');
  error.classList.add('hidden');
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors'
  }).then(() => {
    confirmation.classList.remove('hidden');
    error.classList.add('hidden');
    form.reset();
  }).catch(() => {
    error.classList.remove('hidden');
    confirmation.classList.add('hidden');
  });
}

// Apparition premium du titre et lead
inView("#faq-title", () => {
  animate("#faq-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
});
inView("#faq-lead", () => {
  animate("#faq-lead", { opacity: [0, 1], y: [-16, 0] }, { delay: 0.18, duration: 0.52, easing: "ease" });
});

// Apparition en cascade des questions (pour chaque question FAQ)
for (let i = 1; i <= 7; i++) {
  inView(`#faq button:nth-of-type(${i})`, () => {
    animate(`#faq button:nth-of-type(${i})`, { opacity: [0, 1], y: [18, 0] }, { delay: 0.16 + i * 0.09, duration: 0.46, easing: "ease" });
  });
}

// Charge le script Cal.com embed si pas déjà chargé
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal;
    let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      let s = d.createElement("script");
      s.src = A;
      d.head.appendChild(s);
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else p(cal, ar);
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

// Initialisation namespace
Cal("init", "decouverte", { origin: "https://cal.com" });

// Personnalisation UI (adaptée à ta charte)
Cal.ns.decouverte("ui", {
  cssVarsPerTheme: {
    light: { "cal-brand": "#25353F" },
    dark: { "cal-brand": "#F5F1E6" }
  },
  hideEventTypeDetails: false,
  layout: "month_view"
});
