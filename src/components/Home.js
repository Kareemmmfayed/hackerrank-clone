import React from 'react'
import Brands from './Brands'


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
            <Brands />
        </div>
    )
}

export default Home
