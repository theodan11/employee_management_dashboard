import MenuCom from './components/MenuCom.jsx'
import AllEmployee from './pages/AllEmployee.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AddEmployee from './pages/AddEmployee.jsx'
import GlobalSearchBar from './components/GlobalSearchBar.jsx'
import ArchivedEmployees from './pages/ArchivedEmployees.jsx'
import Overview from './pages/Overview.jsx'

const App = () => {
  return (
    
      <div className='main__layout'>
        <Router>
          <MenuCom />
          <div className="main__body">

          <GlobalSearchBar/>
          <Routes >
            <Route path='/overview' element={<Overview />} />
            <Route path='/allemployee' element={<AllEmployee />} />
            <Route path='/addemployee' element={<AddEmployee />} />
            <Route path='/archiveemployee' element={<ArchivedEmployees />} />
          </Routes>
          </div>
        </Router>


      </div>

  )
}

export default App