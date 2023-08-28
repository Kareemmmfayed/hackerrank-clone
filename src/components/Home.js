import React from 'react'
import pelton from '../assets/brands/peloton_black.png'
import atlassian from '../assets/brands/atlassian_black.png'
import bloomberg from '../assets/brands/bloomberg_black.png'
import vmware from '../assets/brands/vmware_black.png'
import strip from '../assets/brands/stripe_black.png'
import goldman from '../assets/brands/goldmansachs_black.png'
import adobe from '../assets/brands/adobe_black.png'
import linkedin from '../assets/brands/linkedin_black.png'

function Home() {
    return (
        <div className='home'>
            <h1>Skills speak louder <br/> than words</h1>
            <p>We help companies develop the strongest tech teams around.
            We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <div className='home__btns'>
                <button>Sign up</button>
                <button>Request demo</button>
            </div>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
            <ul>
                <li> <img src={pelton} alt='' /> </li>
                <li> <img src={atlassian} alt='' /> </li>
                <li> <img src={bloomberg} alt='' /> </li>
                <li> <img src={vmware} alt='' /> </li>
                <li> <img src={strip} alt='' /> </li>
                <li> <img src={goldman} alt='' /> </li>
                <li> <img src={adobe} alt='' /> </li>
                <li> <img src={linkedin} alt='' /> </li>
            </ul>
        </div>
    )
}

export default Home
