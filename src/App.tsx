import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ScrollToHash } from './components/ScrollToHash'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
