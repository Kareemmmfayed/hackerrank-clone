import React from 'react'
import skillsImg from '../assets/community.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Skills() {
    return (
        <div className='skills'>
            <div className='skills__info'>
                <div className='skills__info__label'>:: Coding practice ::</div>
                <h3>Explore and expand your skills.</h3>
                <p>Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers.
                Access the content you need to develop new skills - and land the job you've dreamed of.</p>
                <button>Sing up and practice <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
            <img src={skillsImg} alt='Candidate Profile'/>
        </div>
    )
}

export default Skills