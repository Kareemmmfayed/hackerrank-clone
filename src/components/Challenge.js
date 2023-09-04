import React from 'react'

function Challenge() {
    return (
        <div className='challenge'>
            <div className='challenge__left'>
                <h2>
                    Practice coding challenges & <span className='block'>prep for interviews</span>
                </h2>
                <p>Start practicing your skills now and land the job of your dreams.</p>
                <button>Join the community</button>
            </div>
            <div className='challenge__right'>
                <h2>
                    Get started <span>hiring with HackerRank</span>
                </h2> 
                <p>More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank</p>
                <button>Request a demo</button>
            </div>
        </div>
    )
}

export default Challenge