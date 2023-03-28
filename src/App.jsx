import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Header from './components/Header'

const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/contact' element={<Portfolio scroll={true} />} />
            <Route path='/about' element={<About />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App