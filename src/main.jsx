// 📌 Importerer StrictMode fra React
import { StrictMode } from 'react';

// 📌 Importerer createRoot fra React-dom/client for å rendere React-applikasjonen
import { createRoot } from 'react-dom/client';

// 📌 Importerer den globale CSS-filen for grunnleggende styling
import './index.css';

// 📌 Importerer hovedkomponenten App fra components-mappen
import App from './components/App'; // 📌 Oppdatert sti!

// 📌 Finner HTML-elementet med id 'root' og monterer React-applikasjonen der
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* 📌 StrictMode hjelper med å oppdage potensielle feil i koden */}
    <App /> {/* 📌 Rendre hovedkomponenten App */}
  </StrictMode>,
);
