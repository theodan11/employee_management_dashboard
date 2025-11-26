import MenuCom from './components/MenuCom.jsx'
import AllEmployee from './pages/AllEmployee.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AddEmployee from './pages/AddEmployee.jsx'
import GlobalSearchBar from './components/GlobalSearchBar.jsx'

const App = () => {
  return (
    
      <div className='main__layout'>
        <Router>
          <MenuCom />
          <div className="main__body">

          <GlobalSearchBar/>
          <Routes>
            <Route path='/allemployee' element={<AllEmployee />} />
            <Route path='/addemployee' element={<AddEmployee />} />
          </Routes>
          </div>
        </Router>


      </div>

  )
}

export default App