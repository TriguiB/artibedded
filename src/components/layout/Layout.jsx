import React from 'react'
import NavBar from './NavBar'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div  >
        <div  style={{position:'sticky',top:0, left:0, right:0,zIndex:10}}>
         <NavBar/>
        </div>

        <div className='children'>
           <div className='height-between-navbar'></div>
            {children}
        </div>
      
        </div> 
  )
}

export default Layout