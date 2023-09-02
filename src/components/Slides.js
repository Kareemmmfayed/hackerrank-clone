import React from 'react'
import Skills from './Skills'
import Tests from './Tests'
import Interview from './Interview'
import Question from './Question'

function Slides() {
    return (
        <div className='slides'>
            <h2>It's not a pipeline problem.</h2>
            <h2>It's a spotlight problem.</h2>
            <p>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview,
                give developers the tools they need to showcase their skills, passion, and potential.</p>
            <nav>
                <a href='#prep'>Prep</a>
                <a href='#screen'>Screen</a>
                <a href='#interview'>Interview</a>
            </nav>
            <Skills />
            <Tests />
            <Interview />
            <Question />
        </div>
    )
}

export default Slides