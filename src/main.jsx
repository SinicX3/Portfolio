import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import Header from './Components/Header.jsx'
import App from './Components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>, 
)
