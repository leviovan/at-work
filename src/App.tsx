import './App.css'
import MainContent from './components/mainContent/mainContent'
import Header from './components/header/header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/userSlice/userSlice'
import { RootState } from './store/store'

function App() {


  const dispatch =useDispatch()

    const users= useSelector((state:RootState)=>state.user)
    console.log(users);
    
  useEffect(() => {
    dispatch(fetchUsers())
  
    // return () => {
    //   second
    // }
  }, [])
  

  return (


    <>
      <Header/>
      <MainContent/>

      </>
  )
}

export default App
