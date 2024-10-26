
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Project from './Pages/Project'
import About from './Pages/About'
import Help from './Pages/Help'
import NotFound from './Components/NotFound/NotFound'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/project' element = {<Project/>} />
        <Route path='/help' element = {<Help/>} />
        <Route path='*' element = {<NotFound/>} />
      </Route>
    )
  )
  return (
   <>
     <Navbar/>
     <RouterProvider router={myRoute} />
     <Footer/>
    

   </>
  )
}

export default App
