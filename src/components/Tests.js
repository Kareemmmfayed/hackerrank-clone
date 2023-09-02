import React from 'react'
import resume from '../assets/resume.jpg'
import Slide from './Slide'
import tree from '../assets/binarytree-1.png'
import code from '../assets/code-1.png'
import cont from '../assets/contenders.png'

function Tests() {
    return (
        <div className='tests'>
            <div className='tests__label'>:: Coding tests ::</div>
            <h3>Join the movement.</h3>
            <h3>Screen on skills.</h3>
            <div className='tests__svg'>
                <svg width="77" height="590" viewBox="0 0 77 590" fill="none" xmlns="http://www.w3.org/2000/svg">
			    	<path d="M26.894 12C26.894 12 25.8402 475.357 26.894 502.347C27.9479 529.337 48.1764 565.727 76.4257 589" stroke="#B7C9CC"></path>
			    	<path d="M64.4257 1H0.425663" stroke="#B7C9CC"></path>
			    </svg>
                <img src={resume} alt='resume'/>
            </div>
            <Slide 
            title="Leave the binary tree behind."
            p="Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job."
            btn="Start a free trial"
            image={tree}
            />
            <Slide title="Focus on what really matters: the code."
            p="Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea." 
            btn="Request a demo"
            image={code} 
            />
            <Slide title="Identify top contenders"
            p="Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere." 
            btn="Learn more"
            image={cont}
            />
        </div>
    )
}

export default Tests