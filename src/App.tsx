import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudyRaqam from './pages/CaseStudyRaqam'
import CaseStudyPetProtect from './pages/CaseStudyPetProtect'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/raqam" element={<CaseStudyRaqam />} />
        <Route path="/case-study/pet-protect" element={<CaseStudyPetProtect />} />
      </Routes>
    </BrowserRouter>
  )
}
