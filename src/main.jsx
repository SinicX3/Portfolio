import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>, 
)
