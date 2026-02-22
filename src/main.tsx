import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import FuerKanzleien from './pages/FuerKanzleien.tsx'
import FuerKandidaten from './pages/FuerKandidaten.tsx'
import Referenzen from './pages/Referenzen.tsx'
import Stellen from './pages/Stellen.tsx'
import Talente from './pages/Talente.tsx'
import Impressum from './pages/Impressum.tsx'
import Datenschutz from './pages/Datenschutz.tsx'
import AGB from './pages/AGB.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fuer-kanzleien" element={<FuerKanzleien />} />
        <Route path="/fuer-kandidaten" element={<FuerKandidaten />} />
        <Route path="/referenzen" element={<Referenzen />} />
        <Route path="/stellen" element={<Stellen />} />
        <Route path="/talente" element={<Talente />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
