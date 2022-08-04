import React from 'react'
import NavBar from './NavBar'
import './Layout.css'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div >
        <div className="app-bar">
         <NavBar/>
        </div>

        <div className='children'>
           
            {children}
        </div>
        <div className="footer">
          <Footer/>
        </div>
        </div>
  )
}

export default Layout