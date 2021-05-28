import React from 'react'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import RowPost from './Components/RowPost/RowPost'
import {action,originals} from './Components/constants/urls'
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={action} title='Actions'isSmall/>
      
    </div>
  )
}

export default App
