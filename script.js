const GITHUB_USER = 'christophe77';

const content = {
  fr: {
    status: 'Freelance · Paris · dispo pour de nouveaux projets',
    role: 'Architecte logiciel & développeur fullstack',
    tagline:
      'TypeScript, Node, React. Je construis des <em>pots de miel pour les bots</em> et des <em>serveurs MCP pour les thermostats</em>.',
    quote: '« Je débogue comme je respire. Et parfois, je respire fort. »',
    linkedinBtn: 'Me suivre sur LinkedIn',
    reposBtn: 'Voir mon GitHub',
    statRepos: 'repos publics',
    statStars: 'étoiles GitHub',
    statYears: 'ans sur GitHub',
    statMate: 'litres de maté',
    projectsTitle: 'Projets choisis',
    projectsSub: 'Des libs, des outils, et quelques expériences douteuses.',
    fAll: 'Tout',
    fSec: 'Sécurité',
    fLib: 'Libs & API',
    moreRepos: 'Tous les repos sur GitHub',
    stackTitle: 'Mes jouets préférés',
    stackSub: 'La stack, et pourquoi je l’aime.',
    footer: 'Propulsé au maté 🧉 et à Windows 3.11',
    stack: {
      ts: 'Parce que `undefined is not a function` à 3h du mat, plus jamais 🛟',
      react: 'Pour briller côté front (avec un soupçon de magie ✨)',
      next: 'Parce que SSR c’est sexy et Google adore ça 😎',
      expo: 'Parce que 3 plateformes avec 1 projet on gagne du temps (et je suis flemmard 💤)',
      node: 'JS jusqu’au bout du backend (et même sous le tapis)',
      express: 'Express pour aller vite... comme une 206 tunée 🚗💨',
      mcp: 'Pour que les LLM parlent à mon chauffage. Oui, vraiment 🌡️',
      sb: 'Parce que les composants stylés ET réutilisables, c’est encore plus cool 😎',
      mui: 'Parce que les composants stylés, c’est la vie 💅',
      tailwind: 'Pour faire du CSS sans pleurer dans un coin 💨😢',
    },
    projects: {
      'netatmo-energy-mcp':
        'Serveur MCP pour les thermostats et vannes Netatmo. Températures, consignes, chaudière, historique et analyses — avec Claude, GPT, Gemini ou un modèle local.',
      'puppeteer-mcp':
        'Serveur MCP qui permet à Cursor de récupérer et analyser le rendu de pages web avec Puppeteer.',
      'express-honeypot':
        'Pot de miel Express qui piège les bots tentant des inclusions de fichiers (RFI / LFI). Ils viennent, ils restent.',
      edgeflowjs:
        'Framework JS pour bornes industrielles et Raspberry Pi : machines à états, sync offline-first, abstraction matérielle.',
      'mistral-format': 'Interroger l’API Mistral AI et obtenir des réponses proprement formatées.',
      'pubmed-api-wrapper': 'Wrapper JavaScript pour l’API PubMed.',
      'create-chrome-extensionz':
        'CLI Node pour générer un starter d’extension Chrome en React, Vue, JS ou TypeScript.',
      'formula-one-js': 'Récupérer les données de Formule 1 dans une app Node.',
      'osint-email': 'Collecter des informations publiques à partir d’une adresse email.',
      'tailwind-dx': 'Des classNames Tailwind lisibles et maintenables, organisées par intention.',
    },
  },
  en: {
    status: 'Freelance · Paris · open to new projects',
    role: 'Software architect & fullstack developer',
    tagline:
      'TypeScript, Node, React. I build <em>honeypots for bots</em> and <em>MCP servers for thermostats</em>.',
    quote: '“I debug like I breathe. And sometimes, I breathe heavily.”',
    linkedinBtn: 'Follow me on LinkedIn',
    reposBtn: 'See my GitHub',
    statRepos: 'public repos',
    statStars: 'GitHub stars',
    statYears: 'years on GitHub',
    statMate: 'litres of maté',
    projectsTitle: 'Selected work',
    projectsSub: 'Libraries, tools, and a few questionable experiments.',
    fAll: 'All',
    fSec: 'Security',
    fLib: 'Libs & APIs',
    moreRepos: 'All repos on GitHub',
    stackTitle: 'My favorite toys',
    stackSub: 'The stack, and why I like it.',
    footer: 'Powered by maté 🧉 and Windows 3.11',
    stack: {
      ts: 'Because `undefined is not a function` at 3am, never again 🛟',
      react: 'To shine on the front-end (with a pinch of magic ✨)',
      next: 'Because SSR is sexy and Google agrees 😎',
      expo: "Because 3 platforms with 1 project saves time (and I'm lazy 💤)",
      node: 'JS all the way down (even under the rug)',
      express: 'Express to go fast... like a turbo snail 🐌💨',
      mcp: 'So LLMs can talk to my heating. Yes, really 🌡️',
      sb: 'Because stylish AND reusable components are way more cool bro 😎',
      mui: 'Because stylish components make the dev world go round 💅',
      tailwind: 'For styling without crying in the CSS corner 💨😢',
    },
    projects: {
      'netatmo-energy-mcp':
        'MCP server for Netatmo thermostats and radiator valves. Temperatures, setpoints, boiler activity, history and analytics — with Claude, GPT, Gemini or a local model.',
      'puppeteer-mcp':
        'MCP server that lets Cursor fetch and analyse rendered web pages with Puppeteer.',
      'express-honeypot':
        'Express honeypot that traps bots attempting file inclusion (RFI / LFI). They come in, they stay.',
      edgeflowjs:
        'JS framework for industrial kiosks and Raspberry Pi: state machines, offline-first sync, hardware abstraction.',
      'mistral-format': 'Ask the Mistral AI API and get neatly formatted responses back.',
      'pubmed-api-wrapper': 'JavaScript wrapper for the PubMed API.',
      'create-chrome-extensionz':
        'Node CLI to scaffold a Chrome extension starter in React, Vue, JS or TypeScript.',
      'formula-one-js': 'Fetch Formula 1 data in a Node app.',
      'osint-email': 'Gather public information from an email address.',
      'tailwind-dx': 'Readable, maintainable Tailwind classNames, organised by intent.',
    },
  },
  es: {
    status: 'Freelance · París · disponible para nuevos proyectos',
    role: 'Arquitecto de software y desarrollador fullstack',
    tagline:
      'TypeScript, Node, React. Construyo <em>honeypots para bots</em> y <em>servidores MCP para termostatos</em>.',
    quote: '«Depuro como respiro. Y a veces respiro muy fuerte.»',
    linkedinBtn: 'Sígueme en LinkedIn',
    reposBtn: 'Ver mi GitHub',
    statRepos: 'repos públicos',
    statStars: 'estrellas en GitHub',
    statYears: 'años en GitHub',
    statMate: 'litros de mate',
    projectsTitle: 'Proyectos destacados',
    projectsSub: 'Librerías, herramientas y algún que otro experimento dudoso.',
    fAll: 'Todo',
    fSec: 'Seguridad',
    fLib: 'Libs y APIs',
    moreRepos: 'Todos los repos en GitHub',
    stackTitle: 'Mis juguetes favoritos',
    stackSub: 'El stack, y por qué me gusta.',
    footer: 'Funciona con mate 🧉 y Windows 3.11',
    stack: {
      ts: 'Porque `undefined is not a function` a las 3 de la mañana, nunca más 🛟',
      react: 'Para brillar en el front-end (con un poco de magia ✨)',
      next: 'Porque el SSR es sexy y a Google le encanta 😎',
      expo: 'Porque 3 plataformas con 1 proyecto ahorra tiempo (y soy vago 💤)',
      node: 'JS hasta el fondo (¡incluso debajo del sofá!)',
      express: 'Express para ir rápido... como un caracol con turbo 🐌💨',
      mcp: 'Para que los LLM hablen con mi calefacción. Sí, de verdad 🌡️',
      sb: 'Porque los componentes elegantes y reutilizables son mucho más geniales, hermano 😎',
      mui: 'Componentes con estilo = desarrollador feliz 💅',
      tailwind: 'CSS sin drama... o casi 💨😅',
    },
    projects: {
      'netatmo-energy-mcp':
        'Servidor MCP para termostatos y válvulas Netatmo. Temperaturas, consignas, caldera, historial y análisis — con Claude, GPT, Gemini o un modelo local.',
      'puppeteer-mcp':
        'Servidor MCP que permite a Cursor obtener y analizar páginas web renderizadas con Puppeteer.',
      'express-honeypot':
        'Honeypot en Express que atrapa bots que intentan inclusión de archivos (RFI / LFI). Entran y se quedan.',
      edgeflowjs:
        'Framework JS para quioscos industriales y Raspberry Pi: máquinas de estados, sync offline-first, abstracción de hardware.',
      'mistral-format': 'Consultar la API de Mistral AI y obtener respuestas bien formateadas.',
      'pubmed-api-wrapper': 'Wrapper JavaScript para la API de PubMed.',
      'create-chrome-extensionz':
        'CLI de Node para generar un starter de extensión Chrome en React, Vue, JS o TypeScript.',
      'formula-one-js': 'Obtener datos de Fórmula 1 en una app Node.',
      'osint-email': 'Recopilar información pública a partir de una dirección de email.',
      'tailwind-dx': 'ClassNames de Tailwind legibles y mantenibles, organizados por intención.',
    },
  },
};

const projects = [
  { name: 'netatmo-energy-mcp', emoji: '🌡️', cat: 'ai', tag: 'MCP', lang: 'TypeScript', stars: 0, featured: true },
  { name: 'puppeteer-mcp', emoji: '🕸️', cat: 'ai', tag: 'MCP', lang: 'JavaScript', stars: 0 },
  { name: 'edgeflowjs', emoji: '🍓', cat: 'dx', tag: 'Framework', lang: 'TypeScript', stars: 0 },
  { name: 'express-honeypot', emoji: '🍯', cat: 'sec', tag: 'Security', lang: 'JavaScript', stars: 21, featured: true },
  { name: 'mistral-format', emoji: '🌬️', cat: 'ai', tag: 'AI', lang: 'TypeScript', stars: 0 },
  { name: 'pubmed-api-wrapper', emoji: '🧬', cat: 'lib', tag: 'API', lang: 'TypeScript', stars: 5 },
  { name: 'create-chrome-extensionz', emoji: '🧩', cat: 'dx', tag: 'CLI', lang: 'TypeScript', stars: 0 },
  { name: 'formula-one-js', emoji: '🏎️', cat: 'lib', tag: 'API', lang: 'TypeScript', stars: 4 },
  { name: 'osint-email', emoji: '🔎', cat: 'sec', tag: 'OSINT', lang: 'TypeScript', stars: 3 },
  { name: 'tailwind-dx', emoji: '💨', cat: 'dx', tag: 'npm', lang: 'JavaScript', stars: 0 },
];

const stack = [
  ['🟦', 'TypeScript', 'ts'],
  ['⚛️', 'React', 'react'],
  ['🚀', 'Next.js', 'next'],
  ['📱', 'Expo', 'expo'],
  ['🌳', 'Node.js', 'node'],
  ['🧃', 'Express', 'express'],
  ['🤖', 'MCP', 'mcp'],
  ['📚', 'Storybook', 'sb'],
  ['🎨', 'Material UI', 'mui'],
  ['🌊', 'Tailwind CSS', 'tailwind'],
];

const langColors = { TypeScript: '#3178c6', JavaScript: '#f1e05a', HTML: '#e34c26' };

const escapeHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

let currentLang = 'fr';

function renderProjects() {
  const t = content[currentLang];
  document.getElementById('projectGrid').innerHTML = projects
    .map(
      (p) => `
      <a class="card${p.featured ? ' featured' : ''}" data-cat="${p.cat}" href="https://github.com/${GITHUB_USER}/${p.name}" target="_blank" rel="noopener">
        <div class="card-top"><span class="emoji" aria-hidden="true">${p.emoji}</span><span class="tag">${p.tag}</span></div>
        <h3>${p.name}</h3>
        <p>${t.projects[p.name]}</p>
        <div class="card-meta">
          <span><i class="lang-dot" style="background:${langColors[p.lang] || '#999'}"></i>${p.lang}</span>
          ${p.stars ? `<span>★ ${p.stars}</span>` : ''}
        </div>
      </a>`
    )
    .join('');
  applyFilter();
}

function renderStack() {
  const t = content[currentLang];
  document.getElementById('stackList').innerHTML = stack
    .map(
      ([icon, name, key]) =>
        `<li><span class="icon" aria-hidden="true">${icon}</span><b>${name}</b><span>${escapeHtml(t.stack[key])}</span></li>`
    )
    .join('');
}

function setLang(lang) {
  if (!content[lang]) lang = 'fr';
  currentLang = lang;
  const t = content[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t[el.dataset.i18n];
    if (typeof value === 'string') el.innerHTML = value;
  });
  document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  renderProjects();
  renderStack();
  try {
    localStorage.setItem('lang', lang);
  } catch {}
}

let activeFilter = 'all';
function applyFilter() {
  document.querySelectorAll('.card').forEach((card) => {
    card.hidden = activeFilter !== 'all' && card.dataset.cat !== activeFilter;
  });
}

document.querySelectorAll('.filters button').forEach((btn) =>
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('.filters button').forEach((b) => b.classList.toggle('active', b === btn));
    applyFilter();
  })
);

document.querySelectorAll('.lang button').forEach((btn) => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

// Theme
const root = document.documentElement;
function currentTheme() {
  return root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
} catch {}
root.dataset.theme = currentTheme();
document.getElementById('themeToggle').addEventListener('click', () => {
  root.dataset.theme = currentTheme() === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem('theme', root.dataset.theme);
  } catch {}
});

// Initial language: saved choice, else browser language, else French
let initialLang = 'fr';
try {
  initialLang = localStorage.getItem('lang') || (navigator.language || 'fr').slice(0, 2);
} catch {}
setLang(initialLang);

document.getElementById('year').textContent = new Date().getFullYear();

// Live numbers from the GitHub API (falls back silently to the static values)
(async () => {
  try {
    const [user, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`).then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`).then((r) => (r.ok ? r.json() : Promise.reject())),
    ]);
    const own = repos.filter((r) => !r.fork);
    document.getElementById('statRepos').textContent = user.public_repos;
    document.getElementById('statStars').textContent = own.reduce((sum, r) => sum + r.stargazers_count, 0);
    document.getElementById('statYears').textContent = new Date().getFullYear() - new Date(user.created_at).getFullYear();
    const byName = Object.fromEntries(repos.map((r) => [r.name, r]));
    projects.forEach((p) => {
      if (byName[p.name]) {
        p.stars = byName[p.name].stargazers_count;
        p.lang = byName[p.name].language || p.lang;
      }
    });
    renderProjects();
  } catch {}
})();
