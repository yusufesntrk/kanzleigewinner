import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import FuerKanzleien from './pages/FuerKanzleien.tsx'
import FuerKandidaten from './pages/FuerKandidaten.tsx'
import Referenzen from './pages/Referenzen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fuer-kanzleien" element={<FuerKanzleien />} />
        <Route path="/fuer-kandidaten" element={<FuerKandidaten />} />
        <Route path="/referenzen" element={<Referenzen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
