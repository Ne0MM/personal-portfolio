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
            <a href='https://www.linkedin.com/in/pablo-tavares-7b8287267/'>
            <i 
                className='devicon-linkedin-plain sideNavIcon'
            />
            </a>
        </div>

        <div className='sideNavIconContainer'>  
            <a href='https://github.com/Ne0MM'>
                <i 
                    className="devicon-github-original sideNavIcon"
                />
            </a>
        </div>

    </nav>
  )
}

export default SideNav