import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import Body from './pages/Body'
import Login from './pages/login'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Body /> } >
          <Route  path='/login' element={ <Login /> }></Route>
        </Route>

    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
