import React from 'react'
import NavBar from '../NavBar'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div>
        <div className="app-bar">
         <NavBar/>
        </div>

        <div className='children'>
           
            {children}
        </div>
        
        </div>
  )
}

export default Layout