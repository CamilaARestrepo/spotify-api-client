import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './auth/page/login.jsx'
import Nadvar from './spotifyConsumer/pages/Nadvar.jsx'
import HomePage from './spotifyConsumer/pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nadvar/>
    <HomePage/>  
  </StrictMode>,
)
