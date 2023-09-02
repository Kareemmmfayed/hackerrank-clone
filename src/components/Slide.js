import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Slide({title, p, btn, image}) {
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('slide__show', entry.isIntersecting);

        })
    }, {
        threshold: 0.5,
    })

    let myImages = document.querySelectorAll(".slide img")

    myImages.forEach(myImage => {
        observer.observe(myImage)
    })

    return (
        <div className='slide'>
            <div className='slide__info'>
                <h2>{title}</h2>
                <p>{p}</p>
                <button>{btn} <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
            <img src={image} alt={title} />
        </div>
    )
}

export default Slide