import React from 'react'
import Sobre from './Sobre.js'
import '../Assets/MainSecStyles.css'
import Skills from './Skills.js'
import Projetos from './Projetos.js'

function MainSec() {
  return (
    <div className='mainBodyContainer'>
        <Sobre/>
        <Skills/>
        <Projetos/>
    </div>
  )
}

export default MainSec