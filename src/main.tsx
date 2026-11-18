import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Toolbar from './components/toolbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toolbar />
  </StrictMode>,
)
