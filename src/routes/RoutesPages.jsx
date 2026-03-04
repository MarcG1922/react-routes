import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'

function RoutesPages () {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/resume' element={<Resume />}></Route>
    </Routes>
  )
}

export default RoutesPages