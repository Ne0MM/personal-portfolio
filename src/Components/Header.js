import React from 'react'
import '../Assets/HeaderStyles.css'

function Header() {
  return (
    <header>
        <div className='headerLogo'>LOGO</div>
        <div className='linksContainer'>
            <a href='#About'>
                <div className='light-blue'>S</div>
                <div>o</div>
                <div>b</div>
                <div>r</div>
                <div>e</div>
            </a>
            <a href='#Work'>
                <div className='light-blue'>P</div>
                <div>r</div>
                <div>o</div>
                <div>j</div>
                <div>e</div>
                <div>t</div>
                <div>o</div>
                <div>s</div>
            </a>
            <a href='#Contact'>
                <div className='light-blue'>C</div>
                <div>o</div>
                <div>n</div>
                <div>t</div>
                <div>a</div>
                <div>t</div>
                <div>o</div>
            </a>
            <a href='#Resume'>
                <div className='light-blue'>C</div>
                <div>u</div>
                <div>r</div>
                <div>r</div>
                <div>i</div>
                <div>c</div>
                <div>u</div>
                <div>l</div>
                <div>u</div>
                <div>m</div>
            </a>
        </div>
    </header>
  )
}

export default Header