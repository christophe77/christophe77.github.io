const content = {
    fr: {
      role: 'Développeur JS | React | Next | Node',
      quote: 'Je débogue comme je respire. Et parfois, je respire fort.',
      stackTitle: 'Mes jouets préférés',
      reactText: 'Pour briller côté front (avec un soupçon de magie ✨)',
      nextText: 'Parce que SSR c’est sexy et Google adore ça 😎',
      nodeText: 'JS jusqu’au bout du backend (et même sous le tapis)',
      expressText: 'Express pour aller vite... comme une 206 tunée 🚗💨',
      muiText: 'Parce que les composants stylés, c’est la vie 💅',
      tailwindText: 'Pour faire du CSS sans pleurer dans un coin 💨😢',
      linkedinBtn: '🔗 Suivez-moi sur LinkedIn',
      reposBtn: '📁 Voir mes repos',
    },
    en: {
      role: 'JS Developer | React | Next | Node',
      quote: 'I debug like I breathe. And sometimes, I breathe heavily.',
      stackTitle: 'My favorite stack',
      reactText: 'To shine on the front-end (with a pinch of magic ✨)',
      nextText: 'Because SSR is sexy and Google agrees 😎',
      nodeText: 'JS all the way down (even under the rug)',
      expressText: 'Express to go fast... like a turbo snail 🐌💨',
      muiText: 'Because stylish components make the dev world go round 💅',
      tailwindText: 'For styling without crying in the CSS corner 💨😢',
      linkedinBtn: '🔗 Follow me on LinkedIn',
      reposBtn: '📁 Browse my repos',
    },
    es: {
      role: 'Desarrollador JS | React | Next | Node',
      quote: 'Depuro como respiro. Y a veces respiro muy fuerte.',
      stackTitle: 'Mi stack favorito',
      reactText: 'Para brillar en el front-end (con un poco de magia ✨)',
      nextText: 'Porque el SSR es sexy y a Google le encanta 😎',
      nodeText: 'JS hasta el fondo (¡incluso debajo del sofá!)',
      expressText: 'Express para ir rápido... como un caracol con turbo 🐌💨',
      muiText: 'Componentes con estilo = desarrollador feliz 💅',
      tailwindText: 'CSS sin drama... o casi 💨😅',
      linkedinBtn: '🔗 Sígueme en LinkedIn',
      reposBtn: '📁 Ver mis repos',
    },
  };
  
  function setLang(lang) {
    document.getElementById('role').textContent = content[lang].role;
    document.getElementById('quote').textContent = content[lang].quote;
    document.getElementById('stackTitle').textContent = content[lang].stackTitle;
    document.getElementById('reactText').textContent = content[lang].reactText;
    document.getElementById('nextText').textContent = content[lang].nextText;
    document.getElementById('nodeText').textContent = content[lang].nodeText;
    document.getElementById('expressText').textContent = content[lang].expressText;
    document.getElementById('muiText').textContent = content[lang].muiText;
    document.getElementById('tailwindText').textContent = content[lang].tailwindText;
    document.getElementById('linkedinBtn').textContent = content[lang].linkedinBtn;
    document.getElementById('reposBtn').textContent = content[lang].reposBtn;
  }
  
  setLang('fr');
  