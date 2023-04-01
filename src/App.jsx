import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Header from './components/Header'
import axios from 'axios'

const App = () => {
   // const apiUrl = process.env.NODE_ENV === "production" ? 'https://portfolio-jk.herokuapp.com/api' : 'http://localhost:5000/api'
   const apiUrl = 'https://portfolio-jk.herokuapp.com/api'
   const [experiences, setExperiences] = useState([])
   const [projects, setProjects] = useState([])
   const [skills, setSkills] = useState([])

   const fetchData = useCallback(async () => {
      const [projectData, experienceData, skillData] = await Promise.all([
         axios.get(`${apiUrl}/project/visible`),
         axios.get(`${apiUrl}/experience/visible`),
         axios.get(`${apiUrl}/skill/category`),
      ])
      if (projectData.status !== 200 || experienceData.status !== 200 || skillData.status !== 200) {
         console.log("Error");
      }
      else {
         if (projectData.status === 200) {
            setProjects(projectData.data);
         }
         if (experienceData.status === 200) {
            setExperiences(experienceData.data);
         }
         if (skillData.status === 200) {
            setSkills(skillData.data)
         }
      }
   }, [apiUrl])

   useEffect(() => {
      fetchData();
   }, [fetchData])

   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Portfolio projects={projects} />} />
            <Route path='/contact' element={<About scroll={true} experiences={experiences} skills={skills} />} />
            <Route path='/about' element={<About experiences={experiences} skills={skills} />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App