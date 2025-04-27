// script.js
document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(255, 255, 255, 0.9)";
    } else {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.05)";
        navbar.style.background = "rgba(255, 255, 255, 0.7)";
    }
});


const shapesContainer = document.createElement("div");
shapesContainer.style.position = "fixed";
shapesContainer.style.top = "0";
shapesContainer.style.left = "0";
shapesContainer.style.width = "100vw";
shapesContainer.style.height = "100vh";
shapesContainer.style.pointerEvents = "none";
shapesContainer.style.zIndex = "-1"; // Remettre au-dessus du fond mais sous le contenu
document.body.appendChild(shapesContainer);

function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

// Couleurs moins transparentes
const colors = [
    "rgba(54, 113, 149, 0.06)",
    "rgba(40, 80, 110, 0.05)",
    "rgba(30, 60, 90, 0.04)",
    "rgba(20, 40, 60, 0.035)",
    "rgba(10, 20, 30, 0.03)"
];

function createShape() {
    const shape = document.createElement("div");
    const size = randomBetween(60, 120); // tailles un peu plus petites
    shape.style.position = "absolute";
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.borderRadius = `${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% / ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}%`;
    shape.style.background = colors[Math.floor(Math.random() * colors.length)];
    shape.style.left = `${randomBetween(0, 100)}vw`;
    shape.style.top = `${randomBetween(0, 100)}vh`;
    shape.style.filter = "blur(1.5px)";
    shape.style.transition = "transform 10s linear";
    shapesContainer.appendChild(shape);

    setTimeout(() => {
        shape.style.transform = `translate(${randomBetween(-100, 100)}px, ${randomBetween(-100, 100)}px) scale(${randomBetween(0.8, 1.2)}) rotate(${randomBetween(-30, 30)}deg)`;
    }, 100);

    setInterval(() => {
        shape.style.transform = `translate(${randomBetween(-100, 100)}px, ${randomBetween(-100, 100)}px) scale(${randomBetween(0.8, 1.2)}) rotate(${randomBetween(-30, 30)}deg)`;
    }, 10000);
}

for (let i = 0; i < 6; i++) { // moins de formes
    createShape();
}

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    navList.classList.toggle("open");
});



// Traductions
const translations = {
    fr: {
        "meta.title": "MonKode",
        "nav.accueil": "Accueil",
        "nav.services": "Services",
        "nav.tarif": "Tarifs",
        "nav.contact": "Contact",
        "hero.title": "Design pour les entreprises ambitieuses",
        "hero.subtitle": "Chez MonKode, nous allions créativité et stratégie pour créer des expériences qui captivent et élèvent.",
        "hero.cta": "Prendre un rendez-vous",
        "features.intro.title": "Vous avez une idée ? Nous la concrétisons.",
        "features.intro.text": "Notre mission est de transformer vos projets en expériences digitales modernes, efficaces et centrées sur vos clients. Nous vous accompagnons à chaque étape, de la réflexion à la mise en ligne, pour donner vie à vos ambitions.",
        "feature.launch": "Lancement sur-mesure",
        "feature.launch.text": "Nous construisons un site à votre image, adapté à vos besoins, pour un lancement réussi et personnalisé.",
        "feature.support": "Accompagnement humain",
        "feature.support.text": "Nous échangeons, écoutons et ajustons chaque détail. Votre projet évolue avec vous, dans la transparence et la proximité.",
        "feature.evolution": "Vision évolutive",
        "feature.evolution.text": "Démarrez simplement et faites évoluer votre site au fil de vos besoins : application, espace membre, fonctionnalités avancées… tout est possible.",
        "services.title": "Des solutions concrètes, claires et boostées par l'IA",
        "services.text": "Un site web doit avant tout servir votre projet. Nous proposons des offres simples, efficaces et évolutives, enrichies par l’intelligence artificielle pour automatiser, analyser et optimiser votre activité.",
        "service.vitrine.title": "Site vitrine",
        "service.vitrine.text": "Présentez votre activité en ligne avec une page d’accueil, vos services et un contact.",
        "service.surmesure.title": "Site et Application sur mesure",
        "service.surmesure.text": "Un site web ou une application personnalisée, adaptée à vos besoins spécifiques, pour une solution unique et évolutive.",
        "service.automation.title": "Automatisation & IA",
        "service.automation.text": "Automatisation de tâches, génération de contenu, analyse de données et intégration d’IA sur mesure pour booster votre business.",
        "service.support.title": "Suivi & support",
        "service.support.text": "Une fois livré, on reste là. Maintenance, ajustements, conseils… Vous êtes accompagné.",
        "pricing.header.title": "Des Tarifs Clairs. Sans Surprise.",
        "pricing.header.text": "Choisissez la formule qui correspond le mieux à votre projet.",
        "pricing.basic.title": "Vitrine",
        "pricing.basic.feature1": "Site 1 page",
        "pricing.basic.feature2": "Design responsive",
        "pricing.basic.feature3": "Formulaire de contact",
        "pricing.basic.feature4": "Optimisation basique",
        "pricing.basic.price": "300€",
        "pricing.basic.cta": "Commencer",
        "pricing.ia.title": "IA Boost",
        "pricing.ia.feature1": "Automatisation simple",
        "pricing.ia.feature2": "Chatbot IA intégré",
        "pricing.ia.feature3": "Analyse comportementale basique",
        "pricing.ia.feature4": "Conseils IA personnalisés",
        "pricing.ia.price": "400€",
        "pricing.ia.cta": "Commencer",
        "pricing.pro.title": "Sur-Mesure",
        "pricing.pro.feature1": "Site multi-pages évolutif",
        "pricing.pro.feature2": "Fonctionnalités personnalisées",
        "pricing.pro.feature3": "SEO avancé",
        "pricing.pro.feature4": "Accompagnement projet complet",
        "pricing.pro.price": "800€",
        "pricing.pro.cta": "Commencer",
        "pricing.custom.popular": "Populaire",
        "pricing.custom.title": "Évolutif",
        "pricing.custom.feature1": "Application web / mobile",
        "pricing.custom.feature2": "Connexion API / IA / back-office",
        "pricing.custom.feature3": "Développement d'outils IA avancés",
        "pricing.custom.feature4": "Business Intelligence & stratégie digitale IA",
        "pricing.custom.feature5": "Suivi & maintenance personnalisée",
        "pricing.custom.price": "Sur devis",
        "pricing.custom.cta": "Demander un devis",
        "contact.title": "Parlons de votre projet",
        "contact.text": "Une idée ? Une question ? On vous répond rapidement pour avancer ensemble.",
        "contact.form.name": "Nom complet",
        "contact.form.name.placeholder": "Votre nom",
        "contact.form.email": "Adresse email",
        "contact.form.email.placeholder": "Votre email",
        "contact.form.message": "Votre message",
        "contact.form.message.placeholder": "Parlez-nous de votre projet...",
        "contact.form.button": "Envoyer le message",
        "footer.brand.text": "MonKode, studio digital créatif pour les entreprises ambitieuses.",
        "footer.nav.title": "Navigation",
        "footer.nav.accueil": "Accueil",
        "footer.nav.services": "Services",
        "footer.nav.tarif": "Tarifs",
        "footer.nav.contact": "Contact",
        "footer.contact.title": "Contact",
        "footer.contact.email": "contact@monkode.fr",
        "footer.contact.phone": "+33 6 12 34 56 78",
        "footer.bottom.text": "© 2025 MonKode. Tous droits réservés."
    },
    en: {
        "meta.title": "MonKode",
        "nav.accueil": "Home",
        "nav.services": "Services",
        "nav.tarif": "Pricing",
        "nav.contact": "Contact",
        "hero.title": "Design for ambitious businesses",
        "hero.subtitle": "At MonKode, we combine creativity and strategy to create experiences that captivate and elevate.",
        "hero.cta": "Schedule an appointment",
        "features.intro.title": "Got an idea ? We'll bring it to life.",
        "features.intro.text": "Our mission is to transform your projects into modern, efficient digital experiences centered on your customers. We support you at every step, from ideation to launch, to bring your ambitions to life.",
        "feature.launch": "Custom launch",
        "feature.launch.text": "We build a website that reflects your brand, tailored to your needs, for a successful, personalized launch.",
        "feature.support": "Human support",
        "feature.support.text": "We communicate, listen, and adjust every detail. Your project evolves with you, transparently and closely.",
        "feature.evolution": "Evolutive vision",
        "feature.evolution.text": "Start simple and evolve your site as your needs grow: app, member area, advanced features… anything is possible.",
        "services.title": "Concrete, clear solutions boosted by AI",
        "services.text": "A website should serve your project above all. We offer simple, effective, Evolutive packages enhanced by artificial intelligence to automate, analyze, and optimize your business.",
        "service.vitrine.title": "Portfolio",
        "service.vitrine.text": "Present your business online with a homepage, your services, and contact.",
        "service.surmesure.title": "Custom site & app",
        "service.surmesure.text": "A personalized website or app tailored to your specific needs for a unique, Evolutive solution.",
        "service.automation.title": "Automation & AI",
        "service.automation.text": "Task automation, content generation, data analysis, and custom AI integration to boost your business.",
        "service.support.title": "Support & maintenance",
        "service.support.text": "Once delivered, we're here for you. Maintenance, adjustments, advice… you're supported.",
        "pricing.header.title": "Clear pricing. No surprises.",
        "pricing.header.text": "Choose the plan that best fits your project.",
        "pricing.basic.title": "Portfolio",
        "pricing.basic.feature1": "1-page site",
        "pricing.basic.feature2": "Responsive design",
        "pricing.basic.feature3": "Contact form",
        "pricing.basic.feature4": "Basic optimization",
        "pricing.basic.price": "€300",
        "pricing.basic.cta": "Get started",
        "pricing.ia.title": "AI Boost",
        "pricing.ia.feature1": "Basic automation",
        "pricing.ia.feature2": "Integrated AI chatbot",
        "pricing.ia.feature3": "Basic behavioral analysis",
        "pricing.ia.feature4": "Personalized AI advice",
        "pricing.ia.price": "€400",
        "pricing.ia.cta": "Get started",
        "pricing.pro.title": "Custom",
        "pricing.pro.feature1": "Evolutive multi-page site",
        "pricing.pro.feature2": "Custom functionality",
        "pricing.pro.feature3": "Advanced SEO",
        "pricing.pro.feature4": "Full project support",
        "pricing.pro.price": "€800",
        "pricing.pro.cta": "Get started",
        "pricing.custom.popular": "Popular",
        "pricing.custom.title": "Evolutive",
        "pricing.custom.feature1": "Web/mobile app",
        "pricing.custom.feature2": "API / AI / back-office integration",
        "pricing.custom.feature3": "Advanced AI tools development",
        "pricing.custom.feature4": "Business intelligence & AI digital strategy",
        "pricing.custom.feature5": "Personalized support & maintenance",
        "pricing.custom.price": "Upon request",
        "pricing.custom.cta": "Request a quote",
        "contact.title": "Let's talk about your project",
        "contact.text": "Got an idea ? A question ? We'll respond quickly to move forward together.",
        "contact.form.name": "Full name",
        "contact.form.name.placeholder": "Your name",
        "contact.form.email": "Email address",
        "contact.form.email.placeholder": "Your email",
        "contact.form.message": "Your message",
        "contact.form.message.placeholder": "Tell us about your project...",
        "contact.form.button": "Send message",
        "footer.brand.text": "MonKode, creative digital studio for ambitious businesses.",
        "footer.nav.title": "Navigation",
        "footer.nav.accueil": "Home",
        "footer.nav.services": "Services",
        "footer.nav.tarif": "Pricing",
        "footer.nav.contact": "Contact",
        "footer.contact.title": "Contact",
        "footer.contact.email": "contact@monkode.fr",
        "footer.contact.phone": "+33 6 12 34 56 78",
        "footer.bottom.text": "© 2025 MonKode. All rights reserved."
    }
};

// Sélecteurs
const langButtons = document.querySelectorAll('.lang-btn');
const i18nElements = document.querySelectorAll('[data-i18n]');
const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
let currentLang = localStorage.getItem('lang') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // active class
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // textes
    i18nElements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // placeholders
    placeholderElements.forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// event listeners
langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// init
setLanguage(currentLang);   