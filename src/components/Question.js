import React, { useState, useEffect, useRef } from 'react'
import question from '../assets/question.png'
import one from '../assets/animation/tool1.png'
import two from '../assets/animation/tool2.png'
import three from '../assets/animation/tool3.png'
import four from '../assets/animation/tool4.png'
import five from '../assets/animation/tool5.png'
import six from '../assets/animation/tool6.png'
import seven from '../assets/animation/tool7.png'

function Question() {

    const myRef = useRef();
    const interviewRef = useRef();

    const [visible, setVisible] = useState();
    const [interVisible, setInterVisible] = useState();

    useEffect(() => {
        const Observer = new IntersectionObserver(entries => {
            entries.forEach( entry => {
                setVisible(entry.isIntersecting)
            })
        }, {
            threshold: 1,
        })
    
        Observer.observe(myRef.current)

        const interObserver = new IntersectionObserver(entries => {
            entries.forEach( entry => {
                setInterVisible(entry.isIntersecting)
                
            })
        }, {
            threshold: 0.7,
        })

        interObserver.observe(interviewRef.current)

    }, []); 

    return (
        <div className='question'>
            <ul>
                <li> <img ref={myRef} src={one} alt='' className= {(visible ? 'normal' : 'down') + " " +(interVisible ? 'goDown' : '')}/> </li>
                <li> <img ref={myRef} src={two} alt='' className= {(visible ? 'normal' : 'up') + " " +(interVisible ? 'goDown' : '')} /> </li>
                <li> <img ref={myRef} src={three} alt='' className= {(visible ? 'normal' : 'down') + " " +(interVisible ? 'goDown' : '')} /> </li>
                <li> <img ref={myRef} src={four} alt='' className= {(visible ? 'normal' : 'up') + " " +(interVisible ? 'goDown' : '')} /> </li>
                <li> <img ref={myRef} src={five} alt='' className= {(visible ? 'normal' : 'down') + " " +(interVisible ? 'goDown' : '')} /> </li>
                <li> <img ref={myRef} src={six} alt='' className= {(visible ? 'normal' : 'up') + " " +(interVisible ? 'goDown' : '')} /> </li>
                <li> <img ref={myRef} src={seven} alt='' className= {(visible ? 'normal' : 'down') + " " +(interVisible ? 'goDown' : '')} /> </li>                
            </ul>
            <img ref={interviewRef} src={question} alt='Interview'/>
        </div>
    )
}

export default Question