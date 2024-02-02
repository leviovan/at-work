import './App.css'
import MainContent from './components/mainContent/mainContent'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import { Route, Routes } from 'react-router'
function App() {


  return (
    <>
    < Header/>
    <Routes>
      <Route path='/' element={<MainContent/>}/>
      <Route path='/:id' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
