import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { WorkPage } from './pages/WorkPage'
import { ContactPage } from './pages/ContactPage'
import { ScrollToHash } from './components/ScrollToHash'
import { Preloader } from './components/Preloader'
import { PageFlash } from './components/PageFlash'

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <PageFlash />
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
