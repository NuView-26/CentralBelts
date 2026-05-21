import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Belts from './Pages/Hero.jsx'
import Products from './Pages/Products.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Contactsection from './Pages/contact.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Belts />
    <Products />
    <Aboutus />
    <Contactsection />
    <Footer />
  </StrictMode>,
)
