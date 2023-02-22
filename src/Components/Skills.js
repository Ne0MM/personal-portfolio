import React from 'react'
import { useState } from 'react'
import '../Assets/SkillsStyles.css'

const descriptions = [
    {
        title : 'JavaScript',
        description : 'A linguagem de programação Javascript permite ao desenvolvedor implementar diversos itens de alto nível de complexidade em páginas web, como animações, mapas, gráficos ou informações que se atualizam em intervalos de tempo padrão, por exemplo.'
    },
    {
        title : 'TypeScript',
        description : 'TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.'
    },
    {
        title : 'CSS',
        description : 'Trata-se de uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, e representa diversas possibilidades para a formatação. O CSS ajuda a editar, alinhar, remover e trabalhar no espaço entre elementos de uma página.'
    },
    {
        title : 'HTML5',
        description : 'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.'
    },
    {
        title : 'React',
        description : 'O React é uma biblioteca modular, o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação. Isso torna mais fácil manter e expandir uma aplicação à medida que ela cresce, e permite que equipes de desenvolvimento trabalhem de forma mais eficiente juntas.'
    },
    {
        title : 'BootStrap',
        description : 'Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.'
    },
    {
        title : 'NextJs',
        description : 'Lançado em 2016, o Next. js é um framework de código aberto, criado com React e permite o desenvolvimento de aplicações tanto front-end quanto back-end.'
    },
    {
        title : 'TailWind',
        description : 'O Tailwind é um framework do CSS que nos fornece classes utilitárias de propósito único que são, em sua maioria, opinativas e que nos ajudam a projetar nossas páginas da web diretamente de dentro de nossos arquivos de marcação ou . js/. jsx/.'
    },
    {
        title : "",
        description : "Clique em um icone para ler uma breve descrição sobre"
    },
    {
        title : "",
        description : ""
    }
]

function Skills() {

    const [selectedIcon,setSelectedIcon] = useState(8);

    const handleIcon = (iconId) => {
        if(selectedIcon === iconId){
            setSelectedIcon(9)
        }else{
            setSelectedIcon(iconId)
        }
    }

  return (
    <section className='skillsContainer' id='Skills'>
        <div className='skillsHeader'>
            <h4 className='presentationName light-blue'>Tecnologias</h4>
        </div>
        <div className='skillsIconContainer'>  
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" 
                alt="javaScript"
                onClick={() => handleIcon(0)}
            />
            
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" 
                alt='typeScript'
                onClick={() => handleIcon(1)}
            />
            
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" 
                alt='css'
                onClick={() => handleIcon(2)}
            />
            
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" 
                alt='html5'
                onClick={() => handleIcon(3)}
            />
            
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                alt='react'
                onClick={() => handleIcon(4)}
            />
            
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" 
                alt='bootStrap'
                onClick={() => handleIcon(5)}
            />
            
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                alt='nextJs'
                onClick={() => handleIcon(6)}
            />
            
            <img 
                className='skillIcon'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                alt='tailWind'
                onClick={() => handleIcon(7)}
            />
          
          
        </div>
        <div className='skillDescription'>
            <h4 className='skillDescriptionHeader light-blue'>{descriptions[selectedIcon].title}</h4>
            <p className='skillDescriptionContent'>{descriptions[selectedIcon].description}</p>
        </div>
    </section>
  )
}

export default Skills