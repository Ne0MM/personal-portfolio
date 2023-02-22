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

        <div className='sobreContainer'>
            <div className='sobreTextContainer'>
                <div className='sobreLine'></div>
                <h4 className='sobreHeader'>Sobre mim</h4>
                <div className='sobreLine'></div>
            </div>

            <div className='sobreContent'>
                <p>Um estudante de ciencias & tecnologia pela UFRN (Universidade Federal do Rio Grande do Norte),
                    sempre fui interessado em tecnologia e matematica mas foram nas aulas de programação que eu descobri o meu amor pelo desenvolvimento de softwares
                    .Eu sou alguem muito comunicativo que sempre esta disposto a aprender e ensinar oque me faz muito bom em gerenciar e ajudar pessoas.
                    
                </p>
            </div>
        </div>

    </section>
  )
}

export default Sobre