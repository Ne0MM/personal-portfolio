import React from 'react'
import selfPic from '../Assets/Images/pabloPort.jpg'
import '../Assets/SobreStyles.css'

function Sobre() {
  return (
    <section className='presentationContainer'>
        <div className='nameContainer'>
            <h4 className='presentationName light-blue'>Pablo Tavares</h4>
            <h3 className='presentationDegree'>Software Enginner</h3>
        </div>
        <div className='pictureContainer'>
            <div className='pictureSideLines'>
                <div className='sideLinesLine'></div>
                <div className='sideLinesLine'></div>
                <div className='sideLinesLine'></div>
                <div className='sideLinesLine'></div>
            </div>

            <div className='selfPicture'>
                <img src={selfPic} alt='selfPic' className='selfPicJpg'></img>
            </div>
            <div className='pictureSideLines pictureSideLinesTwo'>
                <div className='sideLinesLine'></div>
                <div className='sideLinesLine'></div>
                <div className='sideLinesLine'></div>
                <div className='sideLinesLine'></div>
            </div>
        </div>
    </section>
  )
}

export default Sobre