import React from 'react'
import '../Assets/SideNavStyles.css'

function SideNav() {
  return (
    <nav className='sideNavContainer'>
        <div className='sideNavLine'>

        </div>

        <div className='sideNavIconContainer'>
            <i 
                className='devicon-twitter-original sideNavIcon sideNavIconTwitter'
            />
        </div>

        <div className='sideNavIconContainer'>    
            <i 
                className='devicon-linkedin-plain sideNavIcon'
            />
        </div>

        <div className='sideNavIconContainer'>  
            <i 
                className="devicon-github-original sideNavIcon"
            />
        </div>

    </nav>
  )
}

export default SideNav