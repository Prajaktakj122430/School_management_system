import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Create from '../src/Create'
import Update from '../src/Update'
import Read from '../src/Read'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import PrivateRoutes from './PrivateRoutes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/signup' element={<Signup />} />

          <Route element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create/' element={<Create />} />
            <Route path='/update/:id' element={<Update />} />

            <Route path='/read/:id' element={<Read />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
