// 📌 Importerer React StrictMode, som hjelper med å finne potensielle problemer i appen
import { StrictMode } from 'react';

// 📌 Importerer `createRoot` fra React-dom for å håndtere React-komponenten som skal vises i HTML
import { createRoot } from 'react-dom/client';

// 📌 Importerer global CSS-fil (index.css) som inneholder styling for hele appen
// import './index.css';

// 📌 Importerer hovedkomponenten `App`, som er roten til hele React-applikasjonen
import App from './App.jsx';

// 📌 Henter HTML-elementet med id "root" fra `index.html` og sier at React-appen skal rendres her
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* 📌 Bruker StrictMode for å hjelpe med feilsøking og beste praksis */}
    <App />  {/* 📌 Rendrer hovedkomponenten `App`, som inneholder hele menyen */}
  </StrictMode>,
);

