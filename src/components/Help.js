import React from 'react'
import Brands from './Brands'
import Carousel from './Carousel'

function Help() {
    return (
        <div className='help'>
            <div className='help__top'>
                <div className='help__top__text'>
                    <div>
                        Every company is a tech company. 
                        <span> We're here to help 'em all.</span>
                    </div>
                    <p>More than 3,000 tech teams, representing all industries and from countries around the world,
                        trust HackerRank to connect with developers and add cutting-edge skills to their teams.
                        That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.
                    </p>
                </div>
                <div className='help__top__slideShow'>
                    <Carousel />
                </div>
            </div>
            <div className='help__bot'>
                <Brands />
            </div>
        </div>
    )
}

export default Help