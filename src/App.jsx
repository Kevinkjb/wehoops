import './App.css'
import { Routes, Route } from 'react-router-dom'


import AboutUsPage from './pages/AboutPage/AboutUsPage'
import HomePage from './pages/HomePage/HomePage'
import ProgramsPage from './pages/ProgramsPage/ProgramsPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'

function App() {


  return (
    <>
  
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<AboutUsPage/>}/>
      <Route path="programs" element={<ProgramsPage/>}/>
      <Route path="gallery" element={<GalleryPage/>}/>
    </Routes>
    </>

  )
}

export default App
