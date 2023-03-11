import React from 'react'
import '../Assets/ProjetosStyles.css'
import responsiveFormsImage from '../Assets/Images/Responsive-forms.jpg'
import toDoListImage from '../Assets/Images/To-do-list.jpg'

function Projetos() {
  return (
    <section className='projectsContainer' id='Work'>
        <div className='projectsHeaderContainer'>
            <div className='projectsLine'></div>
            <h4 className='projectsName light-blue'>Projetos</h4>
            <div className='projectsLine'></div>
        </div>
        <div className='mainProjectContainer'>
            <div className='projectCard'>
                <div className='projectImageContainer'>
                    <img src={responsiveFormsImage} className='projectImage' alt='responsive-forms'/>
                    <div className='projectText'>
                        <h4 className='projectTextHeader light-blue'>Forms</h4>
                        <p className='projectText'>Tematico de inscrição em serviços de streaming de jogos</p>
                        <a href='https://pablo-s-responsive-forms.netlify.app/' className='light-blue'>Link</a>
                    </div>
                </div>
            </div>
            <div className='projectCard'>
                <div className='projectImageContainer'>
                    <div className='projectText'>
                        <h4 className='projectTextHeader light-blue'>To do list</h4>
                        <p className='projectText'>Adicionar, editar e remover atividades</p>
                        <a href='https://pablo-s-to-do-list.netlify.app/' className='light-blue'>Link</a>
                    </div>
                    <img src={toDoListImage} className='projectImage'alt='To-do-list'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projetos