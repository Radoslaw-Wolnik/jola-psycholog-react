import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SeoJsonLd } from './components/Seo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SeoJsonLd />
    <App />
  </StrictMode>,
)
